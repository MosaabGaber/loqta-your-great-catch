import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeft, ChevronRight, MapPin, CheckCircle, AlertTriangle, Eye, MessageCircle, DollarSign, Home, Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealCard from "@/components/DealCard";
import { Button } from "@/components/ui/button";
import { listings, formatPrice } from "@/data/seedData";

const ListingDetail = () => {
  const { id } = useParams();
  const listing = listings.find((l) => l.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!listing) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Listing not found</h1>
          <Link to="/browse"><Button>Browse Deals</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  const isProperty = listing.assetType === "property";
  const similar = listings.filter((l) => l.id !== listing.id && l.assetType === listing.assetType).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/browse" className="hover:text-foreground">Browse</Link>
          <span>/</span>
          <span className="text-foreground">{listing.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="rounded-xl overflow-hidden card-shadow">
              <div className="relative aspect-[16/10]">
                <img
                  src={listing.images[activeImage]}
                  alt={listing.title}
                  className="w-full h-full object-cover"
                />
                {listing.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImage((p) => (p > 0 ? p - 1 : listing.images.length - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setActiveImage((p) => (p < listing.images.length - 1 ? p + 1 : 0))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm p-2 rounded-full"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>
              {listing.images.length > 1 && (
                <div className="flex gap-2 p-3 bg-card">
                  {listing.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                        i === activeImage ? "border-primary" : "border-transparent"
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & location */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {isProperty ? <Home size={16} className="text-primary" /> : <Car size={16} className="text-primary" />}
                <span className="text-sm text-muted-foreground">{listing.subCategory}</span>
                {listing.isVerified && (
                  <span className="flex items-center gap-1 text-xs font-medium text-primary bg-secondary px-2 py-0.5 rounded-md">
                    <CheckCircle size={12} /> Verified Deal
                  </span>
                )}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{listing.title}</h1>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin size={14} />
                {listing.locationArea}, {listing.locationGovernorate}
              </div>
            </div>

            {/* Why this is a Loqta */}
            <div className="border-2 border-primary rounded-xl p-6 bg-secondary/50">
              <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <CheckCircle size={20} className="text-primary" />
                Why This Is a Loqta
              </h2>
              <p className="text-primary font-semibold mb-2">{listing.reasonBelowMarket}</p>
              <p className="text-muted-foreground text-sm">{listing.reasonDetails}</p>
            </div>

            {/* Description */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{listing.description}</p>
            </div>

            {/* Specs */}
            <div>
              <h2 className="text-lg font-bold text-foreground mb-3">Specifications</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(listing.specs).map(([key, value]) => (
                  <div key={key} className="bg-card rounded-lg p-3 card-shadow">
                    <div className="text-xs text-muted-foreground capitalize mb-1">
                      {key.replace(/_/g, " ")}
                    </div>
                    <div className="text-sm font-semibold text-foreground">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risks */}
            {listing.risks.length > 0 && (
              <div className="bg-muted rounded-xl p-6">
                <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle size={18} className="text-muted-foreground" />
                  Risk & Disclosure
                </h2>
                <ul className="space-y-2">
                  {listing.risks.map((risk, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                      <span className="text-muted-foreground mt-1">•</span>
                      {risk}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="bg-card rounded-xl p-6 card-shadow sticky top-20">
              <div className="green-gradient rounded-xl p-5 mb-5">
                <div className="text-primary-foreground/70 text-sm mb-1">Loqta Price</div>
                <div className="text-primary-foreground text-3xl font-bold mb-2">
                  EGP {formatPrice(listing.askingPrice)}
                </div>
                <div className="text-primary-foreground/60 text-sm line-through mb-3">
                  Market Value: EGP {formatPrice(listing.marketValue)}
                </div>
                <div className="inline-block bg-urgency text-destructive-foreground text-sm font-bold px-3 py-1 rounded-md">
                  Under Market by {listing.discountPercentage}%
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full gap-2" size="lg">
                  <Eye size={18} /> Request Viewing
                </Button>
                <Button variant="outline" className="w-full gap-2" size="lg">
                  <MessageCircle size={18} /> Contact Loqta
                </Button>
                <Button variant="secondary" className="w-full gap-2" size="lg">
                  <DollarSign size={18} /> Make an Offer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Similar deals */}
        {similar.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">Similar Deals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similar.map((l) => (
                <DealCard key={l.id} listing={l} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ListingDetail;
