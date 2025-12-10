import React, { useEffect } from 'react';
import { Hero } from './components/sections/Hero';
import { ProblemSolution, PipelineArchitecture, MarcusShowcase, WorkflowArchitecture } from './components/sections/Features';
import { RevenueMetrics, ROICalculator } from './components/sections/Impact';
import { Pricing, Timeline } from './components/sections/Pricing';
import { Footer } from './components/sections/Footer';

function App() {
  // Smooth scroll behavior implementation
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="bg-navy-900 min-h-screen text-white selection:bg-electric-blue selection:text-white overflow-x-hidden">
      <Hero />
      <ProblemSolution />
      <RevenueMetrics />
      <PipelineArchitecture />
      <MarcusShowcase />
      <WorkflowArchitecture />
      <ROICalculator />
      <Pricing />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;