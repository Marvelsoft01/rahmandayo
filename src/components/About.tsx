export const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 font-['Space_Grotesk']">
            Building, Growing & Securing
          </h2>
        </div>
        
        <div 
          className="animate-scale-in bg-gradient-card p-8 rounded-2xl border border-border shadow-soft transition-all duration-500 hover:shadow-glow"
          style={{ animationDelay: "0.1s", opacity: 0, transform: "perspective(1000px)", transformStyle: "preserve-3d" }}
        >
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground" style={{ transform: "translateZ(20px)" }}>
            <p>
              My interest sits at the intersection of <span className="text-foreground font-semibold">System Design & Architecture</span>, <span className="text-foreground font-semibold">Growth Strategy</span>, and <span className="text-foreground font-semibold">Cybersecurity</span>. This combination allows me to approach products and platforms from a system-level perspective, understanding how they grow, where complexity appears, and where security risks emerge.
            </p>
            <p>
              As companies expand digitally, their attack surface expands. Growth without security creates exposure. My focus is on ensuring applications, APIs, and data infrastructure are <span className="text-foreground font-semibold">designed with security in mind from the start</span>, not added as a patch later.
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
            <h3 className="text-2xl font-bold text-foreground mb-2 font-['Space_Grotesk']">
              My goal is simple:
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Help teams scale their digital infrastructure without compromising resilience.
            </p>
            <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">I am always open to tasks across:</h4>
            <ul className="space-y-2 text-muted-foreground mb-6 list-disc list-inside">
              <li><span className="text-ocean-deep font-semibold">Growth Systems & Technical Content</span></li>
              <li><span className="text-ocean-deep font-semibold">Automation</span> for marketing, security, and operations</li>
              <li><span className="text-ocean-deep font-semibold">Application & Web Security</span></li>
              <li><span className="text-ocean-deep font-semibold">Secure System Design & Architecture</span></li>
              <li><span className="text-ocean-deep font-semibold">Threat & Vulnerability Awareness</span></li>
            </ul>
            <p className="text-muted-foreground">
              Always open to collaborating with organizations that care about building <span className="text-ocean-deep font-semibold">secure, reliable systems</span> as they grow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
