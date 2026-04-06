import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-sneaker.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Featured sneaker" width={1920} height={1080} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-heading font-semibold text-sm md:text-base tracking-widest uppercase mb-4"
          >
            New Season 2026
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-6"
          >
            Step Into
            <br />
            The <span className="text-primary text-glow">Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-lg md:text-xl max-w-md mb-8 font-body"
          >
            Discover exclusive drops and limited edition sneakers from the world's most iconic brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#trending"
              className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:scale-105 transition-transform neon-glow"
            >
              Shop Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#categories"
              className="border border-border text-foreground px-8 py-4 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Explore
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 mt-12"
          >
            {[
              { value: "500+", label: "Brands" },
              { value: "10K+", label: "Products" },
              { value: "50K+", label: "Happy Customers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
