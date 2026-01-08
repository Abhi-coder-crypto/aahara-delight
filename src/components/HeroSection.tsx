import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Delicious vegetarian cuisine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-leaf-dark/80 via-leaf-dark/70 to-leaf-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-dark/50 to-transparent" />
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">🌿</div>
      <div className="absolute bottom-32 left-10 text-5xl opacity-20 animate-float animation-delay-200">🍃</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-15 animate-float animation-delay-400">🌱</div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-champagne/20 backdrop-blur-sm border border-champagne/30 rounded-full px-5 py-2 animate-fade-up">
            <Sparkles className="w-4 h-4 text-champagne" />
            <span className="text-champagne text-sm font-medium">Est. 2024 • Pure Vegetarian</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-100">
            Aahara
            <span className="block text-champagne mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal italic">
              A Celebration of Pure Vegetarian Flavours
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Multi-Cuisine • Fresh • Pure Veg
          </p>

          <p className="text-primary-foreground/60 text-base max-w-xl mx-auto animate-fade-up animation-delay-200">
            Experience the art of vegetarian dining where every dish tells a story of fresh ingredients, 
            authentic flavors, and the warmth of home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#menu">View Menu</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Book a Table</a>
            </Button>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 pt-8 animate-fade-up animation-delay-400">
            {['100% Pure Veg 🌿', 'Multi Cuisine', 'Fresh & Hygienic'].map((item) => (
              <span
                key={item}
                className="text-primary-foreground/70 text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-champagne rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
