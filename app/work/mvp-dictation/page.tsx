'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const MotionDiv = motion.div;

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export default function TapFreeCaseStudy() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white pb-24">
      {/* Navigation (Simplified for Case Study) */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-12">
        <FadeIn>
          <Link href="/work" className="text-sm font-semibold text-neutral-400 hover:text-neutral-900 transition-colors">
            ← Back to Portfolio
          </Link>
        </FadeIn>
      </div>

      <main className="max-w-5xl mx-auto px-6 space-y-24 md:space-y-32">

        {/* 1. Hero & TL;DR */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 text-neutral-900">
                Tap Free
              </h1>
              <p className="text-xl md:text-2xl text-neutral-500 mb-8">
                Voice Dictation That Actually Works
              </p>

              {/* The TL;DR Bento Box */}
              <div className="bg-white p-6 rounded-2xl border border-neutral-200/60 shadow-sm space-y-4">
                <div>
                  <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Role</span>
                  <p className="font-medium text-neutral-900">Product Research & UX Strategy</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Timeline</span>
                  <p className="font-medium text-neutral-900">4 weeks to public launch</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Impact</span>
                  <p className="font-medium text-[#FF8A80]">40-point reduction in drop-off</p>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="flex justify-center md:justify-end">
            <FadeIn delay={0.2}>
              <div className="relative w-full max-w-[320px]">
                <Image
                  src="/assets/Tapfree/Auto formatting.webp"
                  alt="Tap Free auto-formatting"
                  width={320}
                  height={640}
                  className="h-auto w-full rounded-3xl shadow-2xl object-contain"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 2. The Problem & Insight (Side-by-Side) */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
          {/* Callout Sidebar */}
          <FadeIn>
            <div className="bg-[#FFF5F4] p-8 rounded-2xl border-l-4 border-[#FF8A80] h-fit">
              <h2 className="text-3xl font-bold text-neutral-900 leading-tight mb-4">
                78% of beta users quit during their first dictation.
              </h2>
              <p className="text-xl font-semibold text-[#FF8A80]">
                We had 4 weeks to launch.
              </p>
            </div>
          </FadeIn>

          {/* Narrative */}
          <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                TheBinaryTree built Tap Free as a voice-first keyboard for professionals. Early beta showed strong interest—but catastrophic drop-off during onboarding. I designed and ran 12 user interviews over 10 days to find out why.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <blockquote className="border-l-4 border-neutral-300 pl-6 py-2 my-8 italic text-neutral-500">
                "I kept stopping mid-sentence because I thought the app needed me to pause... but then it would cut me off."
                <footer className="text-sm mt-2 font-semibold">— Beta user interview, Day 4</footer>
              </blockquote>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p>
                <strong>The insight:</strong> We weren't building a transcription tool. We were building a thought-capture tool. When users spoke naturally, the real-time, word-by-word engine would cut them off mid-thought, creating cascading errors that destroyed trust immediately.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 3. The Architectural Pivot (Sticky Scroll) */}
        <section className="relative flex flex-col md:flex-row gap-12 items-start">
          {/* Sticky Image on Desktop */}
          <div className="w-full md:w-1/2 md:sticky md:top-24 order-2 md:order-1">
            <FadeIn delay={0.1}>
              <Image
                src="/assets/Tapfree/solution-flow-comparison.png"
                alt="Architecture Flow Comparison"
                width={600}
                height={350}
                className="w-full h-auto rounded-2xl shadow-lg border border-neutral-100"
              />
            </FadeIn>
          </div>

          {/* Scrolling Text */}
          <div className="w-full md:w-1/2 space-y-6 text-lg text-neutral-700 leading-relaxed order-1 md:order-2">
            <FadeIn>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 tracking-tight">The Call to Rebuild</h2>
              <p>
                Four weeks from launch, I pushed to delay and rebuild the core transcription engine. The team resisted. Engine changes meant touching the ML model, re-training across 40+ languages, and delaying marketing plans.
              </p>
              <p>
                But the data was unambiguous: if we shipped with 78% drop-off, we'd burn our early adopter base.
              </p>
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 mt-6">
                <h3 className="font-bold text-neutral-900 mb-3">The Architectural Compromise</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3"><span className="text-[#FF8A80] font-bold text-base">1.</span> Capture the full audio stream while the user speaks.</li>
                  <li className="flex gap-3"><span className="text-[#FF8A80] font-bold text-base">2.</span> Process it server-side once they finish.</li>
                  <li className="flex gap-3"><span className="text-[#FF8A80] font-bold text-base">3.</span> Return clean, formatted, filler-free text.</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 4. What We Built (Bento Grid) */}
        <section>
          <FadeIn>
            <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center tracking-tight">What We Built</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            {/* Card 1: Auto-Formatting */}
            <FadeIn>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200/60 flex flex-col h-[480px]">
                <div className="p-8 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Auto-Formatting</h3>
                  <p className="text-neutral-500">Converts casual speech into send-ready emails, messages, and structured text automatically.</p>
                </div>
                <div className="flex-1 w-full bg-neutral-50 relative flex justify-center items-end overflow-hidden pt-6 mt-auto">
                  <div className="relative w-[75%] aspect-[9/16] translate-y-2 drop-shadow-xl">
                    <Image
                      src="/assets/Tapfree/Auto formatting.webp"
                      alt="Auto-Formatting"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Intent Recognition */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200/60 flex flex-col h-[480px]">
                <div className="p-8 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Intent Recognition</h3>
                  <p className="text-neutral-500">Understands corrections mid-speech ("no wait, I mean...") to fix mistakes in real-time.</p>
                </div>
                <div className="flex-1 w-full bg-neutral-50 relative flex justify-center items-end overflow-hidden pt-6 mt-auto">
                  <div className="relative w-[75%] aspect-[9/16] translate-y-2 drop-shadow-xl">
                    <Image
                      src="/assets/Tapfree/context and intent.webp"
                      alt="Intent Recognition"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: Smart Cleanup */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200/60 flex flex-col h-[480px]">
                <div className="p-8 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Smart Cleanup</h3>
                  <p className="text-neutral-500">Removes "umm", "uhh", "like", and false starts invisibly to the user.</p>
                </div>
                <div className="flex-1 w-full bg-neutral-50 relative flex justify-center items-end overflow-hidden pt-6 mt-auto">
                  <div className="relative w-[75%] aspect-[9/16] translate-y-2 drop-shadow-xl">
                    <Image
                      src="/assets/Tapfree/filler removal.webp"
                      alt="Smart Cleanup"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 4: Multilingual Support */}
            <FadeIn delay={0.3}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-neutral-200/60 flex flex-col h-[480px]">
                <div className="p-8 pb-4">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Multilingual Support</h3>
                  <p className="text-neutral-500">Seamless switching across 40+ languages mid-conversation without breaking the flow.</p>
                </div>
                <div className="flex-1 w-full bg-neutral-50 relative flex justify-center items-end overflow-hidden pt-6 mt-auto">
                  <div className="relative w-[75%] aspect-[9/16] translate-y-2 drop-shadow-xl">
                    <Image
                      src="/assets/Tapfree/language.webp"
                      alt="Multilingual Support"
                      fill
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* 5. Results & Takeaways */}
        <section className="space-y-16">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold text-neutral-900 mb-8 tracking-tight">The Impact</h2>
              <div className="relative w-full aspect-[2/1] mb-6">
                <Image
                  src="/assets/Tapfree/outcome-dropoff-chart.png"
                  alt="Drop-off improvement chart"
                  fill
                  className="rounded-2xl shadow-sm object-contain"
                />
              </div>
              <p className="text-xl text-neutral-700">
                We achieved a <strong className="text-[#7BA05B]">40-point swing</strong> in onboarding retention by launch. The architecture I pushed for became the core differentiator in our go-to-market positioning.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto pt-8 border-t border-neutral-200">
            {[
              {
                num: '1',
                title: 'Research looks for blind spots.',
                body: 'I expected UI friction. I found a fundamental architecture problem. Analytics highlight the \'what\'; conversations reveal the \'why\'.'
              },
              {
                num: '2',
                title: 'Technical depth is a PM superpower.',
                body: 'Assessing ML feasibility and writing PRDs in the engineering team\'s language made the hard sell to delay launch possible.'
              },
              {
                num: '3',
                title: 'Hard calls require data.',
                body: 'Pushing to rebuild the engine was risky, but confidence in product decisions comes from ruthless clarity on the user problem.'
              },
              {
                num: '4',
                title: 'Metrics + Users = Truth.',
                body: '78% drop-off told us something was broken. 12 interviews told us what. Neither alone would have led to the correct solution.'
              }
            ].map(({ num, title, body }) => (
              <FadeIn key={num}>
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    <span className="text-[#FF8A80] mr-2">{num}.</span> {title}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
