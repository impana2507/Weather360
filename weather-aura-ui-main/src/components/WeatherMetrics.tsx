import {
  Droplets,
  Wind,
  Gauge,
  Eye,
  Sunrise,
  Sunset,
  ThermometerSun,
  CloudRain,
  Navigation,
  MapPin,
} from "lucide-react";

interface WeatherMetricsProps {
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  sunrise: number;
  sunset: number;
  tempMin: number;
  tempMax: number;
  clouds: number;
  lat: number;
  lon: number;
}

const WeatherMetrics = ({
  humidity,
  windSpeed,
  pressure,
  visibility,
  sunrise,
  sunset,
  tempMin,
  tempMax,
  clouds,
  lat,
  lon,
}: WeatherMetricsProps) => {
  const formatTime = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const metrics = [
    {
      icon: <Droplets className="w-6 h-6 text-primary" />,
      label: "Humidity",
      value: `${humidity}%`,
    },
    {
      icon: <Wind className="w-6 h-6 text-primary" />,
      label: "Wind Speed",
      value: `${windSpeed} km/h`,
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      label: "Pressure",
      value: `${pressure} hPa`,
    },
    {
      icon: <Eye className="w-6 h-6 text-primary" />,
      label: "Visibility",
      value: `${(visibility / 1000).toFixed(1)} km`,
    },
    {
      icon: <ThermometerSun className="w-6 h-6 text-primary" />,
      label: "Min / Max Temp",
      value: `${Math.round(tempMin)}° / ${Math.round(tempMax)}°`,
    },
    {
      icon: <CloudRain className="w-6 h-6 text-primary" />,
      label: "Cloud Coverage",
      value: `${clouds}%`,
    },
    {
      icon: <Sunrise className="w-6 h-6 text-accent" />,
      label: "Sunrise",
      value: formatTime(sunrise),
    },
    {
      icon: <Sunset className="w-6 h-6 text-accent" />,
      label: "Sunset",
      value: formatTime(sunset),
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Coordinates",
      value: `${lat.toFixed(2)}°, ${lon.toFixed(2)}°`,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in-up">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="metric-card"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <div className="mb-3">{metric.icon}</div>
          <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
          <div className="text-2xl font-bold">{metric.value}</div>
        </div>
      ))}
    </div>
  );
};

export default WeatherMetrics;
