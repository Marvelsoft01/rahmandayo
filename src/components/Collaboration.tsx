import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Collaboration = () => {
  return (
    <section id="collaboration" className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground">
            Open to collaborations with teams building at the intersection of tech, content, automation, and growth.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              SaaS Startups
            </h3>
            <p className="text-muted-foreground">
              Growth systems, content engines, and automation for early-stage and scaling SaaS products.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              AI / ML Product Teams
            </h3>
            <p className="text-muted-foreground">
              Technical content, documentation, and go-to-market strategy for AI-powered products.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Developer Tools
            </h3>
            <p className="text-muted-foreground">
              Technical writing, API documentation, and developer marketing that resonates with engineers.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Founders Who Need the Full Stack
            </h3>
            <p className="text-muted-foreground">
              Automation + technical writing + growth execution — all in one. From content to campaigns to conversion.
            </p>
          </div>
        </div>

        <div className="text-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg" 
            className="bg-gradient-accent text-primary-foreground shadow-glow hover:shadow-xl group"
            onClick={() => window.location.href = 'mailto:dayo@marvelsoft.tech'}
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
