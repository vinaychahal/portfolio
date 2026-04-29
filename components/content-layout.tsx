'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Lightbulb } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const MotionDiv = motion.div;

interface ContentLayoutProps {
  title: string;
  category: string;
  metrics?: { label: string; value: string }[];
  children: React.ReactNode;
  imageSrc?: string;
}

export default function ContentLayout({ title, category, metrics, children, imageSrc }: ContentLayoutProps) {
  return (
    <div className="pt-12 pb-32 max-w-7xl mx-auto px-4 md:px-8">
      <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-neutral-500 hover:text-neutral-900 mb-16 transition-all duration-300">
        <span className="bg-white border border-neutral-200 rounded-full p-2 group-hover:-translate-x-1 transition-transform">
          <ArrowLeft className="w-4 h-4" />
        </span>
        Return to Portfolio
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* LEFT SIDEBAR */}
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 lg:pr-8"
        >
          <div>
            <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-neutral-900 text-white mb-6 inline-block shadow-sm">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-neutral-900 leading-[1.05] mb-6 break-words [word-break:break-word] hyphens-auto">
              {title}
            </h1>
            <p className="text-neutral-500 font-medium">
              Strategic execution mapping product goals to measurable outcomes.
            </p>
          </div>

          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((m, idx) => (
                <div key={idx} className="bg-white/60 backdrop-blur-xl border border-neutral-200/60 p-6 rounded-[1.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                  <div className="text-3xl font-black text-neutral-900 tracking-tight mb-1">{m.value}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="hidden lg:flex items-start gap-4 bg-blue-50/50 border border-blue-100 p-6 rounded-[1.5rem]">
            <Lightbulb className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-neutral-900 text-sm mb-1">PM Insight</h4>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Every decision documented here was driven by a core business objective, not technical preference.
              </p>
            </div>
          </div>
        </MotionDiv>

        {/* RIGHT CONTENT AREA */}
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          {imageSrc && (
            <div className="w-full aspect-square md:aspect-[4/3] relative rounded-[2rem] overflow-hidden mb-16 shadow-lg border border-neutral-200/50 group bg-[#FAFAFA]">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-contain p-8 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
            </div>
          )}

          {/* RICH PROSE TYPOGRAPHY */}
          <div className="
            [&>h2]:text-2xl [&>h2]:font-extrabold [&>h2]:tracking-tight [&>h2]:text-neutral-900
            [&>h2]:mt-16 [&>h2]:mb-5 [&>h2]:pb-4 [&>h2]:border-b [&>h2]:border-neutral-200/80
            [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-neutral-900 [&>h3]:mt-10 [&>h3]:mb-3
            [&>p]:text-[17px] [&>p]:leading-[1.85] [&>p]:text-neutral-600 [&>p]:mb-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-neutral-900 [&>blockquote]:pl-6
            [&>blockquote]:my-10 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:text-neutral-500
            [&>ul]:space-y-3 [&>ul]:mb-8 [&>ul]:pl-0 [&>ul]:list-none
            [&>ul>li]:flex [&>ul>li]:items-start [&>ul>li]:gap-3 [&>ul>li]:text-[16px] [&>ul>li]:text-neutral-600 [&>ul>li]:leading-relaxed
            [&>ul>li]:before:content-['→'] [&>ul>li]:before:text-neutral-400 [&>ul>li]:before:font-bold [&>ul>li]:before:shrink-0 [&>ul>li]:before:mt-0.5
            [&_strong]:text-neutral-900 [&_strong]:font-semibold
          ">
            {children}
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
