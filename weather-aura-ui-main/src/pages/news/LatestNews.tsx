import PageLayout from "@/components/PageLayout";
import { Newspaper, Clock } from "lucide-react";

const LatestNews = () => {
  const newsItems = [
    {
      title: "Breaking: Major Weather System Approaching",
      time: "2 hours ago",
      category: "Weather",
    },
    {
      title: "New Climate Report Released Today",
      time: "4 hours ago",
      category: "Environment",
    },
    {
      title: "Technology Advances in Weather Forecasting",
      time: "6 hours ago",
      category: "Technology",
    },
  ];

  return (
    <PageLayout 
      title="Latest News" 
      description="Stay updated with the most recent news and updates"
    >
      <div className="max-w-4xl mx-auto space-y-4">
        {newsItems.map((item, index) => (
          <div key={index} className="weather-card">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Newspaper className="w-5 h-5 text-primary" />
                  <span className="text-sm text-primary font-medium">{item.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default LatestNews;
