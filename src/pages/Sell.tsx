import { useState } from "react";
import { CheckCircle, Upload, ChevronRight, ChevronLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { propertySubCategories, carSubCategories, governorates } from "@/data/seedData";

const steps = ["Asset Type", "Details", "Pricing", "Media", "Contact", "Review"];

const Sell = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    assetType: "" as "" | "property" | "car",
    subCategory: "",
    location: "",
    area: "",
    bedrooms: "",
    bathrooms: "",
    floor: "",
    finishing: "",
    ownership: "",
    make: "",
    model: "",
    year: "",
    km: "",
    color: "",
    condition: "",
    license: "",
    askingPrice: "",
    marketValue: "",
    reason: "",
    reasonDetails: "",
    name: "",
    phone: "",
    contactMethod: "phone",
    agreed: false,
  });

  const update = (key: string, value: string | boolean) => setForm((p) => ({ ...p, [key]: value }));
  const discount = form.askingPrice && form.marketValue
    ? Math.round((1 - Number(form.askingPrice) / Number(form.marketValue)) * 100)
    : 0;

  const next = () => setStep((p) => Math.min(p + 1, steps.length - 1));
  const prev = () => setStep((p) => Math.max(p - 1, 0));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Sell Your Asset Fast — To Serious Buyers</h1>
          <p className="text-muted-foreground">List your property or car and reach verified buyers looking for deals.</p>
        </div>

        {/* Value props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {["Reach serious buyers", "Free listing", "Sold in days, not months"].map((v) => (
            <div key={v} className="flex items-center gap-2 bg-secondary rounded-lg p-3">
              <CheckCircle size={16} className="text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{v}</span>
            </div>
          ))}
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                i <= step ? "green-gradient text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {i < step ? "✓" : i + 1}
              </div>
              {i < steps.length - 1 && (
                <div className={`hidden md:block w-8 lg:w-16 h-0.5 mx-1 ${i < step ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-6 card-shadow min-h-[300px]">
          {/* Step 0: Asset Type */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">What are you selling?</h2>
              <div className="grid grid-cols-2 gap-4">
                {(["property", "car"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => update("assetType", t)}
                    className={`p-6 rounded-xl border-2 text-center transition-all ${
                      form.assetType === t ? "border-primary bg-secondary" : "border-border hover:border-primary/30"
                    }`}
                  >
                    <div className="text-3xl mb-2">{t === "property" ? "🏠" : "🚗"}</div>
                    <div className="font-semibold text-foreground">{t === "property" ? "Property" : "Car"}</div>
                  </button>
                ))}
              </div>
              {form.assetType && (
                <select
                  value={form.subCategory}
                  onChange={(e) => update("subCategory", e.target.value)}
                  className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm"
                >
                  <option value="">Select sub-category</option>
                  {(form.assetType === "property" ? propertySubCategories : carSubCategories).map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              )}
            </div>
          )}

          {/* Step 1: Details */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">
                {form.assetType === "property" ? "Property Details" : "Car Details"}
              </h2>
              {form.assetType === "property" ? (
                <div className="grid grid-cols-2 gap-4">
                  <select value={form.location} onChange={(e) => update("location", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm col-span-2">
                    <option value="">Governorate</option>
                    {governorates.map((g) => <option key={g}>{g}</option>)}
                  </select>
                  <input placeholder="Area (sqm)" value={form.area} onChange={(e) => update("area", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Bedrooms" value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Bathrooms" value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Floor" value={form.floor} onChange={(e) => update("floor", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <select value={form.finishing} onChange={(e) => update("finishing", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option value="">Finishing Level</option>
                    <option>Unfinished</option><option>Semi-Finished</option><option>Fully Finished</option><option>Luxury Finished</option>
                  </select>
                  <select value={form.ownership} onChange={(e) => update("ownership", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option value="">Ownership Type</option>
                    <option>Registered</option><option>Installment Transfer</option><option>Power of Attorney</option>
                  </select>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="Make (e.g., Toyota)" value={form.make} onChange={(e) => update("make", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Model (e.g., Corolla)" value={form.model} onChange={(e) => update("model", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Year" value={form.year} onChange={(e) => update("year", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="KM Driven" value={form.km} onChange={(e) => update("km", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <input placeholder="Color" value={form.color} onChange={(e) => update("color", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm" />
                  <select value={form.condition} onChange={(e) => update("condition", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm">
                    <option value="">Condition</option>
                    <option>Excellent</option><option>Very Good</option><option>Good</option><option>Fair</option>
                  </select>
                  <select value={form.license} onChange={(e) => update("license", e.target.value)} className="h-10 rounded-lg border border-input bg-background px-3 text-sm col-span-2">
                    <option value="">License Status</option>
                    <option>Valid</option><option>Expired</option><option>Not Licensed</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Pricing */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Asking Price (EGP)</label>
                  <input type="number" value={form.askingPrice} onChange={(e) => update("askingPrice", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" placeholder="e.g., 3000000" />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Market Value (EGP)</label>
                  <input type="number" value={form.marketValue} onChange={(e) => update("marketValue", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" placeholder="e.g., 4000000" />
                </div>
              </div>
              {discount > 0 && (
                <div className="bg-secondary rounded-lg p-4 text-center">
                  <span className="text-primary font-bold text-2xl">{discount}% below market</span>
                </div>
              )}
              <select value={form.reason} onChange={(e) => update("reason", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                <option value="">Why is this below market value?</option>
                <option>Need fast liquidity</option>
                <option>Relocating</option>
                <option>Clearing inventory</option>
                <option>Installment issues</option>
                <option>Legal settlement</option>
                <option>Other</option>
              </select>
              <textarea value={form.reasonDetails} onChange={(e) => update("reasonDetails", e.target.value)} placeholder="Additional details (optional)" className="w-full rounded-lg border border-input bg-background p-3 text-sm min-h-[80px] resize-none" />
            </div>
          )}

          {/* Step 3: Media */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Upload Media</h2>
              <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
                <Upload size={40} className="mx-auto text-muted-foreground mb-3" />
                <p className="text-muted-foreground text-sm mb-1">Drag & drop images here, or click to browse</p>
                <p className="text-muted-foreground text-xs">Min 3, max 15 images. Video and floor plans optional.</p>
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Contact Information</h2>
              <input placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
              <input placeholder="Phone Number" value={form.phone} onChange={(e) => update("phone", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm" />
              <select value={form.contactMethod} onChange={(e) => update("contactMethod", e.target.value)} className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm">
                <option value="phone">Phone Call</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input type="checkbox" checked={form.agreed} onChange={(e) => update("agreed", e.target.checked)} className="rounded" />
                I agree to Loqta's terms and conditions
              </label>
            </div>
          )}

          {/* Step 5: Review */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Review & Submit</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Asset Type</span>
                  <span className="font-medium text-foreground">{form.assetType} — {form.subCategory}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Asking Price</span>
                  <span className="font-medium text-foreground">EGP {Number(form.askingPrice).toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Market Value</span>
                  <span className="font-medium text-foreground">EGP {Number(form.marketValue).toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="font-bold text-primary">{discount}%</span>
                  </div>
                )}
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Reason</span>
                  <span className="font-medium text-foreground">{form.reason}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Contact</span>
                  <span className="font-medium text-foreground">{form.name} — {form.phone}</span>
                </div>
              </div>
              <Button className="w-full" size="lg" onClick={() => alert("Submitted! We'll review your listing within 24 hours.")}>
                Submit for Review
              </Button>
              <p className="text-center text-muted-foreground text-xs">We'll review your listing and get back to you within 24 hours</p>
            </div>
          )}

          {/* Navigation */}
          {step < 5 && (
            <div className="flex justify-between mt-8">
              <Button variant="ghost" onClick={prev} disabled={step === 0}>
                <ChevronLeft size={16} /> Back
              </Button>
              <Button onClick={next}>
                Next <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sell;
