export const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-['Space_Grotesk']">
            Where Code Meets Creativity
          </h2>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="animate-slide-in-right" style={{ animationDelay: "0.1s", opacity: 0 }}>
            With a background in <span className="text-foreground font-semibold">full-stack development</span>, 
            <span className="text-foreground font-semibold"> marketing</span>, and 
            <span className="text-foreground font-semibold"> technical writing</span>, I approach problems from both 
            technical and storytelling perspectives.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: "0.2s", opacity: 0 }}>
            I build products that work, and craft messages that resonate.
          </p>
          
          <div className="pt-6 animate-scale-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
                Current Focus
              </h3>
              <p className="text-muted-foreground mb-4">
                My current focus is on <span className="text-ocean-deep font-semibold">Predictive Maintenance (PdM)</span>, 
                using <span className="text-ocean-deep font-semibold">AI and Machine Learning</span>.
              </p>
              <p className="text-muted-foreground">
                I'm exploring how PdM models can automate RUL (Remaining Useful Life) prediction across industries, 
                helping maintenance and reliability engineers forecast equipment health and reduce downtime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
