import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DealCard from "@/components/DealCard";
import { listings } from "@/data/seedData";

const FeaturedDeals = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featured = listings.filter((l) => l.isFeatured);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured Deals</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll("left")} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors">
              <ChevronLeft size={20} className="text-muted-foreground" />
            </button>
            <button onClick={() => scroll("right")} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors">
              <ChevronRight size={20} className="text-muted-foreground" />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x" style={{ scrollbarWidth: "none" }}>
          {featured.map((listing) => (
            <div key={listing.id} className="min-w-[280px] md:min-w-[300px] snap-start">
              <DealCard listing={listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDeals;
