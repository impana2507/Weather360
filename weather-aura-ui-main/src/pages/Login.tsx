import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import Navigation from "@/components/Navigation";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // Demo login - in a real app, this would authenticate with a backend
    toast.success("Login successful! Redirecting to dashboard...");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-accent/20">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen p-4 pt-24">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="glass-card p-8">
            {/* Logo and Title */}
            <div className="flex flex-col items-center mb-8">
              <Cloud className="w-16 h-16 text-primary mb-4" />
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">Sign in to access your weather dashboard</p>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-card border-2"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Password</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-card border-2"
                  required
                />
              </div>

              <Button type="submit" className="w-full h-12 text-lg">
                Sign In
              </Button>
            </form>

            {/* Demo Notice */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center text-muted-foreground">
                <strong>Demo Mode:</strong> Enter any email and password (6+ characters) to access the dashboard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
