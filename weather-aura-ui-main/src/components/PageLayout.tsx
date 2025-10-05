import { ReactNode } from "react";
import Navigation from "./Navigation";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  backgroundClass?: string;
}

const PageLayout = ({ 
  children, 
  title, 
  description,
  backgroundClass = "bg-gradient-to-br from-primary/20 via-background to-accent/20"
}: PageLayoutProps) => {
  return (
    <div className={`min-h-screen ${backgroundClass}`}>
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-foreground drop-shadow-lg">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground mb-6">
              {description}
            </p>
          )}
        </div>
        
        <div className="animate-fade-in-up">
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;
