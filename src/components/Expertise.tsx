import { Brain, FileText, TrendingUp, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";

// Logo component using Simple Icons CDN
const Logo = ({ name, slug }: { name: string; slug: string }) => (
  <div className="flex flex-col items-center gap-1 group/logo">
    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm border border-border/50 transition-all duration-300 group-hover/logo:scale-110 group-hover/logo:border-primary/50">
      <img
        src={`https://cdn.simpleicons.org/${slug}`}
        alt={name}
        className="w-6 h-6"
        loading="lazy"
      />
    </div>
    <span className="text-[10px] text-muted-foreground/70 font-medium">{name}</span>
  </div>
);

const expertiseAreas = [
  {
    icon: TrendingUp,
    title: "Growth Systems & Automation",
    description: "Build systems that turn attention into predictable acquisition. Marketing, sales, and onboarding automation that scales.",
    gradient: "from-ocean-deep to-ocean-light",
    logos: [
      { name: "HubSpot", slug: "hubspot" },
      { name: "Zapier", slug: "zapier" },
      { name: "Make", slug: "make" },
      { name: "n8n", slug: "n8n" },
      { name: "Salesforce", slug: "salesforce" },
      { name: "Segment", slug: "segment" },
    ],
  },
  {
    icon: FileText,
    title: "Technical Content & Docs",
    description: "Technical articles, guides, and product documentation that users actually understand. Content engines that scale organically.",
    gradient: "from-ocean-light to-accent",
    logos: [
      { name: "Notion", slug: "notion" },
      { name: "GitBook", slug: "gitbook" },
      { name: "Docusaurus", slug: "docusaurus" },
      { name: "Mintlify", slug: "mintlify" },
      { name: "ReadMe", slug: "readme" },
      { name: "Confluence", slug: "confluence" },
    ],
  },
  {
    icon: Brain,
    title: "SEO & Content Marketing",
    description: "Data-driven content strategies, blog systems, explainer videos, and organic acquisition funnels for SaaS and developer tools.",
    gradient: "from-accent to-amber-warm",
    logos: [
      { name: "Ahrefs", slug: "ahrefs" },
      { name: "Semrush", slug: "semrush" },
      { name: "Webflow", slug: "webflow" },
      { name: "WordPress", slug: "wordpress" },
      { name: "Framer", slug: "framer" },
      { name: "Loom", slug: "loom" },
    ],
  },
  {
    icon: Code2,
    title: "Paid Ads & Acquisition",
    description: "Landing pages, product messaging, email marketing, and paid campaigns that bring in qualified leads.",
    gradient: "from-amber-warm to-ocean-deep",
    logos: [
      { name: "Google Ads", slug: "googleads" },
      { name: "Meta", slug: "meta" },
      { name: "LinkedIn", slug: "linkedin" },
      { name: "Mailchimp", slug: "mailchimp" },
      { name: "Klaviyo", slug: "klaviyo" },
      { name: "Mixpanel", slug: "mixpanel" },
    ],
  },
];

const ExpertiseCard = ({ area, index }: { area: typeof expertiseAreas[0]; index: number }) => {
  const Icon = area.icon;

  return (
    <Card
      className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="relative p-6 pb-4">
        {/* Logo grid */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {area.logos.map((logo) => (
            <Logo key={logo.slug} name={logo.name} slug={logo.slug} />
          ))}
        </div>
        {/* Icon badge */}
        <div className={`absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-br ${area.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
      <div className="p-6 pt-2 border-t border-border/30">
        <h3 className="text-2xl font-bold text-foreground mb-3 font-['Space_Grotesk']">
          {area.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {area.description}
        </p>
      </div>
    </Card>
  );
};

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
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
