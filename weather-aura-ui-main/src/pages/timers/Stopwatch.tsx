import { useState, useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = Math.floor((milliseconds % 1000) / 10);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(2, "0")}`;
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <PageLayout
      title="Stopwatch"
      description="Precise time tracking at your fingertips"
    >
      <div className="max-w-2xl mx-auto">
        <div className="weather-card text-center">
          <div className="text-7xl md:text-8xl font-mono font-bold mb-12">
            {formatTime(time)}
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              onClick={() => setIsRunning(!isRunning)}
              className="h-16 w-32"
            >
              {isRunning ? (
                <>
                  <Pause className="w-6 h-6 mr-2" />
                  Pause
                </>
              ) : (
                <>
                  <Play className="w-6 h-6 mr-2" />
                  Start
                </>
              )}
            </Button>

            <Button
              size="lg"
              variant="secondary"
              onClick={handleReset}
              className="h-16 w-32"
            >
              <RotateCcw className="w-6 h-6 mr-2" />
              Reset
            </Button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Stopwatch;
