import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Discover Truth in Media
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            Harness the power of AI to detect manipulated content and verify authenticity. 
            TruthLens helps you separate fact from fiction in the digital age.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Shield className="h-5 w-5 text-blue-600" />
              <span className="font-medium">99.9% Accuracy</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Zap className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Real-time Analysis</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <Star className="h-5 w-5 text-blue-600" />
              <span className="font-medium">Trusted by Experts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}