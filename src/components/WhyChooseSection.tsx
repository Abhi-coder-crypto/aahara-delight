import { motion } from 'framer-motion';
import { Leaf, Utensils, Sparkles, ShieldCheck } from 'lucide-react';

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
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-[#fdfcf0] overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#7CB342] bg-[#7CB342]/10 px-4 py-1.5 rounded-full border border-[#7CB342]/20"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Our Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
          >
            The Aahara <span className="text-[#7CB342]">Promise</span>
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-12 h-1 bg-[#7CB342] rounded-full" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="relative group h-full"
            >
              {/* Animated glow background */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-[#7CB342]/15 to-transparent rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-8 md:p-10 rounded-[2.5rem] bg-white border border-[#7CB342]/10 shadow-sm group-hover:shadow-md transition-all duration-500 overflow-hidden">
                {/* Background number */}
                <span className="absolute -top-3 -right-3 text-7xl font-display font-bold text-[#7CB342]/5 select-none transition-transform duration-500 group-hover:scale-105">
                  0{index + 1}
                </span>

                <div className={`w-20 h-20 mb-6 rounded-2xl ${reason.color} flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                  <reason.icon className="w-10 h-10" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base font-normal">
                  {reason.description}
                </p>
                
                {/* Accent line */}
                <div className="mt-6 w-10 h-1 bg-[#7CB342]/15 rounded-full group-hover:w-full group-hover:bg-[#7CB342] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;