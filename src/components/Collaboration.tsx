import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Blog } from "@/components/Blog";

export const Collaboration = () => {
  return (
    <section id="collaboration" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Open to Collaboration
          </h2>
          <p className="text-xl text-muted-foreground">
            If your project lives where code meets creativity, we'll likely get along.
          </p>
        </div>

        <div className="space-y-6 mb-12">
          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              AI / ML for Maintenance and Reliability Engineering
            </h3>
            <p className="text-muted-foreground">
              Building intelligent systems that predict equipment health and optimize maintenance schedules.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Technical Writing
            </h3>
            <p className="text-muted-foreground">
              Creating documentation, tutorials, and content that bridges technical complexity and user understanding.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              SEO Content Strategy for Technical Startups
            </h3>
            <p className="text-muted-foreground">
              Developing content strategies that help technical products get discovered and adopted.
            </p>
          </div>

          <div className="bg-gradient-card p-6 rounded-xl border border-border shadow-soft hover:shadow-glow transition-all duration-500 animate-slide-in-right" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Growth Systems that Connect Data, Tech, and Storytelling
            </h3>
            <p className="text-muted-foreground">
              Building scalable systems that combine technical infrastructure with compelling narratives.
            </p>
          </div>
        </div>

        <Blog />

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
