import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "A Smarter Way to Reinstall All Your Mac Apps: Practical Examples of Using Homebrew & Brewfiles",
    url: "https://blog.marvelsoft.tech/2025/12/09/a-smarter-way-to-reinstall-all-your-mac-apps-real-examples-of-using-homebrew-brewfiles/",
    gradient: "from-accent to-ocean-deep",
  },
  {
    title: "Unified Namespace + CMMS: Building an Integrated Asset Ecosystem",
    url: "https://www.clickmaint.com/blog/cmms-unified-namespace",
    gradient: "from-ocean-deep to-ocean-light",
  },
  {
    title: "A Compelling Brightly CMMS Alternative to Consider",
    url: "https://www.clickmaint.com/blog/brightly-cmms-alternatives",
    gradient: "from-ocean-light to-accent",
  },
  {
    title: "A Compelling LLumin CMMS Alternative to Consider",
    url: "https://www.clickmaint.com/blog/llumin-cmms-alternatives",
    gradient: "from-accent to-amber-warm",
  },
  {
    title: "The Rise of MLaaS: How Cloud-Based AI Makes Predictive Maintenance Affordable for Every Business",
    url: "https://maintafrica.com/2025/11/12/the-rise-of-mlaas-how-cloud-based-ai-makes-predictive-maintenance-affordable-for-every-business/",
    gradient: "from-amber-warm to-ocean-deep",
  },
  {
    title: "What is Electrical Preventive Maintenance?",
    url: "https://maintenanceworld.com/2025/10/23/what-is-electrical-preventive-maintenance/",
    gradient: "from-accent to-ocean-light",
  },
  {
    title: "CMMS Data Migration Best Practices - Ensuring Smooth Transitions between Platforms",
    url: "https://www.clickmaint.com/blog/cmms-data-migration-best-practices-ensuring-smooth-transitions-between-platforms",
    gradient: "from-ocean-light to-amber-warm",
  },
];

export const Blog = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Technical Insights
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, maintenance engineering, and growth strategies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group cursor-pointer p-8 bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
              onClick={() => window.open(post.url, '_blank')}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${post.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ArrowRight className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3 font-['Space_Grotesk'] group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Read Article →
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
