import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Target, Brain, Cog } from 'lucide-react';
import heroImage from '@/assets/automotive-hero.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Automotive Design Engineering" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background/80 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          <Zap className="w-4 h-4 mr-2" />
          Automotive Design Engineering Assessment
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-automotive-steel">
          Am I Ready to Become an 
          <span className="block text-automotive-blue">Automotive Design Engineer?</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          A comprehensive assessment to evaluate your psychological fit, technical readiness, and career alignment for automotive design engineering
        </p>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-automotive-silver">
            <div className="flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Psychometric Analysis</h3>
            <p className="text-sm text-muted-foreground">Personality fit, interests, and cognitive style assessment</p>
          </Card>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-automotive-silver">
            <div className="flex items-center justify-center mb-4">
              <Cog className="w-8 h-8 text-automotive-blue" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Technical Evaluation</h3>
            <p className="text-sm text-muted-foreground">Engineering aptitude and domain-specific knowledge</p>
          </Card>
          
          <Card className="p-6 bg-card/80 backdrop-blur-sm border-automotive-silver">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-automotive-success" />
            </div>
            <h3 className="text-lg font-semibold mb-2">WISCAR Framework</h3>
            <p className="text-sm text-muted-foreground">Will, Interest, Skill, Cognitive readiness, Ability, Real-world fit</p>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-automotive text-lg px-8 py-6"
          >
            Start Assessment
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="text-lg px-8 py-6 border-automotive-steel hover:bg-automotive-steel hover:text-white"
          >
            Learn More
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mt-6">
          ⏱️ Takes 25-30 minutes • 📊 Personalized insights • 🎯 Career guidance included
        </p>
      </div>
    </section>
  );
};