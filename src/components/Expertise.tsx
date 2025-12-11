import { Brain, FileText, TrendingUp, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const expertiseAreas = [
  {
    icon: TrendingUp,
    title: "Growth Systems & Automation",
    description: "Build systems that turn attention into predictable acquisition. Marketing, sales, and onboarding automation that scales.",
    gradient: "from-ocean-deep to-ocean-light",
  },
  {
    icon: FileText,
    title: "Technical Content & Docs",
    description: "Technical articles, guides, and product documentation that users actually understand. Content engines that scale organically.",
    gradient: "from-ocean-light to-accent",
  },
  {
    icon: Brain,
    title: "SEO & Content Marketing",
    description: "Data-driven content strategies, blog systems, and organic acquisition funnels for SaaS and developer tools.",
    gradient: "from-accent to-amber-warm",
  },
  {
    icon: Code2,
    title: "Paid Ads & Acquisition",
    description: "Landing pages, product messaging, email marketing, and paid campaigns that bring in qualified trials and demos.",
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
