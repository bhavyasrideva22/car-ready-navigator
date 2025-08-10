import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Car, Users, Lightbulb, Target, Award, TrendingUp } from 'lucide-react';

export const IntroductionSection = () => {
  const careers = [
    { title: "Automotive Design Engineer", icon: Car },
    { title: "CAD Design Engineer", icon: Target },
    { title: "Product Development Engineer", icon: Lightbulb },
    { title: "Vehicle Integration Engineer", icon: Users },
    { title: "Transportation Designer", icon: TrendingUp }
  ];

  const traits = [
    "Strong mechanical and spatial reasoning",
    "Passion for cars and future mobility",
    "Analytical and creative thinking blend",
    "High attention to detail",
    "Team collaboration and communication",
    "Resilience under iterative design cycles"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Test Introduction
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Understanding Automotive Design Engineering
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover if you have the right blend of technical skills, creative thinking, and passion 
            needed to excel in automotive design engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* What is Automotive Design Engineering */}
          <Card className="border-automotive-silver">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Car className="w-6 h-6 text-automotive-blue" />
                What Is Automotive Design Engineering?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Automotive Design Engineering involves the integration of mechanical, aesthetic, and 
                technological aspects to develop functional and visually appealing vehicles. It blends 
                mechanical engineering, ergonomics, CAD tools, and material science with design thinking.
              </p>
            </CardContent>
          </Card>

          {/* Purpose */}
          <Card className="border-automotive-silver">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-automotive-success" />
                Purpose of This Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To determine whether you are cognitively, technically, and motivationally aligned with 
                the career path of Automotive Design Engineering, and if you are ready to begin learning 
                and progressing toward this field.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Career Paths */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Typical Career Paths</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {careers.map((career, index) => {
              const Icon = career.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-automotive transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground">{career.title}</h4>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Traits */}
        <Card className="border-automotive-blue/20 bg-gradient-to-r from-primary/5 to-automotive-blue/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 justify-center">
              <Award className="w-6 h-6 text-automotive-orange" />
              Traits of Successful Professionals
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-automotive-success rounded-full"></div>
                  <span className="text-muted-foreground">{trait}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};