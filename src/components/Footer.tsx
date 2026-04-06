import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Shop: ["Men", "Women", "Kids", "Limited Edition", "Sports", "New Arrivals"],
  Help: ["Customer Service", "Shipping Info", "Returns", "Size Guide", "FAQ"],
  Company: ["About Us", "Blog", "Careers", "Press", "Sustainability"],
};

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-heading text-2xl font-bold text-foreground mb-4 block">
              KICK<span className="text-primary">SPHERE</span>
            </a>
            <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
              Your premium destination for authentic sneakers from the world's top brands.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                  aria-label="Social media"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2026 KickSphere. All rights reserved.</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a key={link} href="#" className="text-muted-foreground text-xs hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
