import { Link } from "react-router-dom";
import { Facebook, Instagram, Music2 } from "lucide-react";

const Footer = () => (
  <footer className="bg-nav text-nav-foreground">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-bold mb-3">Loqta</h3>
          <p className="text-nav-foreground/70 text-sm max-w-md">
            Egypt's curated marketplace for below-market-value assets. Every deal is verified, explained, and ready for you.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-nav-foreground/60 hover:text-nav-foreground transition-colors"><Facebook size={20} /></a>
            <a href="#" className="text-nav-foreground/60 hover:text-nav-foreground transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-nav-foreground/60 hover:text-nav-foreground transition-colors"><Music2 size={20} /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Marketplace</h4>
          <div className="space-y-2">
            <Link to="/browse" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">Browse Deals</Link>
            <Link to="/browse?type=property" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">Real Estate</Link>
            <Link to="/browse?type=car" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">Cars</Link>
            <Link to="/sell" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">List Your Asset</Link>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <div className="space-y-2">
            <a href="#" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">About Us</a>
            <a href="#" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">How It Works</a>
            <a href="#" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">Contact</a>
            <a href="#" className="block text-nav-foreground/60 hover:text-nav-foreground text-sm">Terms</a>
          </div>
        </div>
      </div>
      <div className="border-t border-nav-foreground/10 mt-8 pt-6 text-center text-nav-foreground/40 text-xs">
        © 2026 Loqta. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
