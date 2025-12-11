export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-['Space_Grotesk']">
            Tech Meets Growth
          </h2>
        </div>
        
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p className="animate-slide-in-right" style={{ animationDelay: "0.1s", opacity: 0 }}>
            My background blends <span className="text-foreground font-semibold">growth strategy</span>, 
            <span className="text-foreground font-semibold"> automation</span>, 
            <span className="text-foreground font-semibold"> technical writing</span>, and 
            <span className="text-foreground font-semibold"> full-stack development</span> — giving me a unique ability to translate complex products into content, systems, and campaigns that attract users and drive revenue.
          </p>
          
          <p className="animate-slide-in-right" style={{ animationDelay: "0.2s", opacity: 0 }}>
            I understand how software works, and I know how to communicate and market it in ways that convert.
          </p>
          
          <div className="pt-6 animate-scale-in" style={{ animationDelay: "0.3s", opacity: 0 }}>
            <div className="bg-gradient-card p-8 rounded-2xl shadow-soft border border-border hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
                Current Focus
              </h3>
              <p className="text-muted-foreground mb-4">
                I'm helping <span className="text-ocean-deep font-semibold">SaaS products</span> build growth systems that turn attention into predictable acquisition, automate marketing and onboarding workflows, and develop content engines that scale organically.
              </p>
              <p className="text-muted-foreground">
                If your project lives at the intersection of <span className="text-ocean-deep font-semibold">tech, content, automation, and growth</span> — we'll work well together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
