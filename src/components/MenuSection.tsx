import { 
  Soup, Salad, Pizza, UtensilsCrossed, Flame, 
  Sandwich, Coffee, Cookie, IceCream, Wine, 
  Wheat, Leaf, ChefHat, Sparkles
} from 'lucide-react';

const menuCategories = [
  { name: 'Soups', icon: Soup },
  { name: 'Salads', icon: Salad },
  { name: 'Bruschetta', icon: Wheat },
  { name: 'Nachos', icon: Flame },
  { name: 'Appetizers', icon: UtensilsCrossed },
  { name: 'Garlic Bread', icon: Wheat },
  { name: 'Burgers', icon: Sandwich },
  { name: 'Specials', icon: Sparkles },
  { name: 'Lebanese Lane', icon: Leaf },
  { name: 'Crinkle Fries', icon: Flame },
  { name: 'Pizza', icon: Pizza },
  { name: 'Pastas', icon: UtensilsCrossed },
  { name: 'Sushi', icon: ChefHat },
  { name: 'Noodles', icon: UtensilsCrossed },
  { name: 'Indian Tandoor', icon: Flame },
  { name: 'Chinese', icon: UtensilsCrossed },
  { name: 'Papad & Raita', icon: Leaf },
  { name: 'Indian Breads', icon: Wheat },
  { name: 'Main Course', icon: ChefHat },
  { name: 'Rice & Biryanis', icon: Wheat },
  { name: 'Pot Rice', icon: Flame },
  { name: 'Chinese Rice', icon: UtensilsCrossed },
  { name: 'Thali', icon: ChefHat },
  { name: 'Pav Bhaji', icon: Flame },
  { name: 'Shakes', icon: Coffee },
  { name: 'Mojito', icon: Wine },
  { name: 'Mocktails', icon: Wine },
  { name: 'Waffles', icon: Cookie },
  { name: 'Desserts', icon: IceCream },
  { name: 'Beverages', icon: Coffee },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background">
      <div className="container-custom mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 text-champagne">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Menu</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            A World of <span className="text-leaf">Flavours</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our diverse menu featuring cuisines from around the globe, 
            all crafted with pure vegetarian ingredients.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {menuCategories.map((category, index) => (
            <div
              key={category.name}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-leaf/10 to-champagne/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-leaf group-hover:text-primary-foreground transition-all duration-300">
                  <category.icon className="w-7 h-7" />
                </div>
                <h3 className="font-medium text-sm text-foreground group-hover:text-leaf transition-colors duration-300">
                  {category.name}
                </h3>
              </div>

              {/* Corner Decoration */}
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-champagne/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 animate-fade-up animation-delay-400">
          <p className="text-muted-foreground mb-4">
            Can't decide? Let us surprise you with our Chef's Special! 🌟
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-leaf font-medium hover:text-leaf-dark transition-colors"
          >
            Ask for recommendations
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
