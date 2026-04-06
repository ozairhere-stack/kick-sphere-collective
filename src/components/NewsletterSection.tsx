import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Stay Updated</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Never Miss a Drop</h2>
          <p className="text-muted-foreground font-body mb-8">
            Get notified about exclusive releases, limited editions, and special offers before anyone else.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body"
            />
            <button
              type="submit"
              className="gradient-primary text-primary-foreground px-6 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-transform neon-glow"
            >
              <Send className="w-4 h-4" /> Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
