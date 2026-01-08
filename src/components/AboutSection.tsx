import { Leaf, Heart, Utensils, Sparkles, Users, ShieldCheck } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

const highlights = [
  { icon: Leaf, text: '100% Pure Veg', color: 'text-leaf' },
  { icon: Utensils, text: 'Multi Cuisine', color: 'text-champagne' },
  { icon: Users, text: 'Family Friendly', color: 'text-leaf' },
  { icon: ShieldCheck, text: 'Hygienic & Fresh', color: 'text-champagne' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-soft">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={restaurantInterior}
                alt="Aahara Restaurant Interior"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-leaf-dark/30 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl shadow-card p-6 max-w-[200px] animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-champagne/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-champagne" />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-leaf">2024</p>
                  <p className="text-xs text-muted-foreground">Established</p>
                </div>
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-leaf/10 rounded-full blur-2xl" />
          </div>

          {/* Content Side */}
          <div className="space-y-8 animate-fade-up animation-delay-200">
            {/* Section Header */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-champagne">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm font-semibold uppercase tracking-wider">Our Story</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Nourishing Bodies,{' '}
                <span className="text-leaf">Delighting Souls</span>
              </h2>
            </div>

            {/* Story */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <span className="font-display text-2xl text-foreground italic">"Aahara"</span> — 
                meaning nourishment in Sanskrit — embodies our philosophy of serving food that 
                feeds both body and soul.
              </p>
              <p>
                Born from a passion for authentic vegetarian cuisine, we bring together flavors 
                from around the world under one roof. From aromatic Indian curries to delicate 
                Italian pastas, from crispy Chinese stir-fries to hearty Mexican nachos — 
                every dish is crafted with love, using the freshest ingredients.
              </p>
              <p>
                At Aahara, we believe that vegetarian food isn't just about what you leave out — 
                it's about celebrating the incredible variety nature offers us.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 p-4 bg-background rounded-xl shadow-soft hover:shadow-hover transition-shadow duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${item.color}`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-foreground text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
