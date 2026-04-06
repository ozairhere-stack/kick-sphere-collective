import { motion } from "framer-motion";

const brands = ["NIKE", "ADIDAS", "PUMA", "NEW BALANCE", "JORDAN"];

const BrandsSection = () => {
  return (
    <section className="py-16 md:py-24 border-y border-border">
      <div className="container mx-auto px-4 md:px-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-widest mb-10 font-heading">
          Featured Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {brands.map((brand, i) => (
            <motion.span
              key={brand}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="font-heading text-2xl md:text-4xl font-bold text-muted-foreground/30 hover:text-primary transition-colors duration-500 cursor-pointer select-none"
            >
              {brand}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
