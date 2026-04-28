export interface Listing {
  id: string;
  title: string;
  assetType: "property" | "car" | "business";
  subCategory: string;
  askingPrice: number;
  marketValue: number;
  discountPercentage: number;
  reasonBelowMarket: string;
  reasonDetails: string;
  locationGovernorate: string;
  locationArea: string;
  image: string;
  images: string[];
  isVerified: boolean;
  isFeatured: boolean;
  urgencyLevel: "low" | "medium" | "high";
  specs: Record<string, string>;
  description: string;
  status: string;
  createdAt: string;
  risks: string[];
}

export const listings: Listing[] = [
  {
    id: "1",
    title: "3-Bedroom Apartment in Madinaty",
    assetType: "property",
    subCategory: "Apartment",
    askingPrice: 3200000,
    marketValue: 4200000,
    discountPercentage: 24,
    reasonBelowMarket: "Owner relocating abroad",
    reasonDetails: "The owner has accepted a job offer overseas and needs to close within 30 days. Fully finished, move-in ready.",
    locationGovernorate: "Cairo",
    locationArea: "Madinaty",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "high",
    specs: { bedrooms: "3", bathrooms: "2", area_sqm: "185", floor: "5th", finishing: "Fully Finished", ownership: "Registered" },
    description: "Spacious 3-bedroom apartment in B5 Madinaty with open green views. Corner unit with extra natural light. Building has 24/7 security.",
    status: "live",
    createdAt: "2026-04-10",
    risks: ["HOA fees increase expected in 2027"],
  },
  {
    id: "2",
    title: "Duplex Villa in New Cairo",
    assetType: "property",
    subCategory: "Villa",
    askingPrice: 8500000,
    marketValue: 11000000,
    discountPercentage: 23,
    reasonBelowMarket: "Developer end-of-project clearance",
    reasonDetails: "Last 3 units from a developer clearing inventory before project handover. Brand new, never lived in.",
    locationGovernorate: "Cairo",
    locationArea: "New Cairo",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "medium",
    specs: { bedrooms: "4", bathrooms: "3", area_sqm: "320", floor: "Ground + 1st", finishing: "Semi-Finished", ownership: "Registered" },
    description: "Modern duplex villa in a gated compound in New Cairo. Private garden and parking. Close to AUC and Cairo Festival City.",
    status: "live",
    createdAt: "2026-04-08",
    risks: ["Semi-finished — buyer needs to budget for finishing (~EGP 500K)"],
  },
  {
    id: "3",
    title: "Studio Apartment in 6th of October",
    assetType: "property",
    subCategory: "Apartment",
    askingPrice: 850000,
    marketValue: 1100000,
    discountPercentage: 23,
    reasonBelowMarket: "Installment issues — seller needs cash",
    reasonDetails: "Seller struggling with installment payments to developer and needs to liquidate quickly to avoid penalties.",
    locationGovernorate: "Giza",
    locationArea: "6th of October",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "high",
    specs: { bedrooms: "Studio", bathrooms: "1", area_sqm: "65", floor: "3rd", finishing: "Fully Finished", ownership: "Installment Transfer" },
    description: "Compact studio perfect for young professionals or investors. Located in SODIC West, well-maintained compound.",
    status: "live",
    createdAt: "2026-04-09",
    risks: ["Installment transfer requires developer approval (usually 2-3 weeks)"],
  },
  {
    id: "4",
    title: "Penthouse in Sheikh Zayed",
    assetType: "property",
    subCategory: "Penthouse",
    askingPrice: 5800000,
    marketValue: 7500000,
    discountPercentage: 23,
    reasonBelowMarket: "Divorce settlement — fast sale required",
    reasonDetails: "Property is part of a legal settlement. Both parties agreed to sell below market for a quick resolution.",
    locationGovernorate: "Giza",
    locationArea: "Sheikh Zayed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "high",
    specs: { bedrooms: "3", bathrooms: "3", area_sqm: "250", floor: "Penthouse", finishing: "Luxury Finished", ownership: "Registered" },
    description: "Stunning penthouse with panoramic views in Beverly Hills compound. Rooftop terrace, private jacuzzi, premium finishes throughout.",
    status: "live",
    createdAt: "2026-04-07",
    risks: ["Legal settlement — buyer's lawyer should review sale documents"],
  },
  {
    id: "5",
    title: "2022 Mercedes C200 — Low Mileage",
    assetType: "car",
    subCategory: "Sedan",
    askingPrice: 2100000,
    marketValue: 2650000,
    discountPercentage: 21,
    reasonBelowMarket: "Owner upgrading fleet",
    reasonDetails: "Corporate fleet vehicle being replaced with newer model. Excellent condition, full service history at authorized dealer.",
    locationGovernorate: "Cairo",
    locationArea: "Heliopolis",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "low",
    specs: { make: "Mercedes-Benz", model: "C200", year: "2022", km_driven: "28,000 km", color: "Black", condition: "Excellent", license: "Valid" },
    description: "Pristine Mercedes C200 with AMG package. Single corporate owner, always garaged, zero accidents. Full options including panoramic roof.",
    status: "live",
    createdAt: "2026-04-11",
    risks: [],
  },
  {
    id: "6",
    title: "2020 Toyota Corolla — Owner Leaving Egypt",
    assetType: "car",
    subCategory: "Sedan",
    askingPrice: 780000,
    marketValue: 980000,
    discountPercentage: 20,
    reasonBelowMarket: "Owner relocating — needs quick sale",
    reasonDetails: "Owner leaving Egypt permanently next month. Car is in great shape, used for daily commute only. Motivated to sell fast.",
    locationGovernorate: "Cairo",
    locationArea: "Nasr City",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=600&fit=crop",
    ],
    isVerified: true,
    isFeatured: false,
    urgencyLevel: "high",
    specs: { make: "Toyota", model: "Corolla", year: "2020", km_driven: "52,000 km", color: "Silver", condition: "Very Good", license: "Valid" },
    description: "Reliable Toyota Corolla, well-maintained with regular servicing. No accidents, clean interior, fuel-efficient. Perfect daily driver.",
    status: "live",
    createdAt: "2026-04-12",
    risks: ["Minor scratch on rear bumper — cosmetic only"],
  },
  {
    id: "7",
    title: "Cairo Rooftop Café",
    assetType: "business",
    subCategory: "Café",
    askingPrice: 1200000,
    marketValue: 1538500,
    discountPercentage: 22,
    reasonBelowMarket: "Owner relocating abroad",
    reasonDetails: "Owner is moving abroad and needs to sell the fully equipped business quickly.",
    locationGovernorate: "Cairo",
    locationArea: "Zamalek",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop"
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "medium",
    specs: {},
    description: "Coffee shop with established customer base, fully equipped",
    status: "live",
    createdAt: "2026-04-14",
    risks: [],
  },
  {
    id: "8",
    title: "Auto Parts Store",
    assetType: "business",
    subCategory: "Store",
    askingPrice: 850000,
    marketValue: 1036500,
    discountPercentage: 18,
    reasonBelowMarket: "Owner retiring",
    reasonDetails: "Owner is retiring after running the business for 8 years.",
    locationGovernorate: "Cairo",
    locationArea: "Heliopolis",
    image: "https://images.unsplash.com/photo-1632292220916-e9c34ddcd5fa?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1632292220916-e9c34ddcd5fa?w=800&h=600&fit=crop"
    ],
    isVerified: true,
    isFeatured: false,
    urgencyLevel: "low",
    specs: {},
    description: "Running business, 8 years established, prime location",
    status: "live",
    createdAt: "2026-04-15",
    risks: [],
  },
  {
    id: "9",
    title: "Pharmacy",
    assetType: "business",
    subCategory: "Pharmacy",
    askingPrice: 2400000,
    marketValue: 3200000,
    discountPercentage: 25,
    reasonBelowMarket: "Partnership dispute",
    reasonDetails: "Partners dissolving the business, looking for a quick buyout.",
    locationGovernorate: "Cairo",
    locationArea: "Maadi",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=800&h=600&fit=crop"
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "high",
    specs: {},
    description: "Licensed pharmacy with loyal customer base and full inventory",
    status: "live",
    createdAt: "2026-04-16",
    risks: ["License transfer takes 1-2 months"],
  },
  {
    id: "10",
    title: "Gym & Fitness Center",
    assetType: "business",
    subCategory: "Gym",
    askingPrice: 3100000,
    marketValue: 3827000,
    discountPercentage: 19,
    reasonBelowMarket: "Consolidating branches",
    reasonDetails: "Brand is closing this branch to focus on larger locations.",
    locationGovernorate: "Cairo",
    locationArea: "Nasr City",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"
    ],
    isVerified: true,
    isFeatured: false,
    urgencyLevel: "medium",
    specs: {},
    description: "300 active members, full equipment, established brand",
    status: "live",
    createdAt: "2026-04-17",
    risks: [],
  },
  {
    id: "11",
    title: "Tech Coworking Space",
    assetType: "business",
    subCategory: "Coworking",
    askingPrice: 4500000,
    marketValue: 5625000,
    discountPercentage: 20,
    reasonBelowMarket: "Seeking liquidity for new venture",
    reasonDetails: "Owner is selling to fund a tech startup.",
    locationGovernorate: "Cairo",
    locationArea: "New Cairo",
    image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=600&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?w=800&h=600&fit=crop"
    ],
    isVerified: true,
    isFeatured: true,
    urgencyLevel: "low",
    specs: {},
    description: "Fully furnished workspace, 80% occupancy rate, premium location",
    status: "live",
    createdAt: "2026-04-18",
    risks: [],
  }
];

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-EG").format(price);
};

export const governorates = ["Cairo", "Giza", "Alexandria", "Dakahlia", "Sharqia", "Qalyubia"];
export const propertySubCategories = ["Apartment", "Villa", "Penthouse", "Townhouse", "Land", "Chalet"];
export const carSubCategories = ["Sedan", "SUV", "Hatchback", "Coupe", "Pickup", "Van"];
export const businessSubCategories = ["Café", "Store", "Pharmacy", "Gym", "Restaurant", "Coworking", "Other"];
