import { Linkedin, Mail, Github } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary-foreground mb-2 font-['Space_Grotesk']">
              Dayo
            </h3>
            <p className="text-primary-foreground/80">
              Where code meets creativity
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/abdulwahab-rahman-dayo-302665178/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:dayo@marvelsoft.tech"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/abdulwahabdayo"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors backdrop-blur-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © {new Date().getFullYear()} Abdulwahab Rahman Dayo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
