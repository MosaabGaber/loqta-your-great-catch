import { Search, ShieldCheck, ThumbsUp } from "lucide-react";

const steps = [
  { icon: Search, title: "We Find It", desc: "We discover the opportunity" },
  { icon: ShieldCheck, title: "We Verify It", desc: "We explain and verify the deal" },
  { icon: ThumbsUp, title: "You Decide", desc: "You make the call" },
];

const HowItWorks = () => (
  <section className="py-16 bg-secondary/50">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">How It Works</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
        {steps.map((step, i) => (
          <div key={step.title} className="flex items-center">
            <div className="flex flex-col items-center text-center w-48">
              <div className="w-16 h-16 rounded-full green-gradient flex items-center justify-center mb-4">
                <step.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block w-20 h-0.5 bg-primary/30 mx-4" />
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
