'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ACCENT_BLUE = '#2563EB';

// ─── Data ────────────────────────────────────────────────────────────────────
const projects = [
  {
    img: '/assets/Projects_work.mp4',
    title: 'TheBinaryTree: AI Dictation Beta',
    href: '/work/mvp-dictation',
    description: [
      '78 percent of beta users were abandoning their first dictation session. The proposed fix was a UI redesign. I pushed back.',
      'After 12 user interviews in 10 days, the pattern was clear. Users were not confused by the interface. They were anxious about the engine, which transcribed words in real time and made them second-guess every pause. They were performing for the software instead of thinking out loud.',
      'The problem was not the button. The engine had the wrong model of how people think. I authored a PRD update for buffered thought-stream capture, where silence detection triggers processing and nothing is shown until the thought is complete. Shipped three weeks before launch. Drop-off reduced by 20 percent.',
    ],
    tags: ['User Research', 'PRD', 'GTM Strategy', 'A/B Testing', 'Figma', 'HubSpot CRM', 'Voice AI', 'Onboarding'],
    links: [{ label: 'Read case study', href: '/work/mvp-dictation' }],
  },
  {
    img: '/assets/Projects_work - Copy.png',
    title: 'Enterprise Compliance Platform',
    href: '/work/case-study-esec',
    description: [
      'Core contributor on an enterprise risk management platform serving top-tier Indian financial institutions, built from the ground up to handle complex regulatory compliance requirements at scale.',
      'Working directly alongside product managers, I defined technical specifications from user needs rather than assumptions, which reduced scope creep by 20 percent and kept release cycles on track. When a critical bottleneck in large-scale PDF generation was identified, I resolved it and improved server efficiency by 90 percent.',
      'This was engineering work done with a product mindset. Every decision was framed around what the user needed the system to do, not just what was technically possible.',
    ],
    tags: ['Technical Specs', 'Enterprise B2B', 'Scope Management', 'Agile', 'API', 'Compliance', 'B2B SaaS', 'Stakeholder Management'],
    links: [{ label: 'View case study', href: '/work/case-study-esec' }],
  },
  {
    img: '/assets/Projects_work - Copy - Copy.png',
    title: 'Women-First Dating App: Safety by Design',
    href: '/work/sincerely',
    description: [
      'A college product design project with a real brief: design a dating app where women feel safe by default, not as an afterthought.',
      'Most dating apps treat safety as a feature you turn on. We designed it as the foundation. That meant researching the specific moments where women feel most vulnerable during the process of meeting someone new, and designing the product flow around eliminating those moments rather than managing them after the fact.',
      'Deliverables included user research with female participants, a full UX flow, Figma wireframes, and a product rationale document explaining every safety decision and the research that led to it.',
    ],
    tags: ['UX Research', 'Safety Design', 'Figma', 'Product Design', 'User Interviews', 'Mobile', 'Accessibility'],
    links: [{ label: 'View project', href: '/work/sincerely' }],
  },
  {
    img: '/assets/Projects_work - Copy - Copy (2).png',
    title: 'Smart Fridge: Go-to-Market Strategy',
    href: '/work/roadmap-gtm',
    description: [
      'A college go-to-market project for a new smart refrigerator product entering a crowded consumer appliance market with a technology-first value proposition.',
      'The brief required building a complete market entry strategy from scratch. This included market sizing, customer segmentation by lifestyle and technology adoption, competitive positioning against existing smart home products, pricing strategy rationale, channel selection, and a phased launch roadmap.',
      'The final deliverable was a full GTM strategy document structured as a boardroom-ready recommendation, with each decision grounded in market data and clearly stated assumptions.',
    ],
    tags: ['GTM Strategy', 'Market Sizing', 'Segmentation', 'Competitive Analysis', 'Pricing Strategy', 'Product Marketing', 'Roadmapping'],
    links: [{ label: 'View strategy', href: '/work/roadmap-gtm' }],
  },
  {
    img: '/assets/Projects_work - Copy - Copy (3).png',
    title: 'University Admissions Platform',
    href: '/work/mvp-admissions',
    description: [
      'Feature delivery contributor on a university admissions platform serving over 3 million users, working across 4 release cycles at Compro Technologies.',
      'The platform handled the full admissions journey for students applying to universities across multiple regions. Working in a cross-functional team alongside product managers and designers, I contributed to feature scoping, implementation, and release.',
      'The scale of the platform meant that every feature decision carried real consequences for a massive user base, which shaped how I think about product quality, edge cases, and what it means to ship responsibly.',
    ],
    tags: ['Feature Delivery', 'Cross-functional', 'Enterprise Scale', 'Agile', 'Release Management', 'EdTech'],
    links: [{ label: 'View project', href: '/work/mvp-admissions' }],
  },
];

// ─── Project media (Video or Image) ──────────────────────────────────────────
function ProjectMedia({ src, alt }: { src: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = src.toLowerCase().endsWith('.mp4');

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, [isVideo]);

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '256px',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isVideo ? '20px' : '0',
    }}>
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          style={{ 
            maxWidth: '100%', 
            maxHeight: '100%', 
            objectFit: 'contain',
            borderRadius: '4px',
          }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="400px"
        />
      )}
    </div>
  );
}

// ─── Tag pill ────────────────────────────────────────────────────────────────
function Tag({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '999px',
      backgroundColor: '#f3f3f3',
      border: '1px solid #e4e4e4',
      fontSize: '12px',
      color: '#555555',
      fontWeight: 500,
      lineHeight: 1.5,
    }}>
      {label}
    </span>
  );
}

// ─── Project row ─────────────────────────────────────────────────────────────
function ProjectRow({ project, isLast }: { project: typeof projects[0]; isLast: boolean }) {
  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid #e8e8e8' }}>
      <div
        className="project-row"
        style={{
          display: 'grid',
          gridTemplateColumns: '400px 1fr',
          gap: '0',
          padding: '56px 0',
          alignItems: 'flex-start',
        }}
      >
        {/* LEFT: Media */}
        <div className="project-img-col" style={{ paddingRight: '48px' }}>
          <ProjectMedia src={project.img} alt={project.title} />
        </div>

        {/* RIGHT: Text */}
        <div className="project-text-col">
          {/* Title */}
          <Link
            href={project.href}
            style={{ textDecoration: 'none' }}
            className="project-title-link"
          >
            <h2 className="project-title" style={{
              fontSize: 'clamp(18px, 1.8vw, 23px)',
              fontWeight: 700,
              color: '#1a1a1a',
              margin: 0,
              marginBottom: '10px',
              lineHeight: 1.2,
              textDecoration: 'none',
              transition: 'text-decoration 0.15s',
            }}>
              {project.title}
            </h2>
          </Link>

          {/* Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '520px' }}>
            {project.description.map((para, i) => (
              <p key={i} style={{
                fontSize: '15px',
                color: '#444444',
                lineHeight: 1.75,
                margin: 0,
              }}>
                {para}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '16px' }}>
            {project.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '14px', flexWrap: 'wrap' }}>
            {project.links.map((link, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {i > 0 && <span style={{ color: '#cccccc', fontSize: '12px' }}>·</span>}
                <Link
                  href={link.href}
                  className="project-link"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    color: ACCENT_BLUE,
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.7'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                >
                  {link.label}
                  <ArrowRight style={{ width: '13px', height: '13px' }} />
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .project-row {
            grid-template-columns: 1fr !important;
            padding: 36px 0 !important;
          }
          .project-img-col {
            padding-right: 0 !important;
            margin-bottom: 24px;
          }
          .project-img-col > div {
            height: 200px !important;
          }
          .project-title-link h2 {
            font-size: 20px !important;
          }
        }
        .project-title-link:hover h2 {
          text-decoration: underline;
        }
      ` }} />
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Work() {
  return (
    <div style={{
      backgroundColor: '#FAFAFA',
      minHeight: '100vh',
      paddingTop: '120px', // clearance for fixed navbar
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(24px, 6vw, 64px) 80px' }}>

        {/* Page header */}
        <div style={{ marginBottom: '64px' }}>
          <h1 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700,
            color: '#1a1a1a',
            letterSpacing: '-0.02em',
            margin: 0,
            marginBottom: '10px',
          }}>
            Work
          </h1>
          <p style={{ fontSize: '16px', color: '#888888', fontWeight: 400, margin: 0 }}>
            How I research, decide, and ship.
          </p>
        </div>

        {/* Project rows */}
        <div style={{ borderTop: '1px solid #e8e8e8' }}>
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} isLast={i === projects.length - 1} />
          ))}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #e8e8e8', marginTop: '64px', paddingTop: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#999999' }}>Vinay, 2026</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link href="https://www.linkedin.com/in/vinay-22-chahal/" target="_blank" style={{ fontSize: '13px', color: '#555', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
            >LinkedIn</Link>
            <Link href="/assets/Vinay Resume.pdf" target="_blank" style={{ fontSize: '13px', color: '#555', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#1a1a1a'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
            >Resume</Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
