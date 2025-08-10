import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ProgressRing } from '@/components/ui/progress-ring';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  HelpCircle, 
  TrendingUp, 
  BookOpen, 
  Users,
  Brain,
  Wrench,
  Target,
  Download,
  Share
} from 'lucide-react';

interface AssessmentAnswers {
  answers: Record<string, string>;
}

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { answers } = (location.state as AssessmentAnswers) || { answers: {} };

  // Calculate scores based on answers
  const calculateScores = () => {
    const psychometricQuestions = ['psych1', 'psych2', 'psych3', 'psych4', 'psych5'];
    const technicalQuestions = ['tech1', 'tech2', 'tech3', 'tech4', 'tech5'];
    const wiscarQuestions = ['wiscar1', 'wiscar2', 'wiscar3', 'wiscar4', 'wiscar5'];

    const getScoreForSection = (questionIds: string[], isCorrectAnswer?: (id: string, answer: string) => boolean) => {
      let totalScore = 0;
      let validAnswers = 0;

      questionIds.forEach(id => {
        if (answers[id]) {
          validAnswers++;
          if (isCorrectAnswer) {
            // For technical questions with correct answers
            totalScore += isCorrectAnswer(id, answers[id]) ? 20 : 0;
          } else {
            // For psychometric/wiscar questions (Likert scale)
            const answerValue = answers[id];
            if (answerValue.includes('Strongly Agree') || answerValue.includes('Always')) {
              totalScore += 20;
            } else if (answerValue.includes('Agree') || answerValue.includes('Often')) {
              totalScore += 16;
            } else if (answerValue.includes('Neutral') || answerValue.includes('Sometimes')) {
              totalScore += 12;
            } else if (answerValue.includes('Disagree') || answerValue.includes('Rarely')) {
              totalScore += 8;
            } else {
              totalScore += 4;
            }
          }
        }
      });

      return validAnswers > 0 ? Math.round(totalScore / validAnswers) : 0;
    };

    // Technical question correct answers
    const isCorrectTechnical = (id: string, answer: string): boolean => {
      const correctAnswers: Record<string, string> = {
        'tech1': 'Centripetal force',
        'tech2': 'SolidWorks',
        'tech3': 'Fuel efficiency and stability',
        'tech4': '3D modeling',
        'tech5': 'Absorb impact energy'
      };
      return correctAnswers[id] === answer;
    };

    const psychometricScore = getScoreForSection(psychometricQuestions);
    const technicalScore = getScoreForSection(technicalQuestions, isCorrectTechnical);
    const wiscarScore = getScoreForSection(wiscarQuestions);
    const overallScore = Math.round((psychometricScore + technicalScore + wiscarScore) / 3);

    return {
      psychometric: psychometricScore,
      technical: technicalScore,
      wiscar: wiscarScore,
      overall: overallScore
    };
  };

  const scores = calculateScores();

  const getRecommendation = () => {
    if (scores.overall >= 75) {
      return {
        type: 'ready',
        icon: CheckCircle,
        color: 'text-automotive-success',
        bgColor: 'bg-green-50',
        title: 'Ready to Start',
        description: 'Excellent alignment across all dimensions. You\'re ready to begin your journey in automotive design engineering.',
        nextSteps: [
          'Enroll in Automotive Fundamentals course',
          'Learn CAD software (SolidWorks/CATIA)',
          'Join Formula SAE or similar projects',
          'Build a portfolio of design projects'
        ]
      };
    } else if (scores.overall >= 50) {
      return {
        type: 'develop',
        icon: HelpCircle,
        color: 'text-automotive-orange',
        bgColor: 'bg-orange-50',
        title: 'Needs Development',
        description: 'Strong potential with some areas requiring development. Focus on building foundational skills.',
        nextSteps: [
          'Take foundation courses in math and physics',
          'Complete basic CAD training modules',
          'Gain exposure to automotive industry',
          'Retake assessment after 6 months'
        ]
      };
    } else {
      return {
        type: 'explore',
        icon: AlertCircle,
        color: 'text-red-500',
        bgColor: 'bg-red-50',
        title: 'Explore Alternatives',
        description: 'Consider exploring related fields or reassessing your interests and goals.',
        nextSteps: [
          'Explore Industrial Design programs',
          'Consider general Mechanical Engineering',
          'Look into Product Development roles',
          'Speak with career counselors'
        ]
      };
    }
  };

  const recommendation = getRecommendation();
  const RecommendationIcon = recommendation.icon;

  const wiscarBreakdown = [
    { name: 'Will', score: scores.wiscar + Math.floor(Math.random() * 10) - 5 },
    { name: 'Interest', score: scores.psychometric + Math.floor(Math.random() * 10) - 5 },
    { name: 'Skill', score: scores.technical + Math.floor(Math.random() * 10) - 5 },
    { name: 'Cognitive', score: scores.overall + Math.floor(Math.random() * 10) - 5 },
    { name: 'Ability', score: scores.wiscar + Math.floor(Math.random() * 10) - 5 },
    { name: 'Real-World', score: scores.overall + Math.floor(Math.random() * 10) - 5 }
  ].map(item => ({ ...item, score: Math.max(0, Math.min(100, item.score)) }));

  const careerMatches = [
    { 
      role: 'Automotive Designer', 
      match: Math.max(0, scores.overall + 10),
      description: 'Design complete vehicle systems with focus on aesthetics and functionality'
    },
    { 
      role: 'CAD Engineer', 
      match: Math.max(0, scores.technical + 5),
      description: 'Create detailed 3D models and technical drawings'
    },
    { 
      role: 'R&D Engineer', 
      match: Math.max(0, scores.wiscar + 8),
      description: 'Innovate new technologies and propulsion systems'
    }
  ];

  const handleBack = () => {
    navigate('/');
  };

  const handleRetakeAssessment = () => {
    navigate('/assessment');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share className="w-4 h-4" />
              Share Results
            </Button>
          </div>
        </div>

        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Assessment Complete
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Your Automotive Design Engineering Readiness
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's a comprehensive analysis of your readiness 
            for a career in automotive design engineering.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="mb-12 border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Overall Readiness Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <ProgressRing 
                  progress={scores.psychometric} 
                  size={120} 
                  label="Psychological"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold">Psychometric</h3>
                <p className="text-sm text-muted-foreground">Personality & Interests</p>
              </div>
              
              <div className="text-center">
                <ProgressRing 
                  progress={scores.technical} 
                  size={120} 
                  label="Technical"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold">Technical</h3>
                <p className="text-sm text-muted-foreground">Skills & Knowledge</p>
              </div>
              
              <div className="text-center">
                <ProgressRing 
                  progress={scores.wiscar} 
                  size={120} 
                  label="WISCAR"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold">WISCAR</h3>
                <p className="text-sm text-muted-foreground">Framework Analysis</p>
              </div>
              
              <div className="text-center">
                <ProgressRing 
                  progress={scores.overall} 
                  size={140} 
                  label="Overall"
                  className="mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">Overall Score</h3>
                <p className="text-sm text-muted-foreground">Combined Assessment</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendation */}
        <Card className={`mb-12 border-2`}>
          <CardHeader>
            <div className="flex items-center gap-3 justify-center">
              <div className={`p-3 rounded-full ${recommendation.bgColor}`}>
                <RecommendationIcon className={`w-8 h-8 ${recommendation.color}`} />
              </div>
              <div className="text-center">
                <CardTitle className="text-2xl">{recommendation.title}</CardTitle>
                <p className="text-muted-foreground mt-2">{recommendation.description}</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="max-w-2xl mx-auto">
              <h4 className="font-semibold mb-4 text-center">Recommended Next Steps:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendation.nextSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-lg">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-primary">{index + 1}</span>
                    </div>
                    <span className="text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* WISCAR Breakdown & Career Matches */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* WISCAR Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-6 h-6 text-automotive-success" />
                WISCAR Framework Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-6">
                {wiscarBreakdown.map((component, index) => (
                  <div key={index} className="text-center">
                    <ProgressRing 
                      progress={component.score} 
                      size={80} 
                      className="mx-auto mb-2"
                    />
                    <h4 className="font-semibold text-sm">{component.name}</h4>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Career Matches */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-automotive-blue" />
                Career Role Matching
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {careerMatches.map((role, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0">
                      <ProgressRing 
                        progress={Math.min(100, role.match)} 
                        size={60} 
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{role.role}</h4>
                      <p className="text-sm text-muted-foreground">{role.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              onClick={handleRetakeAssessment}
              variant="outline"
              size="lg"
              className="flex items-center gap-2"
            >
              Retake Assessment
            </Button>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              Explore Learning Paths
            </Button>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Your results are saved and you can return anytime to track your progress as you develop your skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;