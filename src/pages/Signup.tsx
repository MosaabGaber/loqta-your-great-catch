import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", accountType: "buyer" });
  const update = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl p-8 card-shadow">
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Create Your Account</h1>
            <p className="text-muted-foreground text-sm text-center mb-8">Join Loqta and find your next great deal</p>

            <div className="space-y-4">
              <input placeholder="Full Name" value={form.name} onChange={(e) => update("name", e.target.value)} className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />
              <input type="email" placeholder="Email" value={form.email} onChange={(e) => update("email", e.target.value)} className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />
              <input type="password" placeholder="Password" value={form.password} onChange={(e) => update("password", e.target.value)} className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />

              <div className="flex bg-secondary rounded-lg p-1">
                {(["buyer", "seller"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => update("accountType", t)}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
                      form.accountType === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {t === "buyer" ? "Buyer" : "Seller"}
                  </button>
                ))}
              </div>

              <Button className="w-full" size="lg">Create Account</Button>
            </div>

            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-xs">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            <Button variant="outline" className="w-full" size="lg">
              Continue with Google
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Already have an account? <Link to="/login" className="text-primary font-medium hover:underline">Log In</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
