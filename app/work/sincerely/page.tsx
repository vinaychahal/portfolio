'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';

const MotionDiv = motion.div;

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <MotionDiv
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export default function SincerelyCaseStudy() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Back Link */}
        <FadeIn>
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors mb-12">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
            Back to Portfolio
          </Link>
        </FadeIn>

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
          <FadeIn>
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Sincerely: Solving the Liquidity Crisis of Modern Romance
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 mb-8">
                Engineering a high-friction ecosystem where safety is structural, and commitment is verified.
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-neutral-200 pt-6 mt-8">
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Target Market</p>
                  <p className="font-medium">Educated Urban Women (24-39)</p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">North Star Metric</p>
                  <p className="font-medium">Viral Exit K-Factor</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative w-full max-w-sm mx-auto">
              <Image
                alt="Sincerely App Mockup"
                src="/assets/sincerely_clay_mockup.png"
                width={400}
                height={800}
                className="w-full h-auto drop-shadow-2xl rounded-[2rem]"
                priority
              />
            </div>
          </FadeIn>
        </section>

        {/* The Lemon Market Section */}
        <FadeIn>
          <section className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-24 border border-neutral-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-4">The "Lemon Market" Failure</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Mainstream dating apps suffer from a staggering <strong>75% men to 25% women ratio</strong>. This creates a toxic behavioral feedback loop: men swipe indiscriminately out of scarcity, while women swipe hyper-cautiously due to cognitive overload.
                </p>
                <p className="text-neutral-600 leading-relaxed">
                  Women are unserved by current gamified models. They do not want better reporting features; they require <strong>structural filters</strong> before they invest emotionally.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4">Behavioral Segmentation</h3>

                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                  <h4 className="font-bold text-neutral-900">Serious Seekers (Target)</h4>
                  <p className="text-sm text-neutral-600 mt-1">Deeply invest in fewer interactions. Highly vulnerable to having their emotional investment weaponized.</p>
                </div>

                <div className="bg-white p-5 rounded-xl border border-neutral-200 shadow-sm">
                  <h4 className="font-bold text-neutral-900">Casual / Validation Seekers</h4>
                  <p className="text-sm text-neutral-600 mt-1">High swipe volume, low conversion. Primary drivers of the 'availability' pain point and platform burnout.</p>
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* Engineering Section */}
        <section className="mb-24">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Engineering a High-Intent Ecosystem</h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn delay={0.1} className="order-2 md:order-1 relative max-w-xs mx-auto">
              <Image
                alt="Identity Verification UI"
                src="/assets/verification.jpg"
                width={320}
                height={600}
                className="w-full rounded-3xl shadow-xl border border-neutral-100"
              />
            </FadeIn>
            <FadeIn delay={0.1} className="order-1 md:order-2">
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">1. The Sunk-Cost Entry Barrier</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  Access requires a one-time £89.99 fee. In behavioral economics, this acts as a <strong>"costly signal"</strong> that instantly filters out bots and low-intent daters.
                </p>
                <p className="text-neutral-600 leading-relaxed font-medium">
                  Unit Economics: This fee covers the £15-£20 hard cost of Enterprise ID and Background Verification APIs, generating <strong>immediate profit on Day One</strong> while funding our non-negotiable safety layer.
                </p>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">2. The "No Swiping" Architecture</h3>
                <p className="text-neutral-600 leading-relaxed mb-4">
                  We eliminated the infinite scroll. Users receive a curated selection of only <strong>10 profiles per week</strong>. By removing the dopamine hit of the endless swipe, we force high-elaboration processing.
                </p>
                <ul className="space-y-2 text-neutral-600">
                  <li>• <strong>Accountability:</strong> A Red-to-Blue flag gradient rating system based strictly on politeness and respect.</li>
                  <li>• <strong>Enforced Closure:</strong> Users cannot simply "ghost." Closing a conversation requires selecting a specific reason.</li>
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="relative max-w-xs mx-auto">
              <Image
                alt="Curated Profiles Interface"
                src="/assets/10 profiles this week.png"
                width={320}
                height={600}
                className="w-full rounded-3xl shadow-xl border border-neutral-100"
              />
            </FadeIn>
          </div>
        </section>

        {/* Optimizing for the Exit Section */}
        <FadeIn>
          <section className="bg-neutral-900 text-white rounded-3xl p-8 md:p-16 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Optimizing for the Exit</h2>
                <p className="text-neutral-300 leading-relaxed mb-8">
                  Sincerely inverts the traditional dating app business model: we use successful exits as our primary growth engine. We realigned the product metric from Daily Active Users (DAU) to the <strong>"Viral Exit Loop."</strong>
                </p>

                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4">Core Product Metrics</h4>
                <ul className="space-y-3 text-sm text-neutral-300">
                  <li className="flex justify-between border-b border-neutral-700 pb-2">
                    <span>Weekly Active Users (WAU)</span>
                    <span>Engagement health</span>
                  </li>
                  <li className="flex justify-between border-b border-neutral-700 pb-2">
                    <span>30-Day Churn Rate</span>
                    <span>Early drop-off tracking</span>
                  </li>
                  <li className="flex justify-between pb-2">
                    <span>Free-to-Paid Conversion</span>
                    <span>Paywall friction analysis</span>
                  </li>
                </ul>
              </div>

              <div className="relative max-w-xs mx-auto">
                <Image
                  alt="Dating Wrapped"
                  src="/assets/dating wrapped.png"
                  width={320}
                  height={600}
                  className="w-full rounded-3xl shadow-2xl border border-neutral-700"
                />
              </div>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
