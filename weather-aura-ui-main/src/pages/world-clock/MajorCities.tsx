import { useEffect, useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Clock, MapPin } from "lucide-react";

const MajorCities = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const cities = [
    { name: "New York", timezone: "America/New_York", offset: -5 },
    { name: "London", timezone: "Europe/London", offset: 0 },
    { name: "Tokyo", timezone: "Asia/Tokyo", offset: 9 },
    { name: "Paris", timezone: "Europe/Paris", offset: 1 },
    { name: "Sydney", timezone: "Australia/Sydney", offset: 11 },
    { name: "Dubai", timezone: "Asia/Dubai", offset: 4 },
  ];

  const getTimeForCity = (offset: number) => {
    const utc = currentTime.getTime() + currentTime.getTimezoneOffset() * 60000;
    const cityTime = new Date(utc + 3600000 * offset);
    return cityTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <PageLayout
      title="World Clock"
      description="View current time in major cities around the world"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cities.map((city, index) => (
          <div key={index} className="metric-card h-auto py-8">
            <MapPin className="w-8 h-8 text-primary mb-3" />
            <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="text-3xl font-mono font-bold">
                {getTimeForCity(city.offset)}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">UTC {city.offset >= 0 ? "+" : ""}{city.offset}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default MajorCities;
