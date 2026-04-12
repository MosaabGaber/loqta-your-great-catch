import { Link } from "react-router-dom";
import { Home, Car, ArrowRight } from "lucide-react";
import { listings } from "@/data/seedData";

const Categories = () => {
  const propertyCount = listings.filter((l) => l.assetType === "property").length;
  const carCount = listings.filter((l) => l.assetType === "car").length;

  const cats = [
    { label: "Real Estate", icon: Home, count: propertyCount, href: "/browse?type=property", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=300&fit=crop" },
    { label: "Cars", icon: Car, count: carCount, href: "/browse?type=car", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&h=300&fit=crop" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cats.map((cat) => (
            <Link key={cat.label} to={cat.href} className="group relative rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-all">
              <div className="aspect-[2/1] relative">
                <img src={cat.img} alt={cat.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-foreground/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <cat.icon size={20} className="text-accent" />
                      <h3 className="text-xl font-bold text-primary-foreground">{cat.label}</h3>
                    </div>
                    <p className="text-primary-foreground/70 text-sm">{cat.count} live deals</p>
                  </div>
                  <ArrowRight size={20} className="text-accent group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
