import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Activity, Cpu } from 'lucide-react';
import { Section, Container, Badge } from '../ui/Layout';

const Navbar = () => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-navy-900/70 border-b border-white/5 h-16 md:h-20 flex items-center transition-all duration-300"
  >
    <Container className="w-full flex justify-between items-center px-4 md:px-0">
      <div className="flex items-center gap-3">
        <img 
          src="https://storage.googleapis.com/msgsndr/1Iy8SCOEyLe3gY5SIyaF/media/6939d317b263279df8a31258.png" 
          alt="Everence Wealth" 
          className="h-8 md:h-10 w-auto" 
        />
      </div>
    </Container>
  </motion.nav>
);

export const Hero = () => {
  return (
    <>
      <Navbar />
      <Section className="min-h-screen flex items-center pt-24 md:pt-32 pb-10 relative overflow-hidden">
        {/* Deep Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[300px] md:w-[1000px] h-[300px] md:h-[1000px] bg-brand-gold/5 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[250px] md:w-[800px] h-[250px] md:h-[800px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[150px] mix-blend-screen" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <Container className="grid lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge>Everence Wealth AOF v1.0</Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] md:leading-[0.95] mb-6 md:mb-8 tracking-tight text-white">
                The <br />
                <span className="relative inline-block pr-4">
                  <span className="relative z-10">Autonomous</span>
                  {/* Slash Animation */}
                  <svg className="absolute w-[110%] h-[20px] md:h-[40px] -bottom-1 md:-bottom-2 -left-2 overflow-visible z-0 pointer-events-none" viewBox="0 0 200 40" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="slash-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                    </defs>
                    <motion.path
                      d="M5,30 Q100,5 195,25" 
                      fill="transparent"
                      stroke="url(#slash-gradient)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.6, ease: "circOut" }}
                    />
                  </svg>
                </span>
                <br />
                Agency.
              </h1>
              <p className="text-lg md:text-2xl text-gray-400 max-w-xl font-light leading-relaxed">
                Legacy agencies hire to grow. <span className="text-white font-medium border-b border-brand-green/30 pb-0.5">You build systems.</span>
                <br />
                <span className="text-base md:text-lg text-gray-500 mt-2 block">Replace the grind with intelligent pipelines, automated recruiting, and 24/7 AI operations.</span>
              </p>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3 text-brand-gold/80 font-mono text-xs md:text-sm tracking-widest uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span>Explore The System Below</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 animate-pulse" />
            </motion.div>

            <motion.div 
              className="pt-6 md:pt-8 border-t border-white/5 flex flex-wrap gap-x-6 gap-y-3 text-xs md:text-sm text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                 Zero Missed Leads
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
                 60s AI Response
              </div>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                 Scalable Recruiting
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-[300px] md:h-[600px] hidden lg:block perspective-1000">
            <motion.div
               initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
               animate={{ opacity: 1, scale: 1, rotateY: 0 }}
               transition={{ duration: 1.2, ease: "easeOut" }}
               className="relative w-full h-full transform-style-3d flex items-center justify-center"
            >
               {/* Abstract AI Core Visual */}
               <div className="relative">
                  {/* Orbiting Rings */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[550px] h-[300px] md:h-[550px] border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] md:w-[450px] h-[240px] md:h-[450px] border border-dashed border-brand-gold/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
                  
                  {/* Central Node */}
                  <div className="relative w-24 h-24 md:w-40 md:h-40 bg-gradient-to-b from-navy-800 to-black rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] flex items-center justify-center z-20 backdrop-blur-md group">
                    <div className="absolute inset-0 bg-brand-green/10 blur-2xl group-hover:bg-brand-green/20 transition-all duration-700" />
                    <Cpu className="w-10 h-10 md:w-16 md:h-16 text-white/90 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                    
                    {/* Status Dot */}
                    <div className="absolute top-2 right-2 md:top-3 md:right-3 w-1.5 h-1.5 md:w-2 md:h-2 bg-brand-green rounded-full animate-pulse shadow-[0_0_10px_#10B981]" />
                  </div>

                  {/* Satellite Nodes (Floating) */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-8 right-0 bg-navy-800/90 backdrop-blur border border-brand-gold/20 p-3 md:p-4 rounded-xl shadow-2xl z-30"
                  >
                    <div className="flex items-center gap-3">
                       <div className="p-1.5 md:p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
                          <Activity className="w-4 h-4 md:w-5 md:h-5" />
                       </div>
                       <div>
                          <div className="text-[8px] md:text-[10px] text-gray-400 uppercase tracking-widest">System Health</div>
                          <div className="text-xs md:text-sm font-bold text-white">100% Operational</div>
                       </div>
                    </div>
                  </motion.div>
               </div>
            </motion.div>
          </div>
        </Container>
        
        <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
        </div>
      </Section>
    </>
  );
};