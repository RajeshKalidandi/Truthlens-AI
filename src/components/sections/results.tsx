import { Progress } from '@/components/ui/progress';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertTriangle,
  CheckCircle,
  ChevronDown,
  Info,
  XCircle,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Results() {
  const analysisResults = [
    {
      title: 'Image Manipulation',
      confidence: 98,
      status: 'detected',
      details: 'Signs of digital alteration detected in key areas',
    },
    {
      title: 'Metadata Analysis',
      confidence: 85,
      status: 'warning',
      details: 'Inconsistent timestamp information',
    },
    {
      title: 'Source Verification',
      confidence: 95,
      status: 'verified',
      details: 'Original source confirmed',
    },
    {
      title: 'Context Analysis',
      confidence: 75,
      status: 'info',
      details: 'Additional context may be needed',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'detected':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      case 'verified':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'info':
        return <Info className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Analysis Results</CardTitle>
            <CardDescription>
              Detailed breakdown of our AI-powered analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {analysisResults.map((result, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center space-x-4 w-full">
                      {getStatusIcon(result.status)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span>{result.title}</span>
                          <span className="text-sm text-gray-500">
                            {result.confidence}% confidence
                          </span>
                        </div>
                        <Progress
                          value={result.confidence}
                          className="h-1 mt-2"
                        />
                      </div>
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-4 text-gray-600 dark:text-gray-400">
                      {result.details}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}