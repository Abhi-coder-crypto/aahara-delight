import { ChevronDown, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import logo from '@/assets/logo.jpg';
import heroVideo from '@assets/hero_video.mp4';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Animated background pattern as placeholder - lower opacity to not distract */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-champagne/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-leaf-light/10 rounded-full blur-3xl animate-pulse animation-delay-200" />
        </div>
      </div>

      {/* Stronger overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 text-6xl opacity-20 animate-float">🌿</div>
      <div className="absolute bottom-32 left-10 text-5xl opacity-20 animate-float animation-delay-200">🍃</div>
      <div className="absolute top-1/3 right-1/4 text-4xl opacity-15 animate-float animation-delay-400">🌱</div>

      {/* Content */}
      <div className="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-champagne/20 backdrop-blur-sm border border-champagne/30 rounded-full px-5 py-2 animate-fade-up animation-delay-100">
            <Sparkles className="w-4 h-4 text-champagne" />
            <span className="text-champagne text-sm font-medium">Est. 2024 • Pure Vegetarian</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight animate-fade-up animation-delay-100">
            <span className="text-primary italic">A Celebration of</span>
            <span className="block mt-1 sm:mt-2">Pure Vegetarian Flavours</span>
          </h1>

          {/* Subtitle */}
          <p className="text-primary-foreground/80 text-lg sm:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-200">
            Multi-Cuisine • Fresh • Pure Veg
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
                className="text-primary font-medium text-sm flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
