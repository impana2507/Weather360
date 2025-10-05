import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// News pages
import LatestNews from "./pages/news/LatestNews";

// World Clock pages
import MajorCities from "./pages/world-clock/MajorCities";

// Time Zones pages
import TimeConverter from "./pages/time-zones/TimeConverter";

// Calendar pages
import MonthView from "./pages/calendar/MonthView";

// Weather pages
import Forecast from "./pages/weather/Forecast";

// Space pages
import MoonPhases from "./pages/space/MoonPhases";

// Timer pages
import Stopwatch from "./pages/timers/Stopwatch";

// Calculator pages
import AgeCalculator from "./pages/calculators/AgeCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          
          {/* News Routes */}
          <Route path="/news/latest" element={<LatestNews />} />
          <Route path="/news/world" element={<LatestNews />} />
          <Route path="/news/local" element={<LatestNews />} />
          <Route path="/news/technology" element={<LatestNews />} />
          
          {/* World Clock Routes */}
          <Route path="/world-clock/major-cities" element={<MajorCities />} />
          <Route path="/world-clock/add-location" element={<MajorCities />} />
          <Route path="/world-clock/settings" element={<MajorCities />} />
          
          {/* Time Zones Routes */}
          <Route path="/time-zones/popular" element={<TimeConverter />} />
          <Route path="/time-zones/converter" element={<TimeConverter />} />
          <Route path="/time-zones/compare" element={<TimeConverter />} />
          
          {/* Calendar Routes */}
          <Route path="/calendar/month" element={<MonthView />} />
          <Route path="/calendar/year" element={<MonthView />} />
          <Route path="/calendar/events" element={<MonthView />} />
          <Route path="/calendar/reminders" element={<MonthView />} />
          
          {/* Weather Routes */}
          <Route path="/weather/forecast" element={<Forecast />} />
          <Route path="/weather/maps" element={<Forecast />} />
          <Route path="/weather/alerts" element={<Forecast />} />
          
          {/* Space Routes */}
          <Route path="/space/sunrise-sunset" element={<MoonPhases />} />
          <Route path="/space/moon-phases" element={<MoonPhases />} />
          <Route path="/space/astronomy" element={<MoonPhases />} />
          <Route path="/space/iss-tracker" element={<MoonPhases />} />
          
          {/* Timer Routes */}
          <Route path="/timers/countdown" element={<Stopwatch />} />
          <Route path="/timers/stopwatch" element={<Stopwatch />} />
          <Route path="/timers/alarm" element={<Stopwatch />} />
          <Route path="/timers/pomodoro" element={<Stopwatch />} />
          
          {/* Calculator Routes */}
          <Route path="/calculators/time" element={<AgeCalculator />} />
          <Route path="/calculators/date" element={<AgeCalculator />} />
          <Route path="/calculators/age" element={<AgeCalculator />} />
          <Route path="/calculators/timezone" element={<AgeCalculator />} />
          
          {/* Account Routes */}
          <Route path="/account/profile" element={<Login />} />
          <Route path="/account/settings" element={<Login />} />
          <Route path="/account/preferences" element={<Login />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
