import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Implementing Remaining Useful Life (RUL) Prediction Models: A Comprehensive Guide to Time-Series Analysis in Predictive Maintenance",
    excerpt: "Deep dive into LSTM networks and survival analysis for accurate equipment failure forecasting.",
    date: "2024-11-15",
    readTime: "12 min read",
    gradient: "from-ocean-deep to-ocean-light",
  },
  {
    title: "From Raw Sensor Data to Actionable Insights: Building End-to-End ML Pipelines for Industrial IoT Systems",
    excerpt: "A practical framework for preprocessing, feature engineering, and deploying machine learning models in production environments.",
    date: "2024-11-08",
    readTime: "15 min read",
    gradient: "from-ocean-light to-accent",
  },
  {
    title: "Technical SEO for Developer Tools: How to Build Content Strategies That Rank Without Sacrificing Technical Depth",
    excerpt: "Balancing search optimization with authentic technical content for startup growth and audience reach.",
    date: "2024-11-01",
    readTime: "10 min read",
    gradient: "from-accent to-amber-warm",
  },
];

export const Blog = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Space_Grotesk']">
            Technical Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, maintenance engineering, and growth strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="group cursor-pointer bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => window.open('https://docs.rahmandayo.com/', '_blank')}
            >
              <div className={`h-2 bg-gradient-to-r ${post.gradient} group-hover:h-3 transition-all duration-300`} />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-3 font-['Space_Grotesk'] line-clamp-3 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all duration-300">
                  Read Article
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
