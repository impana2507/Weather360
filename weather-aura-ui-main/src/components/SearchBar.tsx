import { useState, useEffect, useRef } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  onCitySelect: (city: string) => void;
}

interface CitySuggestion {
  name: string;
  country: string;
  lat: number;
  lon: number;
}

const SearchBar = ({ onCitySelect }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<CitySuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const API_KEY = "bbca248f87c3273ce6c926cb1d0d9223";

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${API_KEY}`
        );
        const data = await response.json();
        setSuggestions(data);
        setShowSuggestions(true);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timeoutId = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleSelectCity = (city: CitySuggestion) => {
    const cityName = `${city.name}, ${city.country}`;
    setQuery(cityName);
    onCitySelect(cityName);
    setShowSuggestions(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search for any city or village worldwide..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
          className="pl-12 pr-4 h-14 text-lg glass-card border-2 focus:border-primary transition-all"
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute w-full mt-2 glass-card overflow-hidden animate-fade-in z-50">
          {suggestions.map((city, index) => (
            <button
              key={`${city.lat}-${city.lon}-${index}`}
              onClick={() => handleSelectCity(city)}
              className="w-full px-4 py-3 flex items-center space-x-3 hover:bg-white/20 transition-colors text-left"
            >
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              <div>
                <div className="font-medium">{city.name}</div>
                <div className="text-sm text-muted-foreground">{city.country}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {isLoading && (
        <div className="absolute w-full mt-2 glass-card p-4 text-center animate-pulse-soft">
          Searching...
        </div>
      )}
    </div>
  );
};

export default SearchBar;
