import { Brain, FileText, TrendingUp, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI/ML for Maintenance",
    description: "Predictive maintenance models using AI and machine learning to forecast equipment health and reduce downtime.",
    gradient: "from-ocean-deep to-ocean-light",
  },
  {
    icon: FileText,
    title: "Technical Writing",
    description: "Clear, compelling technical documentation that makes complex concepts accessible to diverse audiences.",
    gradient: "from-ocean-light to-accent",
  },
  {
    icon: TrendingUp,
    title: "SEO Content Strategy",
    description: "Data-driven content strategies for technical startups to improve visibility and reach target audiences.",
    gradient: "from-accent to-amber-warm",
  },
  {
    icon: Code2,
    title: "Growth Systems",
    description: "Connecting data, technology, and storytelling to build scalable growth systems for technical products.",
    gradient: "from-amber-warm to-ocean-deep",
  },
];

export const Expertise = () => {
  return (
    <section className="py-24 bg-ocean-subtle/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Expertise Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bridging technical depth with strategic communication
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index}
                className="group p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-['Space_Grotesk']">
                  {area.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
