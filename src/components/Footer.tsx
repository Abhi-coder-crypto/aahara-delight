import { Leaf, Instagram, Facebook, Twitter, Youtube, Heart } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  return (
    <footer className="bg-leaf-dark text-primary-foreground">
      <div className="container-custom mx-auto section-padding pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-champagne/20 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-champagne" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Aahara</h3>
                <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">
                  Pure Veg Multi Cuisine
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Experience the art of vegetarian dining where every dish tells a story of 
              fresh ingredients, authentic flavors, and the warmth of home. Join us for 
              a culinary journey around the world.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-champagne hover:text-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-champagne">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-champagne transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-champagne/50 rounded-full" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6 text-champagne">
              Opening Hours
            </h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span className="text-primary-foreground">11 AM - 11 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-primary-foreground">10 AM - 12 AM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-primary-foreground">10 AM - 11 PM</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-champagne/10 rounded-xl border border-champagne/20">
              <p className="text-sm text-champagne font-medium">
                🎉 Special Weekend Brunch
              </p>
              <p className="text-xs text-primary-foreground/60 mt-1">
                Saturdays & Sundays, 10 AM - 1 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Aahara – Pure Veg Multi Cuisine. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-champagne fill-champagne" /> for food lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
