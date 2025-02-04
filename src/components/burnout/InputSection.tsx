import { Slider } from "@/components/ui/slider";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface InputSectionProps {
  inputs: {
    hoursWorked: number;
    sleepHours: number;
    selfCareHours: number;
  };
  showResults: boolean;
  isOpen: boolean;
  onInputChange: (field: string, value: number[]) => void;
  onCalculate: () => void;
  onReset: () => void;
}

const InputSection = ({
  inputs,
  showResults,
  isOpen,
  onInputChange,
  onCalculate,
  onReset,
}: InputSectionProps) => {
  return (
    <Collapsible open={isOpen}>
      <Card className={`p-6 shadow-lg bg-white/80 backdrop-blur-sm border-[#E5DEFF] ${showResults ? 'opacity-75' : ''}`}>
        <CollapsibleContent>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#7E69AB] flex items-center gap-2">
                  Hours Worked per Week
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-[#9b87f5]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Standard work week is 40 hours</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <span className="text-sm text-[#8E9196]">{inputs.hoursWorked}h</span>
              </div>
              <Slider
                value={[inputs.hoursWorked]}
                min={0}
                max={100}
                step={1}
                disabled={showResults}
                onValueChange={(value) => onInputChange('hoursWorked', value)}
                className={`w-full ${showResults ? 'cursor-not-allowed' : ''}`}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#7E69AB] flex items-center gap-2">
                  Average Sleep per Night
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-[#9b87f5]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Recommended sleep is 7-9 hours</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <span className="text-sm text-[#8E9196]">{inputs.sleepHours}h</span>
              </div>
              <Slider
                value={[inputs.sleepHours]}
                min={0}
                max={12}
                step={0.5}
                disabled={showResults}
                onValueChange={(value) => onInputChange('sleepHours', value)}
                className={`w-full ${showResults ? 'cursor-not-allowed' : ''}`}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-[#7E69AB] flex items-center gap-2">
                  Self-Care Hours per Week
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <InfoIcon className="h-4 w-4 text-[#9b87f5]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Time spent on activities that help you relax and recharge</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </label>
                <span className="text-sm text-[#8E9196]">{inputs.selfCareHours}h</span>
              </div>
              <Slider
                value={[inputs.selfCareHours]}
                min={0}
                max={40}
                step={0.5}
                disabled={showResults}
                onValueChange={(value) => onInputChange('selfCareHours', value)}
                className={`w-full ${showResults ? 'cursor-not-allowed' : ''}`}
              />
            </div>
          </div>
        </CollapsibleContent>

        <div className="flex flex-col gap-2 mt-4">
          {!isOpen && (
            <p className="text-center text-[#7E69AB] text-sm">Ready to reassess?</p>
          )}
          {!showResults ? (
            <Button
              onClick={onCalculate}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
            >
              Calculate Risk
            </Button>
          ) : (
            <Button
              onClick={onReset}
              className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white !opacity-100"
            >
              Reset Calculator
            </Button>
          )}
        </div>
      </Card>
    </Collapsible>
  );
};

export default InputSection;