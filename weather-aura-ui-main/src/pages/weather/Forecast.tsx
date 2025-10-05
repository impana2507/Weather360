import PageLayout from "@/components/PageLayout";
import { Cloud, CloudRain, Sun } from "lucide-react";

const Forecast = () => {
  const forecast = [
    { day: "Monday", temp: 22, condition: "Sunny", icon: Sun },
    { day: "Tuesday", temp: 20, condition: "Cloudy", icon: Cloud },
    { day: "Wednesday", temp: 18, condition: "Rainy", icon: CloudRain },
    { day: "Thursday", temp: 21, condition: "Partly Cloudy", icon: Cloud },
    { day: "Friday", temp: 24, condition: "Sunny", icon: Sun },
  ];

  return (
    <PageLayout
      title="5-Day Weather Forecast"
      description="Plan ahead with our extended weather forecast"
      backgroundClass="bg-gradient-to-br from-[hsl(204,94%,64%)] via-[hsl(217,91%,60%)] to-[hsl(43,96%,56%)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {forecast.map((day, index) => (
          <div key={index} className="metric-card h-auto py-8">
            <h3 className="text-xl font-bold mb-4">{day.day}</h3>
            <day.icon className="w-16 h-16 text-primary mb-4" />
            <p className="text-3xl font-bold mb-2">{day.temp}°C</p>
            <p className="text-sm text-muted-foreground">{day.condition}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Forecast;
