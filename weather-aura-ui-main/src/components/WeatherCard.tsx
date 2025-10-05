import { Cloud, CloudRain, Sun, CloudSnow, Wind } from "lucide-react";

interface WeatherCardProps {
  temperature: number;
  condition: string;
  city: string;
  country: string;
  feelsLike: number;
  icon: string;
}

const WeatherCard = ({
  temperature,
  condition,
  city,
  country,
  feelsLike,
  icon,
}: WeatherCardProps) => {
  const getWeatherIcon = () => {
    const iconCode = icon.toLowerCase();
    if (iconCode.includes("01")) return <Sun className="w-24 h-24 text-accent animate-pulse-soft" />;
    if (iconCode.includes("02") || iconCode.includes("03") || iconCode.includes("04"))
      return <Cloud className="w-24 h-24 text-primary" />;
    if (iconCode.includes("09") || iconCode.includes("10"))
      return <CloudRain className="w-24 h-24 text-primary" />;
    if (iconCode.includes("13")) return <CloudSnow className="w-24 h-24 text-primary" />;
    if (iconCode.includes("50")) return <Wind className="w-24 h-24 text-primary" />;
    return <Cloud className="w-24 h-24 text-primary" />;
  };

  return (
    <div className="weather-card animate-fade-in-up">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">
            {city}, {country}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">{condition}</p>
          <div className="text-6xl md:text-7xl font-bold mb-2">
            {Math.round(temperature)}°C
          </div>
          <p className="text-lg text-muted-foreground">
            Feels like {Math.round(feelsLike)}°C
          </p>
        </div>
        <div className="flex-shrink-0">{getWeatherIcon()}</div>
      </div>
    </div>
  );
};

export default WeatherCard;
