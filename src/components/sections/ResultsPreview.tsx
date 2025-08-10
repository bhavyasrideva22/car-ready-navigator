import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ProgressRing } from '@/components/ui/progress-ring';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, AlertCircle, HelpCircle, TrendingUp, BookOpen, Users } from 'lucide-react';

export const ResultsPreview = () => {
  const navigate = useNavigate();
  const sampleScores = {
    psychometric: 78,
    technical: 65,
    overall: 72
  };

  const recommendations = [
    {
      type: "yes",
      icon: CheckCircle,
      color: "text-automotive-success",
      bgColor: "bg-green-50",
      title: "Ready to Start",
      description: "High alignment across all dimensions. Begin with intermediate courses.",
      nextSteps: ["Automotive Fundamentals", "CAD Software Training", "Join Formula SAE"]
    },
    {
      type: "maybe",
      icon: HelpCircle,
      color: "text-automotive-orange",
      bgColor: "bg-orange-50",
      title: "Needs Development",
      description: "Strong interest but requires skill building in key areas.",
      nextSteps: ["Foundation Math & Physics", "Basic CAD Training", "Industry Exposure"]
    },
    {
      type: "no",
      icon: AlertCircle,
      color: "text-red-500",
      bgColor: "bg-red-50",
      title: "Consider Alternatives",
      description: "Low alignment. Explore related fields or reassess interests.",
      nextSteps: ["Industrial Design", "Mechanical Engineering", "Product Development"]
    }
  ];

  const careerRoles = [
    { role: "Automotive Designer", match: 82, description: "Design complete vehicle systems" },
    { role: "CAD Engineer", match: 65, description: "3D modeling and technical drawings" },
    { role: "R&D Engineer", match: 78, description: "Innovation and new technology development" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Sample Results
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What You'll Receive
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive insights, personalized recommendations, and a clear roadmap 
            for your automotive design engineering journey.
          </p>
        </div>

        {/* Overall Score Dashboard */}
        <Card className="mb-16 border-2 border-automotive-blue/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Overall Readiness Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <ProgressRing 
                  progress={sampleScores.psychometric} 
                  size={120} 
                  label="Psychological Fit"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">Psychometric</h3>
                <p className="text-sm text-muted-foreground">Personality & Interest Alignment</p>
              </div>
              
              <div className="text-center">
                <ProgressRing 
                  progress={sampleScores.technical} 
                  size={120} 
                  label="Technical Skills"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">Technical</h3>
                <p className="text-sm text-muted-foreground">Aptitude & Domain Knowledge</p>
              </div>
              
              <div className="text-center">
                <ProgressRing 
                  progress={sampleScores.overall} 
                  size={120} 
                  label="Overall Confidence"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">Overall</h3>
                <p className="text-sm text-muted-foreground">Combined Assessment Score</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendation Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Personalized Recommendations</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <Card key={index} className="border-2 hover:shadow-automotive transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-full ${rec.bgColor}`}>
                        <Icon className={`w-6 h-6 ${rec.color}`} />
                      </div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 text-sm">
                      {rec.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Next Steps:</h4>
                      {rec.nextSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Career Matching */}
        <Card className="mb-16 border-automotive-success/20 bg-gradient-to-r from-automotive-success/5 to-primary/5">
          <CardHeader>
            <CardTitle className="text-center text-2xl mb-4">
              Career Role Matching
            </CardTitle>
            <p className="text-center text-muted-foreground">
              See how well you align with specific automotive design roles
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {careerRoles.map((role, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <ProgressRing 
                      progress={role.match} 
                      size={100} 
                      className="mx-auto"
                    />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{role.role}</h4>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center border-blue-200">
            <CardContent className="pt-6">
              <BookOpen className="w-12 h-12 text-automotive-blue mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Learning Path</h3>
              <p className="text-sm text-muted-foreground">
                Customized curriculum recommendations based on your assessment results
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-green-200">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 text-automotive-success mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Progress Tracking</h3>
              <p className="text-sm text-muted-foreground">
                Monitor your development and retake assessments to track improvement
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center border-orange-200">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-automotive-orange mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">Community Access</h3>
              <p className="text-sm text-muted-foreground">
                Connect with peers and professionals in automotive design engineering
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            onClick={() => navigate('/assessment')}
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-automotive text-lg px-8 py-6"
          >
            Start Your Assessment Now
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Get detailed insights and personalized recommendations in 25-30 minutes
          </p>
        </div>
      </div>
    </section>
  );
};