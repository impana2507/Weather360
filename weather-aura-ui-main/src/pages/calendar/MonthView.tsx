import PageLayout from "@/components/PageLayout";
import { Calendar as CalendarIcon } from "lucide-react";

const MonthView = () => {
  const currentDate = new Date();
  const monthName = currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  return (
    <PageLayout
      title="Calendar - Month View"
      description={monthName}
    >
      <div className="max-w-5xl mx-auto">
        <div className="weather-card">
          <div className="grid grid-cols-7 gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center font-bold text-primary p-4"
              >
                {day}
              </div>
            ))}
            
            {emptyDays.map((_, index) => (
              <div key={`empty-${index}`} className="p-4" />
            ))}
            
            {days.map((day) => (
              <div
                key={day}
                className={`p-4 text-center rounded-lg transition-colors hover:bg-white/20 cursor-pointer ${
                  day === currentDate.getDate()
                    ? "bg-primary text-primary-foreground font-bold"
                    : ""
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default MonthView;
