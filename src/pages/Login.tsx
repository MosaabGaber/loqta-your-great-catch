import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-xl p-8 card-shadow">
            <h1 className="text-2xl font-bold text-foreground text-center mb-2">Welcome Back</h1>
            <p className="text-muted-foreground text-sm text-center mb-8">Log in to your Loqta account</p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email or phone"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm"
              />
              <div className="text-right">
                <a href="#" className="text-primary text-sm hover:underline">Forgot password?</a>
              </div>
              <Button className="w-full" size="lg">Log In</Button>
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
              Don't have an account? <Link to="/signup" className="text-primary font-medium hover:underline">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
