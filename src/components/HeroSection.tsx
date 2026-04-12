import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-[520px] flex items-center overflow-hidden">
    {/* Background */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&h=900&fit=crop')" }}
    />
    <div className="absolute inset-0 glass-overlay" />
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/30" />

    <div className="relative container mx-auto px-4 py-16">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 leading-tight">
          Below-Market Deals —{" "}
          <span className="text-accent">Real Estate & Cars</span>
        </h1>
        <p className="text-primary-foreground/80 text-lg md:text-xl mb-8">
          Every opportunity is explained, verified, and ready
        </p>
        <div className="flex gap-3 mb-10">
          <Link to="/browse">
            <Button variant="hero" size="lg">Browse Deals</Button>
          </Link>
          <Link to="/sell">
            <Button variant="heroOutline" size="lg">List Your Asset</Button>
          </Link>
        </div>
      </div>

      {/* Search bar */}
      <div className="bg-card/95 backdrop-blur-md rounded-xl p-4 max-w-4xl card-shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
            <option value="">All Locations</option>
            <option>Cairo</option>
            <option>Giza</option>
            <option>Alexandria</option>
          </select>
          <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
            <option value="">All Types</option>
            <option>Property</option>
            <option>Car</option>
          </select>
          <select className="h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground">
            <option value="">Any Price</option>
            <option>Under EGP 1M</option>
            <option>EGP 1M - 3M</option>
            <option>EGP 3M - 5M</option>
            <option>EGP 5M+</option>
          </select>
          <Link to="/browse">
            <Button className="w-full gap-2" size="default">
              <Search size={16} />
              Search
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
