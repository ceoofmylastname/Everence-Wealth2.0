import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Layout, Database, Settings, Calendar, Rocket } from 'lucide-react';
import { Section, Container, GradientText, Badge, GlassCard } from '../ui/Layout';

export const Pricing = () => {
  return (
    <Section id="pricing" className="bg-navy-900 relative overflow-hidden py-16 md:py-32">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-brand-gold/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-green/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

        <Container>
            <div className="text-center mb-12 md:mb-16 relative z-10">
                <Badge>Agora Exclusive Deal</Badge>
                <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">
                    Secure Your <GradientText>Legacy</GradientText>
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Complete Everence Wealth AOF System Implementation with exclusive event financing.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto relative z-20">
                
                {/* Option 1: Pay In Full (Best Value) */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="relative h-full rounded-3xl bg-gradient-to-b from-navy-800 to-navy-900 border border-brand-gold/30 overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.15)] group hover:scale-[1.02] transition-transform duration-300">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-gold via-brand-gold-light to-brand-gold" />
                         <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-gold/20 blur-[60px]" />

                         <div className="p-6 md:p-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-6">
                                <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-brand-gold text-navy-900 text-[10px] md:text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.5)] flex items-center gap-2">
                                    <Sparkles className="w-3 h-3" /> Most Popular
                                </span>
                            </div>

                            <div className="mb-8">
                                <div className="text-gray-500 text-base md:text-lg line-through font-mono decoration-red-500/50 decoration-2 mb-2">
                                    $28,075 Total Value
                                </div>
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight font-display text-glow">
                                        $18,248
                                    </h3>
                                </div>
                                <div className="mt-4 inline-block bg-brand-green/10 border border-brand-green/20 rounded-lg px-3 py-1 text-xs md:text-sm text-brand-green font-bold">
                                    Save $9,827 (35% Off)
                                </div>
                                <p className="text-gray-400 mt-4 md:mt-6 text-sm leading-relaxed">
                                    Immediate full access. Priority implementation queue. Best possible ROI from Day 1.
                                </p>
                            </div>

                            <div className="mt-auto space-y-4 md:space-y-6">
                                <div className="h-px bg-white/10" />
                                <ul className="space-y-3">
                                    {[
                                        "Everence Wealth Architecture",
                                        "35% Agora Exclusive Savings",
                                        "Priority Launch Status",
                                        "1-Year Optimization Audit"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-brand-gold" />
                                            </div>
                                            <span className="text-gray-300 text-sm font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="w-full text-center mt-6 py-3 rounded-lg bg-white/5 border border-white/5 text-brand-gold text-xs md:text-sm font-semibold uppercase tracking-wider">
                                    Speak with your advisor to secure this offer
                                </div>
                            </div>
                         </div>
                    </div>
                </motion.div>

                {/* Option 2: Flex Plan */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative h-full rounded-3xl bg-navy-900/40 border border-white/10 overflow-hidden shadow-xl hover:border-white/20 transition-colors duration-300 flex flex-col">
                         
                         <div className="p-6 md:p-10 flex flex-col h-full">
                            <div className="mb-6">
                                <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">
                                    Flex Payment Plan
                                </span>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-2 flex-wrap mb-1">
                                    <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight font-display">
                                        $5,000
                                    </h3>
                                    <span className="text-lg md:text-xl text-gray-400 font-medium">Initial Setup</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-300 font-mono text-xs md:text-sm">
                                    <span>+</span>
                                    <span className="text-white font-bold">$3,312</span>
                                    <span>/mo for 4 months</span>
                                </div>
                                <p className="text-gray-400 mt-4 md:mt-6 text-sm leading-relaxed">
                                    Start your transformation today with a lower capital commitment. Interest-free installment plan.
                                </p>
                            </div>

                            <div className="mt-auto space-y-4 md:space-y-6">
                                <div className="h-px bg-white/10" />
                                <ul className="space-y-3">
                                    {[
                                        "Everence Wealth Architecture",
                                        "Full System Access",
                                        "Standard Implementation Queue",
                                        "Pay Over 4 Months"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-gray-400" />
                                            </div>
                                            <span className="text-gray-400 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="w-full text-center mt-6 py-3 rounded-lg bg-white/5 border border-white/5 text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-wider">
                                    Speak with your advisor to start flex plan
                                </div>
                            </div>
                         </div>
                    </div>
                </motion.div>

            </div>

            {/* Note about SaaS */}
            <div className="text-center max-w-2xl mx-auto text-gray-500 text-xs md:text-sm mt-8 md:mt-12">
                <p>* Monthly software subscription (GHL/SaaS) sold separately based on team size. <br/> Starting at $997/mo for Essential Tier.</p>
            </div>
        </Container>
    </Section>
  );
};

export const Timeline = () => {
  const phases = [
    { 
      icon: <Layout className="w-5 h-5 text-brand-gold" />,
      name: "Intake & Strategy", 
      time: "Week 1", 
      desc: "Architecture session, branding alignment, and blueprint approval.",
      color: "gold"
    },
    { 
      icon: <Database className="w-5 h-5 text-brand-green" />,
      name: "Asset Development", 
      time: "Weeks 2-3", 
      desc: "Building funnels, copy assets, and configuring the core database.",
      color: "green"
    },
    { 
      icon: <Settings className="w-5 h-5 text-brand-gold-light" />,
      name: "Automation Build", 
      time: "Weeks 4-6", 
      desc: "Installing pipelines, 80+ workflows, and training Marcus AI.",
      color: "gold"
    },
    { 
      icon: <Calendar className="w-5 h-5 text-brand-green" />,
      name: "Integration & Test", 
      time: "Weeks 7-8", 
      desc: "Connecting carriers, calendars, and stress-testing all systems.",
      color: "green"
    },
    { 
      icon: <Rocket className="w-5 h-5 text-white" />,
      name: "Launch & Optimize", 
      time: "Weeks 9-10", 
      desc: "Live deployment, team training handover, and initial optimization.",
      color: "white"
    },
  ];

  return (
    <Section className="bg-navy-950 border-t border-white/5 relative overflow-hidden py-16 md:py-32">
       {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[400px] bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <Container>
         <div className="text-center mb-16 md:mb-24 relative z-10">
            <Badge>Accelerated Implementation</Badge>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 md:mb-6">
              Go Live in <GradientText>9-10 Weeks</GradientText>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              The Everence Wealth deployment process ensures you start generating ROI faster without cutting corners on quality.
            </p>
         </div>

         <div className="relative max-w-6xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-[3rem] left-0 w-full h-0.5 bg-white/10 hidden md:block rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 whileInView={{ width: "100%" }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5, ease: "easeInOut" }}
                 className="h-full bg-gradient-to-r from-brand-gold via-brand-green to-brand-gold shadow-[0_0_20px_rgba(212,175,55,0.8)]" 
               />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
              {phases.map((phase, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="group relative"
                >
                  {/* Node */}
                  <div className="hidden md:flex items-center justify-center w-24 h-24 mx-auto mb-8 relative">
                     {/* Outer Ring */}
                     <div className={`absolute inset-0 bg-navy-900 rounded-full border border-white/10 group-hover:border-${phase.color === 'white' ? 'white' : 'brand-' + phase.color}/50 transition-colors duration-500 z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]`} />
                     {/* Glow */}
                     <div className={`absolute inset-4 bg-${phase.color === 'white' ? 'white' : 'brand-' + phase.color} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />
                     {/* Inner Circle with Icon */}
                     <div className={`relative z-20 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-${phase.color === 'white' ? 'white' : 'brand-' + phase.color}`}>
                        {phase.icon}
                     </div>
                     {/* Step Number Badge */}
                     <div className={`absolute -top-1 -right-1 z-30 w-6 h-6 rounded-full bg-${phase.color === 'white' ? 'white' : 'brand-' + phase.color} flex items-center justify-center text-[10px] font-bold text-navy-900 shadow-lg border-2 border-navy-900`}>
                        {i + 1}
                     </div>
                  </div>

                  {/* Card content */}
                  <div className="h-full">
                    <GlassCard hoverEffect={true} className="p-4 md:p-6 text-center h-full border-t-0 border-b-4 border-b-transparent hover:border-b-brand-gold transition-all duration-300 bg-gradient-to-b from-white/5 to-transparent flex flex-col items-center">
                       {/* Mobile-only timeline marker */}
                       <div className="md:hidden flex items-center gap-3 mb-4 w-full">
                          <div className={`w-8 h-8 rounded-full bg-${phase.color === 'white' ? 'white' : 'brand-' + phase.color}/20 flex items-center justify-center text-${phase.color === 'white' ? 'white' : 'brand-' + phase.color} font-bold text-sm`}>
                            {i+1}
                          </div>
                          <div className={`text-xs font-bold text-${phase.color === 'white' ? 'white' : 'brand-' + phase.color} uppercase`}>Phase {i+1}</div>
                       </div>
                       
                       <div className={`inline-block px-3 py-1 rounded-full bg-${phase.color === 'white' ? 'white' : 'brand-' + phase.color}/10 text-xs font-mono text-${phase.color === 'white' ? 'white' : 'brand-' + phase.color} mb-4 border border-${phase.color === 'white' ? 'white' : 'brand-' + phase.color}/20 shadow-[0_0_10px_rgba(255,255,255,0.05)]`}>
                          {phase.time}
                       </div>
                       
                       <h4 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3 group-hover:text-brand-gold transition-colors">{phase.name}</h4>
                       
                       <p className="text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                          {phase.desc}
                       </p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
         </div>
      </Container>
    </Section>
  )
}