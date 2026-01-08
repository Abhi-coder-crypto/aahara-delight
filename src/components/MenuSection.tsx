import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const menuCategories = [
  { name: 'Soups', image: '/attached_assets/stock_images/vegetable_soup_bowl_c68632f9.jpg' },
  { name: 'Appetizers', image: '/attached_assets/stock_images/vegetarian_food_indi_82247506.jpg' },
  { name: 'Main Course', image: '/attached_assets/stock_images/vegetarian_main_cour_d15eb3da.jpg' },
  { name: 'Pastas', image: '/attached_assets/stock_images/italian_vegetarian_p_ac192e1e.jpg' },
  { name: 'Pizza', image: '/attached_assets/stock_images/vegetarian_pizza_gou_4e5e8984.jpg' },
  { name: 'Thali', image: '/attached_assets/stock_images/indian_thali_pure_ve_ade217ca.jpg' },
  { name: 'Sushi', image: '/attached_assets/stock_images/vegetarian_sushi_pla_c23ae6d7.jpg' },
  { name: 'Snacks', image: '/attached_assets/stock_images/indian_street_food_s_aad51677.jpg' },
  { name: 'Mocktails', image: '/attached_assets/stock_images/fruit_mocktail_bever_085db329.jpg' },
  { name: 'Desserts', image: '/attached_assets/stock_images/gourmet_dessert_vege_71097217.jpg' },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-background overflow-hidden">
      <div className="container-custom mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 text-champagne">
            <ChefHat className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Menu</span>
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground">
            A World of <span className="text-leaf">Flavours</span>
          </h2>
          <p className="text-muted-foreground">
            Explore our curated selection of 10 signature categories, 
            each prepared with the finest vegetarian ingredients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-3xl shadow-card overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6">
                  <motion.h3 
                    className="font-display text-2xl text-white font-bold tracking-wide"
                    whileHover={{ scale: 1.1 }}
                  >
                    {category.name}
                  </motion.h3>
                  <div className="w-12 h-1 bg-leaf mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want to see the full menu? 🍽️
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 text-leaf font-medium hover:text-leaf-dark transition-colors"
          >
            Get the digital menu
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;