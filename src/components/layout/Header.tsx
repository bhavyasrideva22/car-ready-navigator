import { Button } from '@/components/ui/button';
import { Car, Menu } from 'lucide-react';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-automotive-silver">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Car className="w-6 h-6 text-primary" />
            </div>
            <div>
              <div className="font-bold text-lg">AutoSkills</div>
              <div className="text-xs text-muted-foreground">Assessment Platform</div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </a>
            <a href="#assessment" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Assessment
            </a>
            <a href="#results" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Results
            </a>
            <a href="#careers" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-primary-glow">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};