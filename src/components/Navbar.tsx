import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, Heart, Menu, X } from "lucide-react";

const navLinks = ["Men", "Women", "Kids", "Limited Edition", "Sports"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            KICK<span className="text-primary">SPHERE</span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Wishlist">
              <Heart className="w-5 h-5" />
            </button>
            <button className="relative text-muted-foreground hover:text-primary transition-colors" aria-label="Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full gradient-primary text-[10px] font-bold flex items-center justify-center text-primary-foreground">
                3
              </span>
            </button>
            <button
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-lg font-heading font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
