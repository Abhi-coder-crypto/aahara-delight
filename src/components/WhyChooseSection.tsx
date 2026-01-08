import { motion } from 'framer-motion';
import { Leaf, Utensils, Sparkles, Home, Wallet, ShieldCheck, Clock } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: '100% Pure Veg',
    description: 'Every dish is crafted with carefully selected vegetarian ingredients.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Utensils,
    title: 'Multi-Cuisine',
    description: 'From Indian to Italian, Chinese to Mexican — explore global flavors.',
    color: 'bg-orange-50 text-orange-600',
  },
  {
    icon: ShieldCheck,
    title: 'Hygienic & Fresh',
    description: 'We source the freshest produce daily for authentic taste and health.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Home,
    title: 'Warm Ambience',
    description: 'A cozy, welcoming space perfect for families and celebrations.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Fast Service',
    description: 'Enjoy your favorite meals served fresh and quick by our experts.',
    color: 'bg-amber-50 text-amber-600',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-cream to-cream-dark overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-champagne bg-champagne/10 px-4 py-2 rounded-full"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">The Aahara Experience</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl lg:text-6xl font-bold text-foreground"
          >
            Why Dine With <span className="text-leaf">Us?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            We combine tradition with modern culinary art to bring you an unforgettable dining experience.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -12 }}
              className="relative group p-8 rounded-[2rem] bg-white shadow-soft hover:shadow-hover transition-all duration-500 text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl ${reason.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                <reason.icon className="w-10 h-10" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
              
              {/* Decorative background element */}
              <div className="absolute inset-0 bg-leaf/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;