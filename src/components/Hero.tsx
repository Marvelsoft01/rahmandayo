import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-light/20 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-warm/20 rounded-full blur-3xl animate-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-['Space_Grotesk']">
              Abdulwahab Rahman Dayo
            </h1>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              Building and marketing technical solutions
            </p>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s", opacity: 0 }}>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              I help founders validate ideas faster, reach their audience, and grow sustainably.
            </p>
          </div>

          <div className="animate-scale-in" style={{ animationDelay: "0.6s", opacity: 0 }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow group"
                onClick={() => document.getElementById('collaboration')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Collaborate
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <div className="flex gap-3">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
                  onClick={() => window.open('https://www.linkedin.com/in/abdulwahab-rahman-dayo', '_blank')}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm"
                  onClick={() => window.location.href = 'mailto:contact@abdulwahabdayo.com'}
                >
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
