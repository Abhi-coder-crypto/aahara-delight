import { Leaf, Utensils, Sparkles, Home, Wallet, Star, Quote } from 'lucide-react';

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

const testimonials = [
  {
    name: 'Priya Sharma',
    text: 'The best vegetarian restaurant in town! The paneer tikka is absolutely divine.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    text: 'Amazing variety of cuisines. My family loves coming here every weekend.',
    rating: 5,
  },
  {
    name: 'Anita Patel',
    text: 'Fresh ingredients, beautiful ambiance, and the staff is so friendly!',
    rating: 5,
  },
];

const WhyChooseSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Why Choose Us */}
        <div className="mb-24">
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

        {/* Testimonials */}
        <div>
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4 animate-fade-up">
            <div className="inline-flex items-center gap-2 text-champagne">
              <Quote className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              What Our Guests <span className="text-leaf">Say</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-champagne text-champagne" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-leaf/20 flex items-center justify-center">
                    <span className="font-display font-bold text-leaf">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
