import { Card } from "@/components/ui/card";

interface ResultsCardProps {
  score: number;
  riskLevel: {
    level: string;
    color: string;
  };
  burnoutWindow: string;
}

const ResultsCard = ({ score, riskLevel, burnoutWindow }: ResultsCardProps) => {
  return (
    <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm border-[#E5DEFF]">
      <div className="flex flex-col items-center space-y-6">
        <div className="w-4/5">
          <img 
            src="/lovable-uploads/2ba54d49-c430-40cf-b7f4-6109f7e05336.png" 
            alt="Sunsama Logo" 
            className="h-6 mx-auto"
          />
        </div>
        
        <h2 className="text-3xl font-light text-[#6E59A5]">Your burnout risk is:</h2>
        
        <div className="flex flex-col items-center gap-3">
          <span className="text-6xl font-medium text-[#7E69AB] leading-none">
            {score > 10 ? `${(score * 10).toFixed(0)}%` : score.toFixed(1)}
          </span>
          
          <span className={`text-2xl font-light ${riskLevel.color}`}>
            {riskLevel.level}
          </span>
          
          <div className="text-center space-y-1">
            <span className="text-[#8E9196] text-lg font-medium block">
              Expected Impact:
            </span>
            <span className="text-[#7E69AB] text-lg block">
              {burnoutWindow}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ResultsCard;