import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressRing } from '@/components/ui/progress-ring';
import { Brain, Wrench, Target, Lightbulb, TrendingUp } from 'lucide-react';

export const AssessmentOverview = () => {
  const sections = [
    {
      title: "Psychometric Analysis",
      icon: Brain,
      description: "Personality fit, interests, and cognitive style using Big Five, Holland Codes, and Grit Scale",
      components: ["Interest Scale", "Personality Fit", "Cognitive Style", "Motivation"],
      color: "text-purple-500",
      bgColor: "bg-purple-50",
      progress: 0
    },
    {
      title: "Technical & Aptitude",
      icon: Wrench,
      description: "General aptitude, prerequisite knowledge, and domain-specific automotive engineering skills",
      components: ["Logical Reasoning", "Physics & Mechanics", "CAD Basics", "Design Lifecycle"],
      color: "text-automotive-blue",
      bgColor: "bg-blue-50",
      progress: 0
    },
    {
      title: "WISCAR Framework",
      icon: Target,
      description: "Comprehensive analysis across Will, Interest, Skill, Cognitive readiness, Ability, and Real-world alignment",
      components: ["Will & Motivation", "Interest Alignment", "Skill Assessment", "Learning Ability"],
      color: "text-automotive-success",
      bgColor: "bg-green-50",
      progress: 0
    }
  ];

  const wiscarComponents = [
    { name: "Will", description: "Motivation consistency", score: 0 },
    { name: "Interest", description: "Career alignment", score: 0 },
    { name: "Skill", description: "Practical skill exposure", score: 0 },
    { name: "Cognitive", description: "Problem-solving readiness", score: 0 },
    { name: "Ability", description: "Metacognitive skills", score: 0 },
    { name: "Real-World", description: "Job requirement understanding", score: 0 }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Assessment Overview
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comprehensive Multi-Dimensional Evaluation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our assessment uses scientifically validated instruments to provide a 360-degree view 
            of your readiness for automotive design engineering.
          </p>
        </div>

        {/* Main Assessment Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/30 transition-all">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-full ${section.bgColor}`}>
                      <Icon className={`w-6 h-6 ${section.color}`} />
                    </div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    {section.description}
                  </p>
                  
                  <div className="space-y-3">
                    {section.components.map((component, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{component}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 flex justify-center">
                    <ProgressRing progress={section.progress} size={80} label="Progress" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* WISCAR Framework Detail */}
        <Card className="border-automotive-blue/20 bg-gradient-to-r from-automotive-blue/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl mb-4">
              WISCAR Framework Components
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Each component is scored independently and visualized in an interactive radar chart
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wiscarComponents.map((component, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <ProgressRing 
                      progress={component.score} 
                      size={100} 
                      className="mx-auto"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{component.name}</h4>
                  <p className="text-sm text-muted-foreground">{component.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Assessment Details */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-automotive-blue mb-2">25-30</div>
              <div className="text-sm text-muted-foreground">Minutes Duration</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-automotive-success mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Assessment Questions</div>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-automotive-orange mb-2">6</div>
              <div className="text-sm text-muted-foreground">Evaluation Dimensions</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};