import { Star, Quote, Leaf } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya S.',
    text: 'Aahara is a blessing for pure veg lovers! The food is fresh, flavorful, and beautifully presented. The ambience is calm and classy.',
    rating: 5,
  },
  {
    name: 'Rahul M.',
    text: 'From Indian thali to pizzas and mocktails, everything tasted amazing. Finally, a pure veg multi-cuisine restaurant done right!',
    rating: 5,
  },
  {
    name: 'Anita P.',
    text: 'The best vegetarian restaurant in town! Every dish is crafted with love. The paneer tikka and pasta are absolutely divine.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-10 left-10 text-6xl opacity-10">🌿</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-10">🍃</div>
      
      <div className="container-custom mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-champagne">
            <Leaf className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            🌿 Loved by Our <span className="text-leaf">Guests</span>
          </h2>
          
          {/* Gold accent line */}
          <div className="flex justify-center pt-2">
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-champagne to-transparent rounded-full" />
          </div>
          
          <p className="text-muted-foreground text-lg italic">
            Real stories. Real flavors. Pure vegetarian happiness.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-hover hover:-translate-y-2 transition-all duration-500 relative overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <Quote className="w-12 h-12 text-champagne" />
              </div>
              
              {/* Leaf decoration */}
              <div className="absolute -bottom-4 -left-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Leaf className="w-20 h-20 text-leaf rotate-45" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-champagne text-champagne drop-shadow-sm" 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-8 leading-relaxed text-base relative z-10">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-leaf/20 to-champagne/20 flex items-center justify-center shadow-soft">
                  <span className="font-display font-bold text-lg text-leaf">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-muted-foreground">Happy Guest</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
