import { Link } from "react-router-dom";
import { Heart, CheckCircle, Home, Car, MapPin } from "lucide-react";
import { type Listing, formatPrice } from "@/data/seedData";

interface DealCardProps {
  listing: Listing;
}

const DealCard = ({ listing }: DealCardProps) => {
  const isProperty = listing.assetType === "property";

  return (
    <Link to={`/listing/${listing.id}`} className="group block">
      <div className="bg-card rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {/* Discount badge */}
          <div className="absolute top-3 left-3 bg-urgency text-destructive-foreground text-xs font-bold px-2.5 py-1 rounded-md">
            Under Market by {listing.discountPercentage}%
          </div>
          {/* Save button */}
          <button
            className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm p-2 rounded-full hover:bg-card transition-colors"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <Heart size={16} className="text-muted-foreground" />
          </button>
          {/* Asset type icon */}
          <div className="absolute bottom-3 left-3 bg-card/80 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5 text-xs font-medium text-foreground">
            {isProperty ? <Home size={12} /> : <Car size={12} />}
            {listing.subCategory}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-card-foreground text-sm line-clamp-1 mb-1">
            {listing.title}
          </h3>
          <div className="flex items-center gap-1 text-muted-foreground text-xs mb-3">
            <MapPin size={12} />
            {listing.locationArea}, {listing.locationGovernorate}
          </div>

          <div className="flex items-end justify-between">
            <div>
              <div className="text-primary font-bold text-lg">
                EGP {formatPrice(listing.askingPrice)}
              </div>
              <div className="text-muted-foreground text-xs line-through">
                EGP {formatPrice(listing.marketValue)}
              </div>
            </div>
            {listing.isVerified && (
              <div className="flex items-center gap-1 text-primary text-xs font-medium bg-secondary px-2 py-1 rounded-md">
                <CheckCircle size={12} />
                Verified
              </div>
            )}
          </div>

          {/* Key specs */}
          <div className="flex gap-2 mt-3 pt-3 border-t border-border">
            {isProperty ? (
              <>
                {listing.specs.bedrooms && (
                  <span className="text-muted-foreground text-xs">{listing.specs.bedrooms} bed</span>
                )}
                {listing.specs.area_sqm && (
                  <span className="text-muted-foreground text-xs">• {listing.specs.area_sqm} sqm</span>
                )}
                {listing.specs.finishing && (
                  <span className="text-muted-foreground text-xs">• {listing.specs.finishing}</span>
                )}
              </>
            ) : (
              <>
                {listing.specs.year && (
                  <span className="text-muted-foreground text-xs">{listing.specs.year}</span>
                )}
                {listing.specs.km_driven && (
                  <span className="text-muted-foreground text-xs">• {listing.specs.km_driven}</span>
                )}
                {listing.specs.condition && (
                  <span className="text-muted-foreground text-xs">• {listing.specs.condition}</span>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
