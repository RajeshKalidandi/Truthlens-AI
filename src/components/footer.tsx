import { Github } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">TruthLens AI</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Empowering truth through artificial intelligence
            </p>
            <Button variant="outline" size="sm">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Features</li>
              <li>Pricing</li>
              <li>API</li>
              <li>Documentation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} TruthLens AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}