import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Calendar, Cake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<{ years: number; months: number; days: number } | null>(null);

  const calculateAge = () => {
    if (!birthDate) return;

    const birth = new Date(birthDate);
    const today = new Date();

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <PageLayout
      title="Age Calculator"
      description="Calculate your exact age in years, months, and days"
    >
      <div className="max-w-2xl mx-auto">
        <div className="weather-card">
          <div className="space-y-6">
            <div>
              <Label htmlFor="birth-date" className="flex items-center space-x-2 mb-2">
                <Calendar className="w-4 h-4" />
                <span>Date of Birth</span>
              </Label>
              <Input
                id="birth-date"
                type="date"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
                className="glass-card border-2"
              />
            </div>

            <Button onClick={calculateAge} className="w-full h-12">
              Calculate Age
            </Button>

            {age && (
              <div className="metric-card h-auto py-8 animate-fade-in">
                <Cake className="w-12 h-12 text-primary mb-4 mx-auto" />
                <div className="text-5xl font-bold mb-4">
                  {age.years} <span className="text-2xl text-muted-foreground">years</span>
                </div>
                <div className="text-2xl text-muted-foreground">
                  {age.months} months, {age.days} days
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AgeCalculator;
