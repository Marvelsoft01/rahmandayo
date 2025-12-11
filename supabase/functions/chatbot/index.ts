import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatRequest {
  messages: Array<{ role: string; content: string }>;
  captureEmail?: string;
  visitorName?: string;
  interests?: string;
}

const systemPrompt = `You are Dayo's AI assistant on his personal website. Dayo is Abdulwahab Rahman Dayo - a Growth Strategist, Technical Writer, and Full-Stack Developer who helps SaaS founders and tech teams grow faster.

Your role is to:
1. Warmly greet visitors and understand what they're looking for
2. Share relevant information about Dayo's expertise in:
   - Growth Systems & Automation (marketing, sales, onboarding automation)
   - Technical Content & Documentation
   - SEO & Content Marketing for SaaS
   - Paid Ads & Acquisition Funnels
3. Answer questions about his work and services
4. When appropriate, encourage visitors to collaborate by sharing their email

Key facts about Dayo:
- Helps SaaS founders and tech teams grow through clear storytelling, technical content, automation, and data-driven marketing
- Blends growth strategy, automation, technical writing, and full-stack development
- Translates complex products into content, systems, and campaigns that attract users and drive revenue
- Works with SaaS startups, AI/ML product teams, developer tools, and tech companies

Be helpful, professional, and conversational. If someone expresses interest in collaborating, gently ask for their name and email to connect them with Dayo. Keep responses concise but informative.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages, captureEmail, visitorName, interests }: ChatRequest = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // If email is provided, send notification to Dayo via Resend
    if (captureEmail) {
      const resendKey = Deno.env.get("RESEND_API_KEY");
      if (resendKey) {
        try {
          const emailResponse = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${resendKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              from: "Dayo's Website <onboarding@resend.dev>",
              to: ["dayo@marvelsoft.tech"],
              subject: `New Lead: ${visitorName || "Website Visitor"}`,
              html: `
                <h2>New Lead from Your Website</h2>
                <p><strong>Name:</strong> ${visitorName || "Not provided"}</p>
                <p><strong>Email:</strong> ${captureEmail}</p>
                <p><strong>Interests:</strong> ${interests || "Not specified"}</p>
                <h3>Conversation Summary:</h3>
                <div style="background: #f5f5f5; padding: 15px; border-radius: 8px;">
                  ${messages.slice(-6).map(m => `<p><strong>${m.role}:</strong> ${m.content}</p>`).join("")}
                </div>
              `,
            }),
          });
          
          if (emailResponse.ok) {
            console.log("Lead email sent successfully");
          } else {
            const errorData = await emailResponse.text();
            console.error("Resend API error:", errorData);
          }
        } catch (emailError) {
          console.error("Email error:", emailError);
        }
      } else {
        console.log("RESEND_API_KEY not configured, skipping email");
      }

      return new Response(
        JSON.stringify({ message: "Thank you! Dayo will be in touch soon." }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Chat with AI
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      throw new Error("AI gateway error");
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chatbot error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
