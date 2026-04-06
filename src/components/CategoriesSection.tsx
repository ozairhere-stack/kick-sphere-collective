import { motion } from "framer-motion";

const categories = [
  { name: "Men", emoji: "👟", count: "2,400+" },
  { name: "Women", emoji: "👠", count: "1,800+" },
  { name: "Kids", emoji: "🧒", count: "900+" },
  { name: "Limited Edition", emoji: "🔥", count: "120+" },
  { name: "Sports", emoji: "⚡", count: "3,200+" },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Browse</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">Shop by Category</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative rounded-xl border border-border bg-background p-6 md:p-8 text-center hover:border-primary/50 transition-colors"
            >
              <span className="text-4xl md:text-5xl block mb-4">{cat.emoji}</span>
              <h3 className="font-heading font-semibold text-foreground mb-1">{cat.name}</h3>
              <p className="text-muted-foreground text-xs">{cat.count} items</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
