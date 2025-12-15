import { Brain, FileText, TrendingUp, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

import growthAutomationImg from "@/assets/expertise-growth-automation.jpg";
import technicalDocsImg from "@/assets/expertise-technical-docs.jpg";
import seoContentImg from "@/assets/expertise-seo-content.jpg";
import paidAdsImg from "@/assets/expertise-paid-ads.jpg";

const expertiseAreas = [
  {
    icon: TrendingUp,
    title: "Growth Systems & Automation",
    description: "Build systems that turn attention into predictable acquisition. Marketing, sales, and onboarding automation that scales.",
    gradient: "from-ocean-deep to-ocean-light",
    image: growthAutomationImg,
  },
  {
    icon: FileText,
    title: "Technical Content & Docs",
    description: "Technical articles, guides, and product documentation that users actually understand. Content engines that scale organically.",
    gradient: "from-ocean-light to-accent",
    image: technicalDocsImg,
  },
  {
    icon: Brain,
    title: "SEO & Content Marketing",
    description: "Data-driven content strategies, blog systems, explainer videos, and organic acquisition funnels for SaaS and developer tools.",
    gradient: "from-accent to-amber-warm",
    image: seoContentImg,
  },
  {
    icon: Code2,
    title: "Paid Ads & Acquisition",
    description: "Landing pages, product messaging, email marketing, and paid campaigns that bring in qualified leads.",
    gradient: "from-amber-warm to-ocean-deep",
    image: paidAdsImg,
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
                className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={area.image} 
                    alt={area.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-['Space_Grotesk']">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
