import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';

const steps = [
  {
    title: 'Welcome to TruthLens AI',
    description: 'Discover the power of AI-powered media analysis',
    content: (
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <Shield className="h-5 w-5 text-blue-600" />
              <span>99.9% Accuracy</span>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <Zap className="h-5 w-5 text-blue-600" />
              <span>Real-time Analysis</span>
            </div>
            <div className="flex items-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600" />
              <span>Trusted Platform</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Upload & Analyze',
    description: 'Learn how to analyze media content',
    content: (
      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
          alt="Analysis Dashboard"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Simply drag and drop your media files or click to upload. Our AI will analyze the content in real-time.
        </p>
      </div>
    ),
  },
  {
    title: 'View Results',
    description: 'Understand the analysis results',
    content: (
      <div className="space-y-4">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80"
          alt="Analysis Results"
          className="rounded-lg shadow-lg"
        />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Get detailed insights about your media content with our comprehensive analysis dashboard.
        </p>
      </div>
    ),
  },
];

export default function Welcome() {
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  
  const nextStep = () => {
    if (currentStep === steps.length - 1) {
      navigate('/dashboard');
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12">
      <Card className="w-full max-w-3xl mx-4">
        <CardHeader>
          <CardTitle>{steps[currentStep].title}</CardTitle>
          <CardDescription>{steps[currentStep].description}</CardDescription>
        </CardHeader>
        <CardContent>
          {steps[currentStep].content}
          <Progress
            value={((currentStep + 1) / steps.length) * 100}
            className="mt-8"
          />
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => prev - 1)}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button onClick={nextStep} className="group">
            {currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}