import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface QuizTeaserProps {
  workHours: number;
  sleepHours: number;
  selfCareHours: number;
}

const QuizTeaser = ({ workHours, sleepHours, selfCareHours }: QuizTeaserProps) => {
  const getTeaserMessage = () => {
    if (workHours > 50) {
      return "Long hours can lead to burnout. See how Sunsama helps maintain work-life balance.";
    }
    if (sleepHours < 6) {
      return "Quality sleep is crucial. Learn how Sunsama helps you plan better days for better nights.";
    }
    if (selfCareHours < 5) {
      return "Self-care matters. Discover how Sunsama helps you make time for what's important.";
    }
    return null;
  };

  const message = getTeaserMessage();

  if (!message) return null;

  return (
    <Card className="p-4 mt-4 border-[#E5DEFF] bg-white/80 backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="text-[#7E69AB] text-sm">{message}</p>
        <Button 
          variant="ghost" 
          className="text-[#9b87f5] hover:text-[#7E69AB] p-0"
          onClick={() => window.open('https://sunsama.com', '_blank')}
        >
          Learn More
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
    </Card>
  );
};

export default QuizTeaser;