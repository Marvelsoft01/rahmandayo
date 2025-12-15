import { Brain, FileText, TrendingUp, Code2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

// Lazy load images only when they enter viewport
const LazyImage = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {(!isInView || !isLoaded) && (
        <div className="w-full h-full bg-muted animate-pulse" />
      )}
    </div>
  );
};

const expertiseAreas = [
  {
    icon: TrendingUp,
    title: "Growth Systems & Automation",
    description: "Build systems that turn attention into predictable acquisition. Marketing, sales, and onboarding automation that scales.",
    gradient: "from-ocean-deep to-ocean-light",
    image: () => import("@/assets/expertise-growth-automation.jpg"),
  },
  {
    icon: FileText,
    title: "Technical Content & Docs",
    description: "Technical articles, guides, and product documentation that users actually understand. Content engines that scale organically.",
    gradient: "from-ocean-light to-accent",
    image: () => import("@/assets/expertise-technical-docs.jpg"),
  },
  {
    icon: Brain,
    title: "SEO & Content Marketing",
    description: "Data-driven content strategies, blog systems, explainer videos, and organic acquisition funnels for SaaS and developer tools.",
    gradient: "from-accent to-amber-warm",
    image: () => import("@/assets/expertise-seo-content.jpg"),
  },
  {
    icon: Code2,
    title: "Paid Ads & Acquisition",
    description: "Landing pages, product messaging, email marketing, and paid campaigns that bring in qualified leads.",
    gradient: "from-amber-warm to-ocean-deep",
    image: () => import("@/assets/expertise-paid-ads.jpg"),
  },
];

const ExpertiseCard = ({ area, index }: { area: typeof expertiseAreas[0]; index: number }) => {
  const [imageSrc, setImageSrc] = useState<string>("");
  const Icon = area.icon;

  useEffect(() => {
    area.image().then((module) => setImageSrc(module.default));
  }, [area]);

  return (
    <Card
      className="group overflow-hidden bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
    >
      <div className="relative h-48 overflow-hidden">
        {imageSrc && (
          <LazyImage
            src={imageSrc}
            alt={area.title}
            className="w-full h-full"
          />
        )}
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
