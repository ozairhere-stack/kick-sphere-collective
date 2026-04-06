import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Alex M.", text: "Best sneaker marketplace I've used. The limited edition drops are insane!", rating: 5, avatar: "A" },
  { name: "Sarah K.", text: "Fast shipping and authentic products every time. KickSphere is my go-to.", rating: 5, avatar: "S" },
  { name: "James R.", text: "The Hype Meter feature is genius. Always know what's trending before anyone else.", rating: 5, avatar: "J" },
];

const ReviewsSection = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-heading text-sm tracking-widest uppercase mb-2">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold">What Sneakerheads Say</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground font-body leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  {review.avatar}
                </div>
                <span className="font-heading font-medium text-foreground">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
