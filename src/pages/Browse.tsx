import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealCard from "@/components/DealCard";
import { Button } from "@/components/ui/button";
import { listings, governorates } from "@/data/seedData";

const Browse = () => {
  const [assetType, setAssetType] = useState<"all" | "property" | "car">("all");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = [...listings];
    if (assetType !== "all") result = result.filter((l) => l.assetType === assetType);
    if (location) result = result.filter((l) => l.locationGovernorate === location);
    if (verifiedOnly) result = result.filter((l) => l.isVerified);
    if (sortBy === "newest") result.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    if (sortBy === "discount") result.sort((a, b) => b.discountPercentage - a.discountPercentage);
    if (sortBy === "price-low") result.sort((a, b) => a.askingPrice - b.askingPrice);
    return result;
  }, [assetType, location, sortBy, verifiedOnly]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-6">Browse Deals</h1>

        {/* Filter bar */}
        <div className="bg-card rounded-xl p-4 card-shadow mb-8">
          <div className="flex flex-wrap items-center gap-3">
            {/* Asset type toggle */}
            <div className="flex bg-secondary rounded-lg p-1">
              {(["all", "property", "car"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setAssetType(t)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    assetType === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t === "all" ? "All" : t === "property" ? "Property" : "Cars"}
                </button>
              ))}
            </div>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="h-9 rounded-lg border border-input bg-background px-3 text-sm"
            >
              <option value="">All Locations</option>
              {governorates.map((g) => <option key={g} value={g}>{g}</option>)}
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 rounded-lg border border-input bg-background px-3 text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="discount">Highest Discount</option>
              <option value="price-low">Lowest Price</option>
            </select>

            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium border transition-colors ${
                verifiedOnly
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-input text-muted-foreground hover:text-foreground"
              }`}
            >
              Verified Only
            </button>

            <span className="ml-auto text-muted-foreground text-sm">{filtered.length} results</span>
          </div>
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <DealCard key={listing.id} listing={listing} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg mb-2">No deals match these filters</p>
            <p className="text-muted-foreground text-sm">Try broadening your search</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Browse;
