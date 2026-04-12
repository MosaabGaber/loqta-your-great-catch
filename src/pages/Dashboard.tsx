import { useState } from "react";
import { Heart, MessageCircle, Bell, Settings, Package, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DealCard from "@/components/DealCard";
import { listings } from "@/data/seedData";

const tabs = [
  { id: "saved", label: "Saved Deals", icon: Heart },
  { id: "inquiries", label: "Inquiries", icon: MessageCircle },
  { id: "alerts", label: "Deal Alerts", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("saved");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">My Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-4 card-shadow space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  <tab.icon size={18} />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-3">
            {activeTab === "saved" && (
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Saved Deals</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {listings.slice(0, 4).map((l) => (
                    <DealCard key={l.id} listing={l} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === "inquiries" && (
              <div className="text-center py-16">
                <MessageCircle size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No inquiries yet</p>
                <p className="text-muted-foreground text-sm">Your conversations will appear here</p>
              </div>
            )}

            {activeTab === "alerts" && (
              <div className="text-center py-16">
                <Bell size={48} className="mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No deal alerts set up</p>
                <p className="text-muted-foreground text-sm">Set up alerts to get notified about new deals</p>
              </div>
            )}

            {activeTab === "settings" && (
              <div className="bg-card rounded-xl p-6 card-shadow">
                <h2 className="text-xl font-bold text-foreground mb-4">Profile Settings</h2>
                <div className="space-y-4 max-w-md">
                  <input placeholder="Full Name" className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />
                  <input placeholder="Email" className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />
                  <input placeholder="Phone" className="w-full h-11 rounded-lg border border-input bg-background px-4 text-sm" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
