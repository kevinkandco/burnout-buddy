import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SunsamaCTAProps {
  score: number;
}

const SunsamaCTA = ({ score }: SunsamaCTAProps) => {
  const getCTAContent = (score: number) => {
    if (score <= 3) {
      return {
        message: "Your burnout risk is low—keep it that way by using Sunsama's daily scheduling routines to maintain your healthy work-life balance.",
        buttonText: "Stay on Track with Sunsama",
      };
    } else if (score <= 6) {
      return {
        message: "Your burnout risk is moderate—stay in control by using Sunsama's daily scheduling routines to keep stress in check.",
        buttonText: "Reduce Stress with Sunsama",
      };
    } else {
      return {
        message: "Your burnout risk is high—take action now with Sunsama's proven scheduling system to regain balance and reduce stress.",
        buttonText: "Start Recovery with Sunsama",
      };
    }
  };

  const content = getCTAContent(score);

  return (
    <Card className="p-6 border-[#E5DEFF] bg-white/80 backdrop-blur-sm">
      <div className="space-y-4">
        <p className="text-[#7E69AB] text-lg">{content.message}</p>
        <Button 
          className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white flex items-center justify-center gap-2"
          onClick={() => window.open('https://sunsama.com', '_blank')}
        >
          {content.buttonText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default SunsamaCTA;