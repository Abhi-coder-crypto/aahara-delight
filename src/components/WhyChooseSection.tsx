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
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-[#7CB342] bg-[#7CB342]/10 px-6 py-2 rounded-full border border-[#7CB342]/20"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Our Excellence</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-[1.1]"
          >
            The Aahara <br />
            <span className="text-[#7CB342]">Promise</span>
          </motion.h2>
          <div className="flex justify-center">
            <div className="w-20 h-1.5 bg-[#7CB342] rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -15 }}
              className="relative group h-full"
            >
              {/* Animated glow background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#7CB342]/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full p-12 rounded-[3rem] bg-white border border-[#7CB342]/5 shadow-[0_10px_40px_-15px_rgba(124,179,66,0.1)] group-hover:shadow-[0_20px_60px_-15px_rgba(124,179,66,0.25)] transition-all duration-500 overflow-hidden">
                {/* Background number */}
                <span className="absolute -top-4 -right-4 text-9xl font-display font-bold text-[#7CB342]/5 select-none transition-transform duration-700 group-hover:scale-110">
                  0{index + 1}
                </span>

                <div className={`w-28 h-28 mb-10 rounded-3xl ${reason.color} flex items-center justify-center group-hover:rotate-[10deg] transition-all duration-500 shadow-lg shadow-[#7CB342]/10`}>
                  <reason.icon className="w-14 h-14" />
                </div>
                
                <h3 className="font-display text-3xl font-bold text-foreground mb-6 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  {reason.description}
                </p>
                
                {/* Accent line */}
                <div className="mt-8 w-12 h-1 bg-[#7CB342]/20 rounded-full group-hover:w-full group-hover:bg-[#7CB342] transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;