import { CheckCircle } from "lucide-react";

const badges = [
  "Every deal is below market value",
  "Clear explanation of why the price is low",
  "Verified by the Loqta team",
];

const TrustSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {badges.map((badge) => (
          <div key={badge} className="flex items-start gap-3 bg-secondary rounded-xl p-6">
            <CheckCircle size={24} className="text-primary flex-shrink-0 mt-0.5" />
            <p className="text-foreground font-medium text-sm">{badge}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
