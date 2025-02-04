import { Card } from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";

interface Recommendation {
  title: string;
  description: string;
  sunsamaLink: string;
}

interface BurnoutRecommendationsProps {
  workHours: number;
  sleepHours: number;
  selfCareHours: number;
}

const BurnoutRecommendations = ({ workHours, sleepHours, selfCareHours }: BurnoutRecommendationsProps) => {
  const getRecommendations = (): Recommendation[] => {
    const recommendations: Recommendation[] = [];
    const isHighRisk = workHours > 50 || sleepHours < 6 || selfCareHours < 4;
    const isModerateRisk = workHours > 45 || sleepHours < 7 || selfCareHours < 7;

    // Work-specific recommendations for high/moderate risk
    if (isHighRisk) {
      recommendations.push({
        title: "Urgent: Discuss Workload",
        description: "Schedule a meeting with your manager to discuss workload concerns. Sunsama's workload visualization tools can help you present your case with data-driven insights.",
        sunsamaLink: "https://sunsama.com"
      });
      recommendations.push({
        title: "Document Impact",
        description: "Use Sunsama's time tracking and analytics to document how your current workload affects your performance, making it easier to have productive conversations with management.",
        sunsamaLink: "https://sunsama.com"
      });
    } else if (isModerateRisk) {
      recommendations.push({
        title: "Proactive Communication",
        description: "Share your capacity concerns during your next 1:1. Sunsama's capacity planning features can help you visualize and communicate your workload effectively.",
        sunsamaLink: "https://sunsama.com"
      });
    }

    if (workHours > 45) {
      recommendations.push({
        title: "Optimize Work Hours",
        description: "Use Sunsama's task prioritization and time-blocking features to focus on high-impact activities during your peak productivity hours.",
        sunsamaLink: "https://sunsama.com"
      });
    }

    if (sleepHours < 7) {
      recommendations.push({
        title: "Improve Sleep Quality",
        description: "Create a consistent bedtime routine with Sunsama's daily planning tools. Set work boundaries and schedule end-of-day reminders to protect your rest time.",
        sunsamaLink: "https://sunsama.com"
      });
    }

    if (selfCareHours < 7) {
      recommendations.push({
        title: "Prioritize Self-Care",
        description: "Use Sunsama's calendar blocking to reserve dedicated time for self-care activities. Our smart scheduling ensures these important breaks don't get overlooked.",
        sunsamaLink: "https://sunsama.com"
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        title: "Maintain Balance",
        description: "You're maintaining good habits! Use Sunsama's daily planning tools to keep tracking your work-life balance and stay ahead of potential burnout risks.",
        sunsamaLink: "https://sunsama.com"
      });
    }

    return recommendations;
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-light text-[#6E59A5] mb-4">Personalized Recommendations</h3>
      <div className="grid gap-4">
        {getRecommendations().map((rec, index) => (
          <Card key={index} className="p-4 border-[#E5DEFF] bg-white/80 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2Icon className="w-5 h-5 text-[#9b87f5] mt-1" />
              <div className="flex-1">
                <h4 className="font-medium text-[#7E69AB] mb-1">{rec.title}</h4>
                <p className="text-sm text-[#8E9196] mb-2">{rec.description}</p>
                <a
                  href={rec.sunsamaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#6E59A5] hover:text-[#9b87f5] transition-colors underline"
                >
                  Learn more about Sunsama
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BurnoutRecommendations;