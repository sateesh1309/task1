import { ExternalLink, UserCircle, Mail, Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-heading text-sm text-muted-foreground flex items-center gap-1">
        © {new Date().getFullYear()} Made with <Heart size={14} className="text-neon-pink" /> by
        <span className="gradient-text font-semibold ml-1">Sateesh Rompilli</span>
      </p>
      <div className="flex gap-4">
        {[
          { icon: ExternalLink, href: "https://github.com" },
          { icon: UserCircle, href: "https://linkedin.com" },
          { icon: Mail, href: "mailto:your@email.com" },
        ].map(({ icon: Icon, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:gradient-bg hover:text-primary-foreground transition-all duration-300 hover:scale-110"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
