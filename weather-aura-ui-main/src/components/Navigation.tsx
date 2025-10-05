import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Cloud, Menu, X, Newspaper, Clock, Globe, Calendar as CalendarIcon,
  CloudSun, Moon, Timer, Calculator, User,
  Sunrise, MapPin, Bell, TrendingUp, Zap, Watch, Hourglass,
  Gauge, Plus, Settings
} from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("Weather360");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const menuItems = [
    {
      name: "News",
      icon: Newspaper,
      items: [
        { label: "Latest News", icon: TrendingUp, path: "/news/latest" },
        { label: "World News", icon: Globe, path: "/news/world" },
        { label: "Local News", icon: MapPin, path: "/news/local" },
        { label: "Technology", icon: Zap, path: "/news/technology" },
      ]
    },
    {
      name: "World Clock",
      icon: Clock,
      items: [
        { label: "Major Cities", icon: Globe, path: "/world-clock/major-cities" },
        { label: "Add Location", icon: Plus, path: "/world-clock/add-location" },
        { label: "Clock Settings", icon: Settings, path: "/world-clock/settings" },
        { label: "New Delhi, India", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "Mumbai, India", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "Kolkata, India", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "London, UK", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "New York, USA", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "Tokyo, Japan", icon: MapPin, path: "/world-clock/major-cities" },
        { label: "Sydney, Australia", icon: MapPin, path: "/world-clock/major-cities" },
      ]
    },
    {
      name: "Time Zones",
      icon: Globe,
      items: [
        { label: "Popular Zones", icon: MapPin, path: "/time-zones/popular" },
        { label: "Time Converter", icon: Clock, path: "/time-zones/converter" },
        { label: "Compare Zones", icon: Globe, path: "/time-zones/compare" },
      ]
    },
    {
      name: "Calendar",
      icon: CalendarIcon,
      items: [
        { label: "Month View", icon: CalendarIcon, path: "/calendar/month" },
        { label: "Year View", icon: CalendarIcon, path: "/calendar/year" },
        { label: "Events", icon: Bell, path: "/calendar/events" },
        { label: "Reminders", icon: Bell, path: "/calendar/reminders" },
      ]
    },
    {
      name: "Weather",
      icon: CloudSun,
      path: "/",
      items: [
        { label: "Dashboard", icon: CloudSun, path: "/" },
        { label: "5-Day Forecast", icon: Cloud, path: "/weather/forecast" },
        { label: "Weather Maps", icon: MapPin, path: "/weather/maps" },
        { label: "Weather Alerts", icon: Bell, path: "/weather/alerts" },
      ]
    },
    {
      name: "Sun, Moon & Space",
      icon: Moon,
      items: [
        { label: "Sunrise & Sunset", icon: Sunrise, path: "/space/sunrise-sunset" },
        { label: "Moon Phases", icon: Moon, path: "/space/moon-phases" },
        { label: "Astronomy", icon: Moon, path: "/space/astronomy" },
        { label: "ISS Tracker", icon: Globe, path: "/space/iss-tracker" },
      ]
    },
    {
      name: "Timers",
      icon: Timer,
      items: [
        { label: "Countdown Timer", icon: Hourglass, path: "/timers/countdown" },
        { label: "Stopwatch", icon: Watch, path: "/timers/stopwatch" },
        { label: "Alarm Clock", icon: Bell, path: "/timers/alarm" },
        { label: "Pomodoro Timer", icon: Timer, path: "/timers/pomodoro" },
      ]
    },
    {
      name: "Calculators",
      icon: Calculator,
      items: [
        { label: "Time Calculator", icon: Clock, path: "/calculators/time" },
        { label: "Date Calculator", icon: CalendarIcon, path: "/calculators/date" },
        { label: "Age Calculator", icon: User, path: "/calculators/age" },
        { label: "Timezone Converter", icon: Globe, path: "/calculators/timezone" },
      ]
    },
    {
      name: "My Account",
      icon: User,
      path: "/login",
      items: [
        { label: "Profile", icon: User, path: "/account/profile" },
        { label: "Settings", icon: Settings, path: "/account/settings" },
        { label: "Preferences", icon: Settings, path: "/account/preferences" },
        { label: "Logout", icon: User, path: "/login" },
      ]
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-50 to-blue-100 shadow-sm m-4 rounded-md">
      <div className="container mx-auto px-4">
        {/* Main Navigation Bar */}
        <div className="flex items-center justify-between h-14 flex-nowrap">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-1 flex-shrink-0"
            onClick={() => setActiveTab("Weather360")}
          >
            <Cloud className="w-6 h-6 text-primary transition-transform group-hover:scale-110" />
            <span className={`text-lg font-semibold hidden lg:block rounded-md px-2 py-1 transition-colors ${activeTab === "Weather360" ? "bg-blue-600 text-white" : "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"}`}>
              Weather360
            </span>
          </Link>

          {/* Desktop Navigation - Tabs */}
          <div ref={dropdownRef} className="hidden lg:flex items-center justify-center space-x-1">
            {menuItems.map((menu) => {
              const path = menu.path || menu.items[0].path;
              const isOpen = openDropdown === menu.name || hoveredDropdown === menu.name;
              return (
                <div key={menu.name} className="relative">
                  <Link
                    to={path}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(openDropdown === menu.name ? null : menu.name);
                      setActiveTab(menu.name);
                    }}
                    onMouseEnter={() => setHoveredDropdown(menu.name)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                    className={`flex items-center space-x-1 px-2 py-1 text-xs font-medium rounded-md transition-colors ${
                      isOpen ? "bg-blue-600 text-white" : "hover:bg-blue-100"
                    }`}
                  >
                    <menu.icon className="w-4 h-4" />
                    <span>{menu.name}</span>
                  </Link>
                  <div className={`absolute top-full left-0 mt-1 w-48 bg-white shadow-md rounded-md transition duration-200 ease-in-out z-10 ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                  }`}>
                    {menu.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="flex items-center space-x-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-md transition-colors"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <item.icon className="w-4 h-4 text-gray-600" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Collapsible Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-slide-in border-t border-white/10 mt-2 max-h-[70vh] overflow-y-auto">
            {menuItems.map((menu) => (
              <div key={menu.name} className="mb-4">
                <div
                  className={`flex items-center space-x-2 px-3 py-2 font-semibold text-sm cursor-pointer rounded-md transition-colors ${
                    activeTab === menu.name ? "bg-blue-600 text-white" : "text-primary hover:bg-white/10"
                  }`}
                  onClick={() => setActiveTab(menu.name)}
                >
                  <menu.icon className="w-4 h-4" />
                  <span>{menu.name}</span>
                </div>
                <div className="ml-6 space-y-1">
                  {menu.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-sm hover:bg-white/10 rounded-md transition-colors"
                    >
                      <item.icon className="w-3 h-3 text-muted-foreground" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
