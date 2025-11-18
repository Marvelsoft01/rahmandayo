import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Expertise } from "@/components/Expertise";
import { Blog } from "@/components/Blog";
import { Collaboration } from "@/components/Collaboration";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Expertise />
      <Blog />
      <Collaboration />
      <Footer />
    </main>
  );
};

export default Index;
