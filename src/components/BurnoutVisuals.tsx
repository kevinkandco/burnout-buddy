import { Card } from "@/components/ui/card";

interface BurnoutVisualsProps {
  score: number;
  workHours: number;
  sleepHours: number;
  selfCareHours: number;
}

const BurnoutVisuals = ({ workHours, sleepHours, selfCareHours }: BurnoutVisualsProps) => {
  const normalizedWorkHours = (workHours / 40) * 100;
  const normalizedSleepHours = (sleepHours / 9) * 100;
  const normalizedSelfCare = (selfCareHours / 10) * 100;

  const metrics = [
    { 
      label: "Work Load", 
      value: normalizedWorkHours, 
      color: "#9b87f5",
      displayValue: `${Math.round(normalizedWorkHours)}%`
    },
    { 
      label: "Sleep Quality", 
      value: normalizedSleepHours, 
      color: "#7E69AB",
      displayValue: `${Math.round(normalizedSleepHours)}%`
    },
    { 
      label: "Self-Care", 
      value: normalizedSelfCare, 
      color: "#6E59A5",
      displayValue: `${Math.round(normalizedSelfCare)}%`
    },
  ];

  return (
    <Card className="p-6 border-[#E5DEFF] bg-white/80 backdrop-blur-sm">
      <div className="space-y-4">
        <h4 className="text-sm font-medium text-[#7E69AB] mb-4">Key Metrics</h4>
        {metrics.map((metric, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[#8E9196]">{metric.label}</span>
              <span className="text-[#7E69AB]">{metric.displayValue}</span>
            </div>
            <div className="h-2 bg-[#F1F0FB] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(metric.value, 100)}%`,
                  backgroundColor: metric.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BurnoutVisuals;