import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IntroductionSection } from '@/components/sections/IntroductionSection';
import { AssessmentOverview } from '@/components/sections/AssessmentOverview';
import { ResultsPreview } from '@/components/sections/ResultsPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <AssessmentOverview />
        <ResultsPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
