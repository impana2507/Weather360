import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TimeConverter = () => {
  const [sourceTime, setSourceTime] = useState("12:00");
  const [convertedTime, setConvertedTime] = useState("");

  const handleConvert = () => {
    // Simple demo conversion
    setConvertedTime(sourceTime);
  };

  return (
    <PageLayout
      title="Time Zone Converter"
      description="Convert time between different time zones"
    >
      <div className="max-w-2xl mx-auto">
        <div className="weather-card">
          <div className="space-y-6">
            <div>
              <Label htmlFor="source-time" className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4" />
                <span>Source Time</span>
              </Label>
              <Input
                id="source-time"
                type="time"
                value={sourceTime}
                onChange={(e) => setSourceTime(e.target.value)}
                className="glass-card border-2"
              />
              <p className="text-sm text-muted-foreground mt-2">Select timezone: UTC</p>
            </div>

            <div className="flex justify-center">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            <div>
              <Label className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4" />
                <span>Converted Time</span>
              </Label>
              <div className="p-4 glass-card rounded-lg text-center">
                <p className="text-3xl font-bold font-mono">
                  {convertedTime || "--:--"}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-2">Target timezone: EST</p>
            </div>

            <Button onClick={handleConvert} className="w-full h-12">
              Convert Time
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TimeConverter;
