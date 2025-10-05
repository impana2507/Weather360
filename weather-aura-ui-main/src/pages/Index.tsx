import { useState, useEffect } from "react";
import { Loader2, AlertCircle, Clock, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import WeatherCard from "@/components/WeatherCard";
import WeatherMetrics from "@/components/WeatherMetrics";
import { toast } from "sonner";

interface WeatherData {
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  weather: Array<{
    main: string;
    description: string;
    icon: string;
  }>;
  wind: {
    speed: number;
  };
  clouds: {
    all: number;
  };
  visibility: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  coord: {
    lat: number;
    lon: number;
  };
  name: string;
  dt: number;
}

const Index = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [backgroundClass, setBackgroundClass] = useState("bg-gradient-to-br from-primary/20 via-background to-accent/20");

  const API_KEY = "bbca248f87c3273ce6c926cb1d0d9223";

  // Update current time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  // Fetch weather for default city (New York) on load
  useEffect(() => {
    fetchWeatherByCity("New York, US");
  }, []);

  // Update background based on weather
  useEffect(() => {
    if (!weatherData) return;

    const condition = weatherData.weather[0].main.toLowerCase();
    const icon = weatherData.weather[0].icon;
    const isNight = icon.includes("n");

    if (isNight) {
      setBackgroundClass("bg-gradient-to-br from-[hsl(237,83%,19%)] via-[hsl(251,91%,9%)] to-[hsl(237,83%,19%)]");
    } else if (condition.includes("clear")) {
      setBackgroundClass("bg-gradient-to-br from-[hsl(204,94%,64%)] via-[hsl(217,91%,60%)] to-[hsl(43,96%,56%)]");
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      setBackgroundClass("bg-gradient-to-br from-[hsl(217,91%,60%)] via-[hsl(221,83%,53%)] to-[hsl(215,28%,17%)]");
    } else if (condition.includes("cloud")) {
      setBackgroundClass("bg-gradient-to-br from-[hsl(215,16%,47%)] via-[hsl(215,28%,27%)] to-[hsl(215,28%,17%)]");
    } else {
      setBackgroundClass("bg-gradient-to-br from-primary/20 via-background to-accent/20");
    }
  }, [weatherData]);

  const fetchWeatherByCity = async (cityName: string) => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data: WeatherData = await response.json();
      setWeatherData(data);
      toast.success(`Weather loaded for ${data.name}`);
    } catch (err) {
      setError("Unable to fetch weather data. Please try another city.");
      toast.error("Failed to load weather data");
      console.error("Weather fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${backgroundClass}`}>
      <Navigation />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
            Weather Dashboard
          </h1>
          <p className="text-xl text-white/90 mb-6">
            Get real-time weather information for any location worldwide
          </p>

          {/* Date and Time */}
          <div className="flex items-center justify-center space-x-6 text-white/80 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(currentTime)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{formatTime(currentTime)}</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mb-12">
          <SearchBar onCitySelect={fetchWeatherByCity} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-4" />
            <p className="text-xl text-white">Loading weather data...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-20 animate-fade-in">
            <div className="glass-card p-8 max-w-md text-center">
              <AlertCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Error</h3>
              <p className="text-muted-foreground">{error}</p>
            </div>
          </div>
        )}

        {/* Weather Display */}
        {weatherData && !loading && (
          <div className="space-y-8">
            {/* Main Weather Card */}
            <WeatherCard
              temperature={weatherData.main.temp}
              condition={weatherData.weather[0].description}
              city={weatherData.name}
              country={weatherData.sys.country}
              feelsLike={weatherData.main.feels_like}
              icon={weatherData.weather[0].icon}
            />

            {/* Weather Metrics Grid */}
            <WeatherMetrics
              humidity={weatherData.main.humidity}
              windSpeed={weatherData.wind.speed * 3.6} // Convert m/s to km/h
              pressure={weatherData.main.pressure}
              visibility={weatherData.visibility}
              sunrise={weatherData.sys.sunrise}
              sunset={weatherData.sys.sunset}
              tempMin={weatherData.main.temp_min}
              tempMax={weatherData.main.temp_max}
              clouds={weatherData.clouds.all}
              lat={weatherData.coord.lat}
              lon={weatherData.coord.lon}
            />

            {/* Last Updated */}
            <div className="text-center text-white/70 text-sm animate-fade-in">
              Last updated: {new Date(weatherData.dt * 1000).toLocaleString()}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
