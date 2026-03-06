import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-['Space_Grotesk']">
            Building & Securing
          </h2>
        </div>
        
        <div 
          className="animate-scale-in bg-gradient-card p-8 rounded-2xl border border-border shadow-soft transition-all duration-500 hover:shadow-glow"
          style={{ animationDelay: "0.1s", opacity: 0, transform: "perspective(1000px)", transformStyle: "preserve-3d" }}
        >
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground" style={{ transform: "translateZ(20px)" }}>
            <p>
              I help organizations build digital systems that <span className="text-foreground font-semibold">scale safely</span>.
            </p>
            <p>
              My work combines <span className="text-foreground font-semibold">software development</span>, 
              <span className="text-foreground font-semibold"> growth strategy</span>, and 
              <span className="text-foreground font-semibold"> application security</span>. I see products as systems: how they grow, where complexity builds, and where risks emerge.
            </p>
            <p>
              Growth without security creates exposure. I ensure applications, APIs, and infrastructure are <span className="text-foreground font-semibold">secure by design</span>, not patched after the fact.
            </p>

            <Button
              asChild
              variant="outline"
              className="mt-2 gap-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <a
                href="https://drive.google.com/file/d/1AfLLqbh1Vbqc5sJGS80xx0Ic0rtoHPIX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-12 animate-scale-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-500">
            <h3 className="text-2xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
              Current Focus
            </h3>
            <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
              <li><span className="text-ocean-deep font-semibold">Application & Web Security</span></li>
              <li><span className="text-ocean-deep font-semibold">Secure Architecture & Threat Awareness</span></li>
              <li><span className="text-ocean-deep font-semibold">Growth Systems & Technical Content</span></li>
              <li><span className="text-ocean-deep font-semibold">Automation</span> for marketing, security, and operations</li>
            </ul>
            <p className="text-muted-foreground">
              I help teams scale digital infrastructure <span className="text-ocean-deep font-semibold">without compromising resilience</span>. Open to collaborating with organizations building secure, reliable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
