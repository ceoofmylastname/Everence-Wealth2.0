import React from 'react';
import { motion } from 'framer-motion';
import { 
  XCircle, CheckCircle, Users, Brain, 
  ChevronRight, Sparkles, Zap, 
  Database, Filter, Link
} from 'lucide-react';
import { Section, Container, GradientText, GlassCard, Badge } from '../ui/Layout';

// Problem vs Solution
export const ProblemSolution = () => {
  return (
    <Section className="bg-navy-900 py-16 md:py-32">
      <Container>
        <div className="grid md:grid-cols-2 gap-8 relative">
           {/* Center Divider/Arrow - Hidden on Mobile */}
           <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-16 h-16 bg-navy-800 border border-white/10 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)]">
             <ChevronRight className="text-brand-gold w-8 h-8" />
           </div>

           {/* Problem Side */}
           <GlassCard className="border-red-500/20 bg-gradient-to-b from-red-900/10 to-transparent">
             <div className="mb-6 md:mb-8">
                <Badge>Current State</Badge>
                <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 text-white">
                   Your Current <span className="text-red-400">Challenges</span>
                </h3>
             </div>
             <ul className="space-y-4 md:space-y-6">
               {[
                 "High Missed Call Rate",
                 "Slow Speed-to-Lead",
                 "Low Lead Conversion",
                 "Manual Recruiting",
                 "Inconsistent Follow-up",
                 "Significant Revenue Leakage"
               ].map((item, i) => (
                 <motion.li 
                   key={i}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="flex items-center gap-4 text-gray-400"
                 >
                   <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 shrink-0" />
                   <span className="text-base md:text-lg">{item}</span>
                 </motion.li>
               ))}
             </ul>
           </GlassCard>

           {/* Solution Side */}
           <GlassCard className="border-brand-green/30 bg-gradient-to-b from-brand-green/5 to-transparent relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />
             <div className="mb-6 md:mb-8 relative z-10">
                <Badge>Future State</Badge>
                <h3 className="text-2xl md:text-3xl font-display font-bold mt-2 text-white">
                   With <GradientText>Everence AOF</GradientText>
                </h3>
             </div>
             <ul className="space-y-4 md:space-y-6 relative z-10">
               {[
                 { text: "Zero missed opportunities", highlight: true },
                 { text: "60-second AI response", highlight: true },
                 { text: "8-10% target conversion", highlight: false },
                 { text: "10 agents recruited monthly", highlight: false },
                 { text: "90-day automated nurture", highlight: false },
                 { text: "$545K+ revenue potential", highlight: true }
               ].map((item, i) => (
                 <motion.li 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className={`flex items-center gap-4 ${item.highlight ? 'text-white font-semibold' : 'text-gray-200'}`}
                 >
                   <CheckCircle className={`w-5 h-5 md:w-6 md:h-6 ${item.highlight ? 'text-brand-green drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'text-brand-gold'}`} />
                   <span className="text-base md:text-lg">{item.text}</span>
                 </motion.li>
               ))}
             </ul>
           </GlassCard>
        </div>
      </Container>
    </Section>
  );
};

// Pipeline Grid System
export const PipelineArchitecture = () => {
  const pipelines = [
    {
      id: "A",
      category: "Growth",
      title: "Agent Recruiting",
      desc: "Capture, qualify, and convert agent prospects. 14 stages from lead capture through hot prospect nurture.",
      tags: ["AI Qual", "Routing"],
      status: "Active",
      color: "gold"
    },
    {
      id: "B",
      category: "Development",
      title: "Unlicensed Agent Licensing Journey",
      desc: "Guide unlicensed recruits through 2-month process. AI coaching, milestone tracking, and exam support.",
      tags: ["Study Buddy", "Retention"],
      status: "Active",
      color: "gold"
    },
    {
      id: "C",
      category: "Operations",
      title: "Licensed Agent Contracting",
      desc: "Streamline contracting. Automated E&O setup, carrier appointments, and compliance tracking.",
      tags: ["Fast-Track", "Compliance"],
      status: "Active",
      color: "green"
    },
    {
      id: "D",
      category: "Onboarding",
      title: "Agent Onboarding & Training",
      desc: "Structured first 30 days. Welcome sequences, training modules, role-play certification, and production goals.",
      tags: ["Ramp-Up", "Activity"],
      status: "Active",
      color: "green"
    },
    {
      id: "E",
      category: "Revenue",
      title: "Client Sales Pipeline",
      desc: "Convert prospects to policy sales. AI qualification, appointment booking, and application tracking.",
      tags: ["Sales AI", "Closing"],
      status: "High Volume",
      color: "green"
    },
    {
      id: "F",
      category: "Retention",
      title: "DBR & Long-Term Nurture",
      desc: "90-day re-engagement for cold leads. Periodic touchpoints and warm signal detection.",
      tags: ["Reactivation", "Safety Net"],
      status: "Auto-Pilot",
      color: "gold"
    },
    {
      id: "G",
      category: "Intelligence",
      title: "Conversion Tracking & Analytics",
      desc: "Real-time metrics. Lead source tracking, ROI attribution, pipeline velocity, and dashboard feeds.",
      tags: ["Attribution", "Data Feed"],
      status: "Live Data",
      color: "green"
    }
  ];

  return (
    <Section id="pipelines" className="bg-navy-950 relative overflow-hidden py-16 md:py-32">
        {/* Background Grid/Radar effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-navy-900 via-transparent to-navy-900 pointer-events-none" />

        <Container>
            <div className="grid lg:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-20 items-end">
                <div className="lg:col-span-8">
                    <Badge>The Everence Ecosystem</Badge>
                    <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6">
                        7 Core <GradientText>Pipelines</GradientText>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
                        Complete end-to-end automation. We track every prospect's exact position in real-time, enabling <span className="text-white font-semibold">surgical marketing precision</span>.
                    </p>
                </div>
                <div className="lg:col-span-4 flex justify-start lg:justify-end">
                     <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 backdrop-blur-md flex items-center gap-4 shadow-lg w-full md:w-auto">
                        <div className="relative shrink-0">
                            <span className="absolute top-0 right-0 w-2 h-2 bg-brand-green rounded-full animate-ping" />
                            <span className="relative block w-2 h-2 bg-brand-green rounded-full" />
                        </div>
                        <div className="text-sm">
                            <div className="text-white font-bold">System Status</div>
                            <div className="text-gray-400 text-xs font-mono">Tracking Active • 12ms Latency</div>
                        </div>
                     </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {pipelines.map((pipeline, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative h-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <GlassCard hoverEffect={false} className={`h-full border-t-2 relative overflow-hidden transition-all duration-300 group-hover:-translate-y-2 ${pipeline.color === 'gold' ? 'border-t-brand-gold/50' : 'border-t-brand-green/50'}`}>
                            
                            {/* Scanning Line Effect on Hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                            <div className="flex justify-between items-start mb-4 md:mb-6">
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${pipeline.color === 'gold' ? 'bg-brand-gold/10 border-brand-gold/20 text-brand-gold' : 'bg-brand-green/10 border-brand-green/20 text-brand-green'}`}>
                                    {pipeline.category}
                                </span>
                                <div className="flex items-center gap-2">
                                     <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${pipeline.color === 'gold' ? 'bg-brand-gold' : 'bg-brand-green'}`} />
                                     <span className="text-[10px] text-gray-500 font-mono">{pipeline.id}</span>
                                </div>
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-glow transition-all leading-tight">{pipeline.title}</h3>
                            <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                {pipeline.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                {pipeline.tags.map((tag, t) => (
                                    <span key={t} className="text-[10px] font-mono text-gray-500 bg-black/20 px-2 py-1 rounded border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}

                 {/* Summary / 80+ Workflows Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="relative h-full"
                >
                    <GlassCard className="h-full bg-gradient-to-br from-brand-gold/10 to-brand-green/10 border-brand-gold/20 flex flex-col justify-center items-center text-center group min-h-[200px]">
                         <div className="absolute inset-0 bg-white/5 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                         <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">80+</div>
                         <div className="text-sm font-bold text-brand-gold-light uppercase tracking-wide mb-2">Automated Workflows</div>
                         <p className="text-xs text-gray-300 px-4">Running 24/7 across all pipelines</p>
                    </GlassCard>
                </motion.div>
            </div>
        </Container>
    </Section>
  );
};

// Marcus AI Section
export const MarcusShowcase = () => {
  const modes = [
    { name: "Agent Recruiting Assistant", role: "Pre-qualify prospects, answer FAQs" },
    { name: "Client Lead Qualification", role: "Qualify needs, book consultations" },
    { name: "Missed Call Recovery", role: "Instant SMS, qualify intent" },
    { name: "Licensing Journey Coach", role: "Check-ins, study reminders, encouragement" },
    { name: "No-Show Recovery", role: "Immediate re-engagement & rescheduling" },
    { name: "DBR Nurture Re-Activation", role: "Detect renewed interest signals" },
    { name: "Internal Operations", role: "Team resource & information lookup" },
  ];

  return (
    <Section id="marcus" className="bg-navy-900 relative overflow-hidden py-16 md:py-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px]" />
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
      </div>

      <Container>
        <div className="text-center mb-12 md:mb-16 relative z-10">
          <Badge>The Intelligence Engine</Badge>
          <h2 className="text-3xl md:text-6xl font-display font-bold mb-4 md:mb-6 leading-tight">
            OpenAI <span className="text-brand-gold">Brain</span>. 
            GHL <span className="text-brand-green">Body</span>.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Marcus uses OpenAI to <strong>reason and interview</strong>, and GoHighLevel to <strong>execute and store</strong>.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start mb-16 md:mb-24 relative z-10">
           {/* Left: Capability Stack */}
           <div className="lg:col-span-5 space-y-4 md:space-y-6">
              <GlassCard className="relative overflow-hidden border-l-4 border-l-brand-gold">
                 <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Brain className="w-5 h-5 text-brand-gold" />
                    The Brain (OpenAI)
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    Context-aware conversations. Marcus asks specific, dynamic questions to uncover needs, just like a human consultant.
                 </p>
              </GlassCard>

              <GlassCard className="relative overflow-hidden border-l-4 border-l-brand-green">
                 <h3 className="text-lg md:text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Database className="w-5 h-5 text-brand-green" />
                    The Body (GHL)
                 </h3>
                 <p className="text-gray-400 text-sm leading-relaxed">
                    Action-oriented execution. Answers flow directly into CRM fields, triggering tailored workflows instantly.
                 </p>
              </GlassCard>

              <div className="pt-6">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" /> 7 Specialized Modes
                  </h4>
                  <div className="space-y-3">
                      {modes.map((mode, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                              <div>
                                  <span className="text-gray-200 font-medium block">{mode.name}</span>
                                  <span className="text-gray-500 text-xs">{mode.role}</span>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
           </div>

           {/* Right: Simulation */}
           <div className="lg:col-span-7 relative">
              <div className="bg-navy-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative z-10 h-full min-h-[400px] md:min-h-[500px]">
                 {/* Chat Header */}
                 <div className="bg-navy-950 p-3 md:p-4 border-b border-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center shadow-lg">
                          <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                       </div>
                       <div>
                          <div className="font-bold text-white text-xs md:text-sm">Marcus AI</div>
                          <div className="flex items-center gap-1.5 text-[10px] md:text-xs text-brand-green">
                             <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                             Online • Study Buddy Mode
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Chat Body */}
                 <div className="p-4 md:p-6 h-full relative font-mono text-xs md:text-sm bg-navy-900/50 flex flex-col pt-6 md:pt-10">
                    
                    {/* Message 1 */}
                    <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="mb-4 md:mb-6 flex gap-2 md:gap-3">
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 border border-brand-gold/30">
                          <Brain className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" />
                       </div>
                       <div className="bg-white/5 border border-white/10 p-2.5 md:p-3 rounded-2xl rounded-tl-none max-w-[85%] text-gray-300">
                          <p>Ready to crush that exam? Let's review. What is the key difference between <strong>Term</strong> and <strong>Whole Life</strong>?</p>
                       </div>
                    </motion.div>

                    {/* Message 2 */}
                    <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:1}} className="mb-4 md:mb-6 flex gap-2 md:gap-3 flex-row-reverse">
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                       </div>
                       <div className="bg-blue-600/20 border border-blue-500/20 p-2.5 md:p-3 rounded-2xl rounded-tr-none max-w-[85%] text-white">
                          <p>Term is temporary, like renting. Whole Life is permanent and builds cash value.</p>
                       </div>
                    </motion.div>

                    {/* Message 3 */}
                    <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:2.5}} className="mb-4 md:mb-6 flex gap-2 md:gap-3">
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 border border-brand-gold/30">
                          <Brain className="w-3 h-3 md:w-4 md:h-4 text-brand-gold" />
                       </div>
                       <div className="bg-white/5 border border-white/10 p-2.5 md:p-3 rounded-2xl rounded-tl-none max-w-[85%] text-gray-300">
                          <p>Spot on! 🎯 That's a point for you. Now, <span className="text-brand-green font-bold border-b border-brand-green/50">what date is your exam scheduled for?</span> I'll set up your countdown.</p>
                       </div>
                    </motion.div>

                     {/* Message 4 */}
                    <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:4.5}} className="flex gap-2 md:gap-3 flex-row-reverse">
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                          <Users className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
                       </div>
                       <div className="bg-blue-600/20 border border-blue-500/20 p-2.5 md:p-3 rounded-2xl rounded-tr-none max-w-[85%] text-white">
                          <p>It's on <span className="bg-brand-green/20 text-brand-green px-1 rounded font-bold">Dec 15th</span>.</p>
                       </div>
                    </motion.div>
                 </div>

                 {/* The "GHL Body" Action Panel Overlay */}
                 <motion.div 
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 5.5, type: "spring", damping: 20 }}
                    className="absolute bottom-0 left-0 right-0 bg-navy-800 border-t border-brand-green/30 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] z-20"
                 >
                    <div className="flex items-center justify-between mb-3">
                       <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-brand-green" />
                          <span className="text-sm font-bold text-white">GHL Contact Updated</span>
                       </div>
                       <div className="flex items-center gap-1.5 bg-brand-green/10 px-2 py-0.5 rounded text-[10px] font-bold text-brand-green border border-brand-green/20">
                          <Zap className="w-3 h-3" /> Automation Triggered
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="bg-navy-900 rounded p-2 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase">Custom Field</div>
                          <div className="text-xs md:text-sm text-brand-gold font-mono truncate">exam_date: 2025-12-15</div>
                       </div>
                       <div className="bg-navy-900 rounded p-2 border border-white/5">
                          <div className="text-[10px] text-gray-500 uppercase">Workflow</div>
                          <div className="text-xs md:text-sm text-white font-mono truncate">Add to: Exam Prep</div>
                       </div>
                    </div>
                 </motion.div>
              </div>
           </div>
        </div>
      </Container>
    </Section>
  );
};

// System Components: Funnels & Integrations
export const SystemComponents = () => {
  return (
    <Section className="py-12 md:py-20 bg-navy-950 border-t border-white/5">
        <Container>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 md:mb-6">4 Specialized Funnels</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {[
                            "Licensed Agent Recruiting",
                            "Unlicensed Agent Recruiting",
                            "Client Acquisition",
                            "Referral Partner Landing"
                        ].map((funnel, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-lg">
                                <Filter className="w-4 h-4 text-brand-gold" />
                                <span className="text-sm text-gray-300">{funnel}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4 md:mb-6">Integration Stack</h3>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {[
                            "E&O Providers", "State DOI", "AgentSync", "Checkr", 
                            "iPipeline", "QuickBooks", "Zapier", "Twilio"
                        ].map((integration, i) => (
                            <div key={i} className="flex items-center gap-2 bg-navy-800 border border-brand-green/20 px-3 py-1.5 rounded-full">
                                <Link className="w-3 h-3 text-brand-green" />
                                <span className="text-sm text-gray-300">{integration}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    </Section>
  );
};

// Simplified Workflow Visualization
export const WorkflowArchitecture = () => {
  const folders = [
    { id: "A", name: "Recruiting" },
    { id: "B", name: "Licensing" },
    { id: "C", name: "Contracting" },
    { id: "D", name: "Onboarding" },
    { id: "E", name: "Sales" },
    { id: "F", name: "Nurture" },
    { id: "G", name: "Tracking" },
    { id: "H", name: "Internal" },
  ];

  return (
    <Section className="py-12 md:py-20 border-t border-white/5">
      <Container>
        <SystemComponents />
        <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-white/5">
            <h3 className="text-center text-gray-500 text-xs md:text-sm mb-6 md:mb-8 uppercase tracking-widest">80+ Automations Organized by Folder Structure</h3>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 opacity-70 hover:opacity-100 transition-opacity duration-500">
            {folders.map((f) => (
                <div key={f.id} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-mono text-gray-400">
                <span className="text-brand-gold font-bold">{f.id}</span>
                <span>{f.name}</span>
                </div>
            ))}
            </div>
        </div>
      </Container>
    </Section>
  );
};