import DealCard from "@/components/DealCard";
import { listings } from "@/data/seedData";

const RecentlyAdded = () => (
  <section className="py-16 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Recently Added</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.slice(0, 6).map((listing) => (
          <DealCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  </section>
);

export default RecentlyAdded;
