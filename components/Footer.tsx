import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/20 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>From Philippines</span>
          </div>

          <div className="flex gap-6">
            <span
              className="text-muted-foreground/50 cursor-not-allowed transition-colors"
              title="Link disabled"
            >
              <Github className="w-5 h-5" />
            </span>
            <span
              className="text-muted-foreground/50 cursor-not-allowed transition-colors"
              title="Link disabled"
            >
              <Linkedin className="w-5 h-5" />
            </span>
            <a
              href="mailto:john@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-muted-foreground">
            © 2025 Jobai Damba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
