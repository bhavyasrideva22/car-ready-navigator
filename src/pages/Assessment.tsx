import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Brain, Wrench, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: string;
  text: string;
  options: string[];
  section: 'psychometric' | 'technical' | 'wiscar';
}

const questions: Question[] = [
  // Psychometric Questions
  {
    id: 'psych1',
    text: 'I often imagine how cars could be designed better.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'psychometric'
  },
  {
    id: 'psych2',
    text: 'I enjoy solving structured engineering problems.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'psychometric'
  },
  {
    id: 'psych3',
    text: 'I prefer working with clear constraints and guidelines.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'psychometric'
  },
  {
    id: 'psych4',
    text: 'I stay committed to tasks even when they become challenging or boring.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'psychometric'
  },
  {
    id: 'psych5',
    text: 'I am naturally curious about how mechanical systems work.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'psychometric'
  },

  // Technical Questions
  {
    id: 'tech1',
    text: 'What is the primary force acting on a car when it turns around a corner?',
    options: ['Gravitational force', 'Centripetal force', 'Friction force', 'Normal force'],
    section: 'technical'
  },
  {
    id: 'tech2',
    text: 'Which CAD software is most commonly used in automotive design?',
    options: ['AutoCAD', 'SolidWorks', 'SketchUp', 'Blender'],
    section: 'technical'
  },
  {
    id: 'tech3',
    text: 'What does aerodynamics primarily affect in vehicle design?',
    options: ['Interior comfort', 'Fuel efficiency and stability', 'Engine power', 'Brake performance'],
    section: 'technical'
  },
  {
    id: 'tech4',
    text: 'In the automotive design process, what comes after concept sketching?',
    options: ['Manufacturing', '3D modeling', 'Market research', 'Testing'],
    section: 'technical'
  },
  {
    id: 'tech5',
    text: 'What is the main purpose of a crumple zone in vehicle design?',
    options: ['Reduce weight', 'Improve aerodynamics', 'Absorb impact energy', 'Enhance aesthetics'],
    section: 'technical'
  },

  // WISCAR Questions
  {
    id: 'wiscar1',
    text: 'I complete tasks even when they take longer than expected.',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    section: 'wiscar'
  },
  {
    id: 'wiscar2',
    text: 'I enjoy designing and building mechanical objects.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'wiscar'
  },
  {
    id: 'wiscar3',
    text: 'I can identify basic tools used in automotive manufacturing.',
    options: ['Not at all', 'Somewhat', 'Moderately', 'Well', 'Very well'],
    section: 'wiscar'
  },
  {
    id: 'wiscar4',
    text: 'When I encounter a complex problem, I break it down into smaller parts.',
    options: ['Never', 'Rarely', 'Sometimes', 'Often', 'Always'],
    section: 'wiscar'
  },
  {
    id: 'wiscar5',
    text: 'Mistakes help me learn better than getting things right the first time.',
    options: ['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree'],
    section: 'wiscar'
  }
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const getSectionIcon = (section: string) => {
    switch (section) {
      case 'psychometric': return Brain;
      case 'technical': return Wrench;
      case 'wiscar': return Target;
      default: return Brain;
    }
  };

  const getSectionColor = (section: string) => {
    switch (section) {
      case 'psychometric': return 'text-purple-500';
      case 'technical': return 'text-automotive-blue';
      case 'wiscar': return 'text-automotive-success';
      default: return 'text-primary';
    }
  };

  const getSectionName = (section: string) => {
    switch (section) {
      case 'psychometric': return 'Psychometric Analysis';
      case 'technical': return 'Technical Evaluation';
      case 'wiscar': return 'WISCAR Framework';
      default: return 'Assessment';
    }
  };

  const handleNext = () => {
    if (currentAnswer) {
      setAnswers(prev => ({
        ...prev,
        [question.id]: currentAnswer
      }));

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setCurrentAnswer('');
      } else {
        // Navigate to results page with answers
        navigate('/results', { state: { answers } });
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setCurrentAnswer(answers[questions[currentQuestion - 1].id] || '');
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  React.useEffect(() => {
    setCurrentAnswer(answers[question.id] || '');
  }, [currentQuestion, answers, question.id]);

  const Icon = getSectionIcon(question.section);

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
          
          <Badge variant="outline" className="px-4 py-2">
            Question {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Assessment Progress</span>
            <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="max-w-3xl mx-auto border-2">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Icon className={`w-6 h-6 ${getSectionColor(question.section)}`} />
              </div>
              <div>
                <Badge variant="secondary" className="mb-2">
                  {getSectionName(question.section)}
                </Badge>
                <CardTitle className="text-xl">{question.text}</CardTitle>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
              <div className="space-y-4">
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <RadioGroupItem 
                      value={option} 
                      id={`option-${index}`}
                      className="mt-0.5"
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-base cursor-pointer flex-1 py-3 px-4 rounded-lg hover:bg-secondary/50 transition-colors"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="text-sm text-muted-foreground">
                {currentQuestion + 1} / {questions.length}
              </div>

              <Button
                onClick={handleNext}
                disabled={!currentAnswer}
                className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-glow"
              >
                {currentQuestion === questions.length - 1 ? 'Finish Assessment' : 'Next'}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Section Progress Indicators */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            {['psychometric', 'technical', 'wiscar'].map((section, index) => {
              const sectionQuestions = questions.filter(q => q.section === section);
              const answeredCount = sectionQuestions.filter(q => answers[q.id]).length;
              const sectionProgress = (answeredCount / sectionQuestions.length) * 100;
              const SectionIcon = getSectionIcon(section);
              
              return (
                <Card key={section} className="p-4">
                  <div className="flex items-center justify-center mb-2">
                    <SectionIcon className={`w-5 h-5 ${getSectionColor(section)}`} />
                  </div>
                  <div className="text-sm font-medium mb-1">
                    {getSectionName(section)}
                  </div>
                  <div className="text-xs text-muted-foreground mb-2">
                    {answeredCount}/{sectionQuestions.length} answered
                  </div>
                  <Progress value={sectionProgress} className="h-1" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;