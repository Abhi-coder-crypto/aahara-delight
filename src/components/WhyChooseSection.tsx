import { Leaf, Utensils, Sparkles, Home, Wallet } from 'lucide-react';

const reasons = [
  {
    icon: Leaf,
    title: '100% Pure Veg',
    description: 'Every dish is crafted with carefully selected vegetarian ingredients.',
  },
  {
    icon: Utensils,
    title: 'Multi-Cuisine Variety',
    description: 'From Indian to Italian, Chinese to Mexican — explore global flavors.',
  },
  {
    icon: Sparkles,
    title: 'Fresh Ingredients',
    description: 'We source the freshest produce daily for authentic taste.',
  },
  {
    icon: Home,
    title: 'Warm Ambience',
    description: 'A cozy, welcoming space perfect for families and celebrations.',
  },
  {
    icon: Wallet,
    title: 'Affordable Premium',
    description: 'Fine dining experience without the premium price tag.',
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-custom mx-auto">
        {/* Why Choose Us */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-champagne">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
              The Aahara <span className="text-leaf">Difference</span>
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-leaf group-hover:text-primary-foreground transition-all duration-300">
                  <reason.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
