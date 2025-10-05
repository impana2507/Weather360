import PageLayout from "@/components/PageLayout";
import { Moon } from "lucide-react";

const MoonPhases = () => {
  const phases = [
    { name: "New Moon", illumination: "0%", date: "Jan 11" },
    { name: "First Quarter", illumination: "50%", date: "Jan 18" },
    { name: "Full Moon", illumination: "100%", date: "Jan 25" },
    { name: "Last Quarter", illumination: "50%", date: "Feb 3" },
  ];

  return (
    <PageLayout
      title="Moon Phases"
      description="Track the lunar cycle and moon phases"
      backgroundClass="bg-gradient-to-br from-[hsl(237,83%,19%)] via-[hsl(251,91%,9%)] to-[hsl(237,83%,19%)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {phases.map((phase, index) => (
          <div key={index} className="metric-card h-auto py-8">
            <Moon className="w-16 h-16 text-accent mb-4 animate-pulse-soft" />
            <h3 className="text-xl font-bold mb-2">{phase.name}</h3>
            <p className="text-2xl font-bold text-primary mb-2">{phase.illumination}</p>
            <p className="text-sm text-muted-foreground">{phase.date}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-3xl mx-auto weather-card">
        <h2 className="text-2xl font-bold mb-4">Current Moon Phase</h2>
        <div className="flex items-center justify-center space-x-6">
          <Moon className="w-24 h-24 text-accent" />
          <div>
            <p className="text-3xl font-bold mb-2">Waxing Gibbous</p>
            <p className="text-xl text-muted-foreground">76% Illuminated</p>
            <p className="text-sm text-muted-foreground mt-2">Next Full Moon: 4 days</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MoonPhases;
