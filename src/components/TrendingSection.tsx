import { motion } from "framer-motion";
import { Heart, ShoppingBag, TrendingUp } from "lucide-react";
import sneaker1 from "@/assets/sneaker-1.jpg";
import sneaker2 from "@/assets/sneaker-2.jpg";
import sneaker3 from "@/assets/sneaker-3.jpg";
import sneaker4 from "@/assets/sneaker-4.jpg";
import sneaker5 from "@/assets/sneaker-5.jpg";
import sneaker6 from "@/assets/sneaker-6.jpg";

const products = [
  { id: 1, name: "Shadow Runner X", brand: "Nike", price: 189, img: sneaker1, hype: 92 },
  { id: 2, name: "Blaze Pro Elite", brand: "Adidas", price: 220, img: sneaker2, hype: 87 },
  { id: 3, name: "Cloud Walker", brand: "New Balance", price: 165, img: sneaker3, hype: 78 },
  { id: 4, name: "Neon Striker", brand: "Puma", price: 245, img: sneaker4, hype: 95 },
  { id: 5, name: "Retro Court OG", brand: "Jordan", price: 310, img: sneaker5, hype: 99 },
  { id: 6, name: "Trail Blitz", brand: "Nike", price: 175, img: sneaker6, hype: 81 },
];

const TrendingSection = () => {
  return (
    <section id="trending" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Trending Now
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-bold">
              Most Wanted
            </h2>
          </div>
          <a href="#" className="hidden md:block text-muted-foreground hover:text-primary transition-colors text-sm font-medium">
            View All →
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={product.img}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Hype meter */}
                <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full gradient-primary animate-pulse-glow" />
                  <span className="text-xs font-heading font-semibold text-primary">{product.hype}% Hype</span>
                </div>
                {/* Quick actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Add to wishlist">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors" aria-label="Add to cart">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{product.brand}</p>
                <h3 className="font-heading font-semibold text-foreground mb-2">{product.name}</h3>
                <p className="font-heading text-lg font-bold text-primary">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
