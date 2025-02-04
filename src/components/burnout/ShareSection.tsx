import { Button } from "@/components/ui/button";
import { TwitterIcon, LinkedinIcon, DownloadIcon, MailIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import html2canvas from "html2canvas";

interface ShareSectionProps {
  score: number;
  riskLevel: {
    level: string;
  };
  exportRef: React.RefObject<HTMLDivElement>;
}

const ShareSection = ({ score, riskLevel, exportRef }: ShareSectionProps) => {
  const { toast } = useToast();

  const handleShare = async (platform: 'x' | 'linkedin' | 'download' | 'email') => {
    const text = `I just checked my burnout risk level using the Burnout Calculator. My risk level is ${riskLevel.level} (${score.toFixed(1)}/10). Check yours too!`;
    const url = window.location.href;

    let imageUrl = '';
    if (exportRef.current) {
      try {
        const canvas = await html2canvas(exportRef.current);
        imageUrl = canvas.toDataURL();
      } catch (error) {
        toast({
          title: "Error generating image",
          description: "There was an error creating the share image",
          variant: "destructive",
        });
      }
    }

    switch (platform) {
      case 'x':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
          '_blank'
        );
        break;
      case 'linkedin':
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(text)}`,
          '_blank'
        );
        break;
      case 'download':
        if (imageUrl) {
          const link = document.createElement('a');
          link.download = 'burnout-assessment.png';
          link.href = imageUrl;
          link.click();
          toast({
            title: "Download started",
            description: "Your assessment has been downloaded as a PNG file",
          });
        }
        break;
      case 'email':
        const subject = encodeURIComponent("My Burnout Risk Assessment Results");
        const body = encodeURIComponent(`${text}\n\nTry the calculator yourself at: ${url}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
        break;
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button
          onClick={() => handleShare('x')}
          variant="outline"
          className="flex-1 border-[#E5DEFF] text-[#7E69AB] hover:bg-[#F1F0FB]"
        >
          <TwitterIcon className="w-4 h-4 mr-2" />
          Share on X
        </Button>
        <Button
          onClick={() => handleShare('linkedin')}
          variant="outline"
          className="flex-1 border-[#E5DEFF] text-[#7E69AB] hover:bg-[#F1F0FB]"
        >
          <LinkedinIcon className="w-4 h-4 mr-2" />
          Share on LinkedIn
        </Button>
      </div>
      
      <div className="flex gap-2">
        <Button
          onClick={() => handleShare('download')}
          variant="outline"
          className="flex-1 border-[#E5DEFF] text-[#7E69AB] hover:bg-[#F1F0FB]"
        >
          <DownloadIcon className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button
          onClick={() => handleShare('email')}
          variant="outline"
          className="flex-1 border-[#E5DEFF] text-[#7E69AB] hover:bg-[#F1F0FB]"
        >
          <MailIcon className="w-4 h-4 mr-2" />
          Share via Email
        </Button>
      </div>
    </div>
  );
};

export default ShareSection;