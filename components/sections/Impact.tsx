import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Calculator, ArrowUpRight, Clock, Zap } from 'lucide-react';
import { Section, Container, GradientText, GlassCard, Badge } from '../ui/Layout';

// Animated Counter Component with Scroll Trigger
const Counter = ({ from, to, duration = 2.5 }: { from: number; to: number; duration?: number }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());
  
  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, from, to, duration, count]);

  return <motion.span ref={nodeRef}>{rounded}</motion.span>;
};

export const RevenueMetrics = () => {
  return (
    <Section id="impact" className="bg-navy-900 relative overflow-hidden py-16 md:py-32">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      
      <Container>
        <div className="text-center mb-12 md:mb-20 relative z-10">
          <Badge>Outcomes Snapshot</Badge>
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">Financial <GradientText>Impact</GradientText></h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Conservative first-year projections based on implementing the Everence Wealth AOF Blueprint.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 relative z-10">
          {/* Card 1: Missed Leads */}
          <GlassCard className="text-center relative group border-t-4 border-t-brand-green hover:bg-brand-green/5 transition-colors duration-500">
            <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-center mb-4">
               <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green">
                 <Zap className="w-5 h-5 md:w-6 md:h-6" />
               </div>
            </div>
            <div className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wide mb-2">Missed Lead Recovery</div>
            <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-4 flex items-center justify-center gap-2">
              $<Counter from={0} to={45000} />
              <span className="text-xs md:text-sm text-gray-500 font-normal">/yr</span>
            </div>
            <div className="text-[10px] md:text-xs text-gray-400 bg-white/5 p-2 md:p-3 rounded-lg mx-auto inline-block border border-white/5">
               50 leads/mo × 5% recover
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-6 leading-relaxed">
              Recapturing lost opportunities through instant AI response and automated follow-up sequences.
            </p>
          </GlassCard>

          {/* Card 2: Conversion (Hero Card) */}
          <GlassCard className="text-center relative group border-t-4 border-t-brand-gold shadow-[0_0_40px_rgba(212,175,55,0.1)] transform md:-translate-y-6 z-20">
            <div className="absolute inset-0 bg-brand-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-4 right-4 text-brand-gold animate-pulse">
              <ArrowUpRight className="w-6 h-6" />
            </div>
            <div className="flex justify-center mb-4">
               <div className="p-4 bg-brand-gold/10 rounded-xl text-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                 <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />
               </div>
            </div>
            <div className="text-xs md:text-sm font-bold text-brand-gold uppercase tracking-wide mb-2">Conversion Improvement</div>
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-4 text-glow flex items-center justify-center gap-2">
              $<Counter from={0} to={450000} />
              <span className="text-base md:text-lg text-gray-500 font-normal">/yr</span>
            </div>
             <div className="text-[10px] md:text-xs text-gray-400 bg-white/5 p-2 md:p-3 rounded-lg mx-auto inline-block border border-white/5">
               3% → 8% Conv on 500 leads
            </div>
            <p className="text-gray-300 text-sm mt-4 md:mt-6 leading-relaxed px-4">
              Systematic nurturing and pipeline management drives massive revenue uplift from existing traffic.
            </p>
          </GlassCard>

          {/* Card 3: Recruiting */}
          <GlassCard className="text-center relative group border-t-4 border-t-brand-green hover:bg-brand-green/5 transition-colors duration-500">
            <div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex justify-center mb-4">
               <div className="p-3 bg-brand-green/10 rounded-xl text-brand-green">
                 <Users className="w-5 h-5 md:w-6 md:h-6" />
               </div>
            </div>
            <div className="text-xs md:text-sm font-bold text-brand-green uppercase tracking-wide mb-2">Agent Recruiting Value</div>
            <div className="text-3xl md:text-4xl font-mono font-bold text-white mb-2 flex items-center justify-center gap-2">
              $<Counter from={0} to={50000} />
              <span className="text-xs md:text-sm text-gray-500 font-normal">/yr</span>
            </div>
            <div className="text-xs font-mono text-brand-gold-light mb-4 flex items-center justify-center gap-1">
               <span className="text-gray-500">3-Year Value:</span>
               <span className="font-bold text-brand-gold">$150,000+</span>
            </div>
             <div className="text-[10px] md:text-xs text-gray-400 bg-white/5 p-2 md:p-3 rounded-lg mx-auto inline-block border border-white/5">
               10 agents/mo × Residuals
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-6 leading-relaxed">
              Automated pipelines generating consistent agent flow. Compounding residual value over time.
            </p>
          </GlassCard>
        </div>

        {/* Total Impact Banner */}
        <div className="max-w-5xl mx-auto relative z-10">
           <div className="absolute inset-0 bg-gradient-to-r from-brand-gold via-brand-green to-brand-gold blur-[80px] opacity-20" />
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative p-6 md:p-12 rounded-3xl bg-navy-800/80 border border-white/10 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 text-center lg:text-left shadow-2xl"
           >
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Total First-Year Revenue Impact</h3>
                <div className="flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm text-gray-300 justify-center lg:justify-start">
                  <span className="flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-full text-brand-green border border-brand-green/20">
                    <TrendingUp className="w-3 h-3 md:w-4 md:h-4" /> 10.9x ROI
                  </span>
                  <span className="flex items-center gap-2 bg-brand-gold/10 px-3 py-1.5 rounded-full text-brand-gold border border-brand-gold/20">
                    <DollarSign className="w-3 h-3 md:w-4 md:h-4" /> 1.1 Month Payback
                  </span>
                  <span className="flex items-center gap-2 bg-brand-green/10 px-3 py-1.5 rounded-full text-brand-green border border-brand-green/20">
                    <Clock className="w-3 h-3 md:w-4 md:h-4" /> 60-80 hrs/mo Saved
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-6 w-full lg:w-auto justify-center lg:justify-end">
                 <div className="hidden lg:block h-16 w-px bg-white/10" />
                 <div>
                    <div className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest mb-2 text-center lg:text-right">Conservative Projection</div>
                    <div className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-green to-brand-gold drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">
                      $<Counter from={0} to={545000} />+
                    </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export const ROICalculator = () => {
  const [leads, setLeads] = useState(500);
  const [currentConv, setCurrentConv] = useState(3);
  const [targetConv, setTargetConv] = useState(8);
  const [dealValue, setDealValue] = useState(1500); 

  const currentRevenue = leads * (currentConv / 100) * dealValue * 12;
  const projectedRevenue = leads * (targetConv / 100) * dealValue * 12;
  const increase = projectedRevenue - currentRevenue;

  return (
    <Section className="bg-navy-950 border-t border-white/5 py-16 md:py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <Badge>Interactive Calculator</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 md:mb-6">Calculate Your <GradientText>Potential</GradientText></h2>
            <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg">See how the Everence Wealth system impacts your specific agency numbers based on conversion improvements.</p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="bg-navy-900/50 p-4 md:p-6 rounded-xl border border-white/5">
                <div className="flex justify-between text-sm mb-4">
                  <span className="font-semibold text-gray-300">Monthly Leads</span>
                  <span className="font-mono text-brand-gold bg-brand-gold/10 px-2 py-1 rounded">{leads}</span>
                </div>
                <input 
                  type="range" min="100" max="2000" step="50" value={leads} 
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-brand-gold"
                />
              </div>
              
              <div className="bg-navy-900/50 p-4 md:p-6 rounded-xl border border-white/5">
                <div className="flex justify-between text-sm mb-4">
                  <span className="font-semibold text-gray-300">Current Conversion Rate</span>
                  <span className="font-mono text-red-400 bg-red-400/10 px-2 py-1 rounded">{currentConv}%</span>
                </div>
                <input 
                  type="range" min="1" max="10" step="0.5" value={currentConv} 
                  onChange={(e) => setCurrentConv(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-red-500"
                />
              </div>

              <div className="bg-navy-900/50 p-4 md:p-6 rounded-xl border border-white/5">
                <div className="flex justify-between text-sm mb-4">
                  <span className="font-semibold text-gray-300">Target Conversion Rate</span>
                  <span className="font-mono text-brand-green bg-brand-green/10 px-2 py-1 rounded">{targetConv}%</span>
                </div>
                <input 
                  type="range" min="5" max="20" step="0.5" value={targetConv} 
                  onChange={(e) => setTargetConv(Number(e.target.value))}
                  className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-brand-green"
                />
              </div>
            </div>
          </div>

          <GlassCard className="bg-gradient-to-br from-navy-800 to-navy-900 border-brand-gold/20 shadow-2xl relative overflow-hidden mt-8 md:mt-0">
            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[60px] translate-x-1/2 -translate-y-1/2" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 md:mb-8 border-b border-white/10 pb-4 md:pb-6">
                <div className="p-3 bg-brand-green/10 rounded-lg">
                  <Calculator className="w-5 h-5 md:w-6 md:h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white">Annual Projection</h3>
                  <div className="text-xs text-gray-400">Based on your inputs</div>
                </div>
              </div>
              
              <div className="space-y-6 md:space-y-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="p-3 md:p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-gray-400 text-xs mb-1">Current Path</div>
                    <div className="text-lg md:text-xl font-mono text-gray-300">${Math.round(currentRevenue).toLocaleString()}</div>
                  </div>
                  <div className="p-3 md:p-4 rounded-xl bg-brand-gold/10 border border-brand-gold/20">
                    <div className="text-brand-gold-light text-xs mb-1">With Everence AOF</div>
                    <div className="text-lg md:text-xl font-mono text-white font-bold">${Math.round(projectedRevenue).toLocaleString()}</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/5 text-center">
                   <div className="text-xs md:text-sm text-gray-400 mb-3 uppercase tracking-widest">Additional Annual Revenue</div>
                   <div className="text-4xl md:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-gold">
                     +${Math.round(increase).toLocaleString()}
                   </div>
                </div>
                
                <div className="mt-8 text-center border-t border-white/5 pt-4">
                  <span className="text-brand-gold font-bold uppercase tracking-wider text-xs">
                    Contact our team to lock in this growth
                  </span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </Section>
  );
};