'use client';

import { motion, AnimatePresence } from 'framer-motion';
const MotionDiv = motion.div;
import { Briefcase, GraduationCap, Code2, LineChart, FileText, Plus } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
  };
  
  const [isExpOpen, setIsExpOpen] = useState(false);

  return (
    <MotionDiv
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-3xl mx-auto pt-32 pb-24 px-6 md:px-12"
    >
      <MotionDiv variants={item} className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The Engineering-to-Strategy Pipeline.</h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          I spent my early career understanding exactly how software is built. Now, I focus on <strong className="text-neutral-900 font-medium">what to build, why it matters, and how to take it to market.</strong>
        </p>
      </MotionDiv>

      {/* NARRATIVE SECTION */}
      <MotionDiv variants={item} className="mb-20 flex flex-col md:flex-row gap-12 items-start">
        <div className="flex-1 space-y-8 text-neutral-700 leading-relaxed text-lg">
          <p>
            As a Senior Web Developer architecting platforms like <strong>Enterprise Risk Solutions</strong> (an enterprise risk management tool for top-tier financial institutions), I realized something critical: the best code in the world is useless if it doesn't solve the right business problem. 
          </p>
          <p>
            I wasn't just writing localized code: I was constantly negotiating with Product Managers to cut scope creep, translating complex government compliance requirements into technical specs, and optimizing server loads by 30%. I was already doing product work from the engineering side.
          </p>
          <p>
            To formalize this transition, I pursued a Master in Management at <strong>ESCP Business School</strong> (specializing in Marketing & Technology) to master market strategy, pricing, and competitive benchmarking.
          </p>
          <p>
            Today, my technical background is my superpower. I don't need translation to talk to engineering teams, which means I can ship faster. I use that saved time to obsess over user research, A/B testing, and Go-to-Market strategy.
          </p>
        </div>
        <div className="w-full md:w-1/3 aspect-[3/4] relative rounded-2xl overflow-hidden shadow-lg border border-neutral-200 shrink-0">
          <Image
            src="/assets/Formal Hair.png"
            alt="Vinay - Formal Portrait"
            fill
            className="object-cover"
          />
        </div>
      </MotionDiv>

      {/* TIMELINE / EXPERIENCE */}
      <MotionDiv variants={item} className="mb-20">
        <button 
          onClick={() => setIsExpOpen(!isExpOpen)}
          className="w-full flex items-center justify-between group py-2"
        >
          <h2 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-neutral-400" />
            Experience
          </h2>
          <div className="bg-neutral-100 p-2 rounded-full group-hover:bg-neutral-200 transition-colors">
            <Plus className={`w-5 h-5 text-neutral-500 transition-transform duration-300 ${isExpOpen ? 'rotate-45' : ''}`} />
          </div>
        </button>
        
        <AnimatePresence initial={false}>
          {isExpOpen && (
            <MotionDiv
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-8 space-y-12 border-l border-neutral-200 ml-3 pl-8">
                {/* Role 1 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#FAFAFA] bg-neutral-900" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Assistant Product Manager</h3>
                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Feb '25 - May '25</span>
                  </div>
                  <p className="text-neutral-900 font-medium mb-4">TheBinaryTree</p>
                  <ul className="space-y-2 text-neutral-600 list-disc list-inside marker:text-neutral-300">
                    <li>Led GTM beta launch: defined user segments, messaging pillars, and rollout milestones.</li>
                    <li>Analyzed quantitative data from 50+ beta users, refining UI/UX to reduce onboarding drop by 20%.</li>
                    <li>Ran 12 user interviews; discovered critical friction points that directly shaped the product's core engine.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#FAFAFA] bg-neutral-300" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Senior Web Developer</h3>
                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Jul '23 - Sep '24</span>
                  </div>
                  <p className="text-neutral-900 font-medium mb-4">eSec Forte Technologies</p>
                  <ul className="space-y-2 text-neutral-600 list-disc list-inside marker:text-neutral-300">
                    <li>Core builder for an enterprise compliance platform for top-tier Indian financial institutions.</li>
                    <li>Refined requirements with PMs, cutting scope creep by 20% and accelerating release cycles.</li>
                    <li>Defined technical specs from user needs, demonstrating a deep understanding of core product functionality.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="relative">
                  <span className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#FAFAFA] bg-neutral-300" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-semibold text-neutral-900">Software Engineer</h3>
                    <span className="text-sm font-medium text-neutral-500 uppercase tracking-wider">Jul '21 - Jun '23</span>
                  </div>
                  <p className="text-neutral-900 font-medium mb-4">Compro Technologies</p>
                  <ul className="space-y-2 text-neutral-600 list-disc list-inside marker:text-neutral-300">
                    <li>Contributed to feature delivery on a 3M+ user college admissions platform across 4 release cycles.</li>
                    <li>Collaborated cross-functionally to align raw development with overarching product goals.</li>
                  </ul>
                </div>
              </div>
            </MotionDiv>
          )}
        </AnimatePresence>
      </MotionDiv>

      {/* CORE COMPETENCIES */}
      <MotionDiv variants={item}>
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <LineChart className="w-6 h-6 text-neutral-400" />
          Core Competencies
        </h2>
        <div className="flex flex-wrap gap-2">
          {['GTM Strategy', 'User Research', 'A/B Testing', 'Agile & PRDs', 'API Documentation', 'Data Analytics', 'Wireframing (Figma)', 'Market Analysis', 'Enterprise B2B', 'Jira / HubSpot'].map((skill) => (
            <span key={skill} className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm font-medium text-neutral-700">
              {skill}
            </span>
          ))}
        </div>
      </MotionDiv>

      {/* BEYOND THE SCREEN SECTION */}
      <MotionDiv variants={item} className="mt-32 pt-16 border-t border-neutral-200/60">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 mb-4">Beyond the Screen</h2>
            <p className="text-xl text-neutral-500 leading-relaxed">
              When I'm not shaping product strategy, I'm building communities, designing innovative solutions, and obsessing over narrative design.
            </p>
          </div>
          <div className="hidden md:block w-56 aspect-[4/5] relative rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-200 shrink-0 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/assets/Fun me.png"
              alt="Vinay - Off the clock"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* AWARDS COLUMN */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-8 border-b border-neutral-200 pb-4">Awards & Recognition</h3>
            {[
              {
                title: "Intern of the Year",
                org: "TheBinaryTree",
                desc: "Recognized for delivering innovative AI solutions and contributing to impactful R&D projects.",
                theme: "bg-white border-neutral-200/60"
              },
              {
                title: "2nd Place Winners",
                org: "Hack-GTBIT Hackathon",
                desc: "Secured 2nd place among 40+ teams from 10+ institutions by designing & pitching an innovative solution.",
                theme: "bg-slate-50/80 border-slate-300"
              },
              {
                title: "Gold Certificate",
                org: "Aashman Foundation",
                desc: "Awarded for driving massive social impact through targeted marketing campaigns and fundraising initiatives.",
                theme: "bg-yellow-50/80 border-yellow-300"
              }
            ].map((award, i) => (
              <div key={i} className={`group p-6 rounded-[1.5rem] border shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl transition-all ${award.theme}`}>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-neutral-900 text-lg">{award.title}</h4>
                  <span className="text-xs font-semibold px-2 py-1 bg-white/60 backdrop-blur-sm border border-neutral-200/50 text-neutral-600 rounded-full">{award.org}</span>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed transition-colors">{award.desc}</p>
              </div>
            ))}
          </div>

          {/* EXTRACURRICULARS COLUMN */}
          <div className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-widest text-neutral-400 mb-8 border-b border-neutral-200 pb-4">Extracurriculars</h3>
            {[
              {
                title: "CSI Event Manager",
                desc: "Led 'Fandoms United' event at GTBIT, overseeing end-to-end planning, logistics, and execution with 50+ teams."
              },
              {
                title: "College Fest Organizer",
                desc: "Planned and executed CSI Cannon, a 2-day fest featuring 15+ events, 1,000+ attendees, and secured ₹20K+ in sponsorships."
              },
              {
                title: "Community Dev Intern",
                desc: "At INDIA-AIDS NGO, enhanced learning for 150+ students, trained volunteers, and empowered women."
              },
              {
                title: "Music & Storytelling",
                desc: "Passionate about background scores and how they enhance narrative depth and emotional impact in films and series."
              }
            ].map((item, i) => (
              <div key={i} className="group p-6 rounded-[1.5rem] bg-neutral-50 border border-neutral-200/60 shadow-sm hover:shadow-xl hover:bg-white transition-all">
                <h4 className="font-bold text-neutral-900 mb-2">{item.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
}
