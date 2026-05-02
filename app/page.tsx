'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin, FileText } from 'lucide-react';

const MotionDiv = motion.div;
const MotionSection = motion.section;

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.65, delay: d, ease: [0.22, 1, 0.36, 1] } }),
};

export default function Home() {
  return (
    <div style={{ fontFamily: 'inherit', backgroundColor: '#FAFAFA', color: '#1a1a1a' }}>

      {/* ============================================================
          SECTION 1 — VIDEO HERO
      ============================================================ */}
      <section style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/assets/Animated_motion_graphic_se.mp4" type="video/mp4" />
        </video>

        {/* Scrim */}
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 1 }} />

        {/* Text content */}
        <MotionDiv
          initial="hidden"
          animate="show"
          style={{
            position: 'relative',
            zIndex: 2,
            padding: 'clamp(32px, 8vw, 80px) clamp(24px, 8vw, 96px)',
            paddingBottom: 'clamp(40px, 10vh, 96px)',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
          className="hero-text-block"
        >
          {/* Availability badge */}
          <MotionDiv
            variants={fadeUp}
            custom={0.05}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              marginBottom: '16px',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#4ade80', flexShrink: 0, boxShadow: '0 0 6px #4ade80' }} />
            <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 500, letterSpacing: '0.01em', whiteSpace: 'nowrap' }}>
              Available for internship now
            </span>
          </MotionDiv>

          {/* Headline */}
          <MotionDiv variants={fadeUp} custom={0.12}>
            <h1 style={{
              fontSize: 'clamp(38px, 5.5vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.07,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              margin: 0,
              marginBottom: '16px',
            }}>
              Hi, I am Vinay.<br />
              Most people describe symptoms,<br />
              I look for the problem underneath
            </h1>
          </MotionDiv>

          {/* Subline */}
          <MotionDiv variants={fadeUp} custom={0.22}>
            <p style={{
              fontSize: 'clamp(14px, 1.5vw, 18px)',
              color: 'rgba(255,255,255,0.80)',
              fontWeight: 400,
              margin: 0,
              marginBottom: '28px',
              maxWidth: '460px',
              lineHeight: 1.55,
            }}>
              I turn complexity into clarity and then into product decisions.
            </p>
          </MotionDiv>

          {/* CTA */}
          <MotionDiv variants={fadeUp} custom={0.30}>
            <Link
              href="/work"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                color: '#1a1a1a',
                fontWeight: 600,
                fontSize: '15px',
                padding: '12px 24px',
                borderRadius: '999px',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.18)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
            >
              See the work
              <ArrowRight style={{ width: '16px', height: '16px', color: '#2563EB' }} />
            </Link>
          </MotionDiv>
        </MotionDiv>

        <style>{`
          @media (max-width: 640px) {
            .hero-text-block {
              align-items: center !important;
              text-align: center !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
              position: absolute !important;
              top: 55% !important;
              transform: translateY(-50%) !important;
              left: 0; right: 0;
            }
            .hero-text-block h1 { text-align: center !important; }
            .hero-text-block p { text-align: center !important; margin-left: auto !important; margin-right: auto !important; }
          }
        `}</style>
      </section>

      {/* ============================================================
          SECTION 2 — STAT STRIP
      ============================================================ */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e5e5', borderBottom: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }} className="stat-grid">
          {[
            {
              num: '20%',
              mid: 'Drop-off reduced',
              sub: 'AI dictation beta, HubSpot tracked, 50+ beta users',
            },
            {
              num: '78%',
              mid: 'Quit rate uncovered',
              sub: 'Found via 12 user interviews, led to a pre-launch engine redesign',
            },
            {
              num: '90%',
              mid: 'Server efficiency gained',
              sub: 'PDF generation bottleneck resolved, enterprise compliance platform',
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{
                padding: '40px 36px',
                borderLeft: i > 0 ? '1px solid #e5e5e5' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              }}
              className="stat-cell"
            >
              <span style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 700, lineHeight: 1, color: '#1a1a1a', letterSpacing: '-0.02em' }}>
                {s.num}
              </span>
              <span style={{ fontSize: '16px', fontWeight: 500, color: '#1a1a1a', marginTop: '4px' }}>{s.mid}</span>
              <span style={{ fontSize: '13px', color: '#888888', lineHeight: 1.55 }}>{s.sub}</span>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 700px) {
            .stat-grid { grid-template-columns: 1fr !important; }
            .stat-cell { border-left: none !important; border-top: 1px solid #e5e5e5; }
            .stat-cell:first-child { border-top: none; }
          }
        `}</style>
      </section>

      {/* ============================================================
          SECTION 3 — WHO I AM
      ============================================================ */}
      {/* ============================================================
          SECTION 3 — WHO I AM (RESTRUCTURED)
      ============================================================ */}
      <section className="who-section" style={{ backgroundColor: '#ffffff', padding: '100px clamp(24px, 6vw, 64px)' }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '80px',
          alignItems: 'stretch'
        }} className="who-grid">

          {/* LEFT COLUMN: Profile & Status */}
          <div className="who-left-col" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Image */}
              <div style={{
                width: '100%',
                aspectRatio: '3/4',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)'
              }}>
                <Image
                  src="/assets/Formal Hair.png"
                  alt="Vinay"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>

              {/* Availability Status */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '0 4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', color: '#166534', fontWeight: 600, letterSpacing: '-0.01em' }}>
                    Open to internships now for Summer 2026.
                  </span>
                </div>
              </div>
            </div>

            {/* Recognition / Awards Block */}
            <div style={{ borderTop: '1px solid #eaeaea', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px', paddingLeft: '4px' }}>
              <p style={{ fontSize: '11px', fontWeight: 700, color: '#999999', letterSpacing: '0.08em', textTransform: 'uppercase', margin: 0 }}>
                Awards
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontSize: '14px', color: '#111111', margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                  Intern of the Year, TheBinaryTree
                </p>
                <p style={{ fontSize: '14px', color: '#111111', margin: 0, fontWeight: 500, lineHeight: 1.4 }}>
                  Runner-up, Hack-GTBIT (40+ teams)
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Bio & Credentials */}
          <div className="who-right-col" style={{ minWidth: 0 }}>
            {/* Header */}
            <h2 style={{ fontSize: '28px', fontWeight: 700, color: '#111111', margin: '0 0 4px 0', lineHeight: 1.2 }}>Vinay</h2>
            <p style={{ fontSize: '15px', color: '#555555', fontWeight: 400, margin: '0 0 32px 0', letterSpacing: '0.01em' }}>
              APM • ESCP London • Available now
            </p>

            <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '0 0 32px 0' }} />

            {/* Bio Paragraphs (Constraints removed, flowing naturally) */}
            <div className="who-bio" style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              <p style={{ fontSize: '16px', color: '#333333', lineHeight: 1.7, margin: 0 }}>
                For 3.5 years I sat in rooms with VPs, clients, and engineers, translating what each of them actually needed from the others. When requirements were vague I made them precise. When scope was growing I cut it. When a compliance requirement from a financial institution landed as a paragraph of legal text I turned it into something a developer could act on the same day.
              </p>
              <p style={{ fontSize: '16px', color: '#333333', lineHeight: 1.7, margin: 0 }}>
                Product instinct built that way is different from product instinct built in a classroom. I know what a bad handoff costs in days. I know which questions to ask before a sprint starts so it does not fall apart halfway through. ESCP adds the commercial layer: market strategy, pricing, GTM. The combination is what I am bringing to a product team now.
              </p>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #eaeaea', margin: '0 0 32px 0' }} />

            {/* Credential Items */}
            <div className="who-credentials" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {[
                {
                  label: 'NOW',
                  items: [
                    { primary: 'MiM in Marketing and Technology', secondary: 'ESCP Business School, London' }
                  ]
                },
                {
                  label: 'BEFORE',
                  items: [
                    { primary: 'APM', secondary: 'TheBinaryTree' },
                    { primary: 'Senior Developer', secondary: 'eSec Forte' },
                    { primary: 'Engineer', secondary: 'Compro Technologies' }
                  ]
                },
              ].map((item, i) => (
                <div key={i} className="credential-row" style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '20px', alignItems: 'start' }}>
                  <div style={{ marginTop: '4px' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 700,
                      color: '#555555',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      backgroundColor: '#F5F5F5',
                      padding: '3px 7px',
                      borderRadius: '4px',
                      display: 'inline-block'
                    }}>
                      {item.label}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', gap: '32px', flexWrap: 'wrap' }}>
                    {item.items.map((sub, j) => (
                      <div key={j} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        paddingLeft: j > 0 ? '32px' : '0',
                        borderLeft: j > 0 ? '1px solid #eaeaea' : 'none'
                      }}>
                        <p style={{ fontSize: '15px', color: '#111111', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>
                          {sub.primary}
                        </p>
                        <p style={{ fontSize: '14px', color: '#666666', margin: 0, fontWeight: 400, lineHeight: 1.4 }}>
                          {sub.secondary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>



        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .who-grid { 
              grid-template-columns: 1fr !important; 
              gap: 40px !important; 
            }
            .who-left-col { 
              align-items: center; 
              text-align: center;
              max-width: 260px;
              margin: 0 auto;
            }
            .credential-row { 
              grid-template-columns: 1fr !important; 
              gap: 4px !important; 
            }
          }
        ` }} />
      </section>


      {/* ============================================================
          SECTION 4.1 — CASE STUDY 1: AI DICTATION
      ============================================================ */}
      <section style={{ backgroundColor: '#FAFAFA', padding: 'clamp(32px, 5vw, 64px) clamp(24px, 6vw, 64px) clamp(24px, 4vw, 48px)' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e8e8e8',
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
        }} className="case-card">

          {/* Text */}
          <div style={{ padding: 'clamp(32px, 4vw, 56px)' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#555',
              backgroundColor: '#f3f3f3',
              border: '1px solid #e0e0e0',
              padding: '4px 12px',
              borderRadius: '999px',
              marginBottom: '20px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', flexShrink: 0 }} />
              Case Study
            </span>

            <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '20px' }}>
              TheBinaryTree: AI Dictation Beta
            </h2>

            {/* Metric strip */}
            <div className="metric-strip" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              borderTop: '1px solid #e8e8e8',
              borderBottom: '1px solid #e8e8e8',
              padding: '14px 0',
              marginBottom: '28px',
            }}>
              {[
                { num: '78%', label: 'initial quit rate' },
                { num: '12', label: 'user interviews' },
                { num: '20%', label: 'drop-off reduced' },
              ].map(({ num, label }, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  borderLeft: i > 0 ? '1px solid #e8e8e8' : 'none',
                  padding: '0 12px',
                }}>
                  <div style={{ fontSize: '22px', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2 }}>{num}</div>
                  <div style={{ fontSize: '12px', color: '#888888', marginTop: '3px', lineHeight: 1.4 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Three labeled blocks */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {[
                {
                  label: 'THE PROBLEM',
                  body: '78 percent of beta users quit before completing a single dictation session. The team proposed a UI redesign. I ran user interviews instead.',
                },
                {
                  label: 'THE INSIGHT',
                  body: 'Users were not confused. They were anxious. Watching words transcribe in real time made them perform for the software rather than speak naturally. The engine had the wrong model of how people think.',
                },
                {
                  label: 'THE DECISION',
                  body: 'I authored a PRD update for buffered thought-stream capture. Process on silence, show nothing until the thought is complete. Shipped three weeks before launch. Drop-off cut by 20 percent.',
                },
              ].map(({ label, body }) => (
                <div key={label}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#999999',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    margin: 0,
                    marginBottom: '6px',
                  }}>{label}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#444444',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>{body}</p>
                </div>
              ))}
            </div>

            <Link
              href="/work/mvp-dictation"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#2563EB', fontSize: '15px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
            >
              Read the full case study
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </Link>
          </div>

          {/* Image */}
          <div style={{ position: 'relative', backgroundColor: '#f7f7f7', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }} className="case-img-col">
            <div style={{ position: 'relative', width: '100%', maxWidth: '260px', aspectRatio: '9/16', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.12)' }}>
              <Image
                src="/assets/Tapfree/initial screen.jpeg"
                alt="Tap Free initial screen"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4.2 — CASE STUDY 2: SINCERELY
      ============================================================ */}
      <section style={{ backgroundColor: '#FAFAFA', padding: 'clamp(24px, 4vw, 48px) clamp(24px, 6vw, 64px) clamp(32px, 5vw, 64px)' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          border: '1px solid #e8e8e8',
          boxShadow: '0 4px 24px rgba(0,0,0,0.05)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '55fr 45fr',
        }} className="case-card">

          {/* Text content - Left Column */}
          <div style={{ padding: 'clamp(32px, 4vw, 56px)', textAlign: 'left' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#555',
              backgroundColor: '#f3f3f3',
              border: '1px solid #e0e0e0',
              padding: '4px 12px',
              borderRadius: '999px',
              marginBottom: '20px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#2563EB', flexShrink: 0 }} />
              Market Design
            </span>

            <h2 style={{ fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 700, color: '#1a1a1a', letterSpacing: '-0.01em', lineHeight: 1.2, marginBottom: '20px' }}>
              Sincerely: Engineering Structural Trust in a Broken Marketplace
            </h2>

            <p style={{
              fontSize: '18px',
              fontWeight: 500,
              color: '#666666',
              lineHeight: 1.5,
              margin: '0 0 32px 0'
            }}>
              Mainstream dating apps monetize burnout by optimizing for infinite retention. We built a high-friction ecosystem designed to <strong className="text-neutral-900">monetize the exit.</strong>
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
              {[
                {
                  label: 'THE MARKET FAILURE',
                  body: 'A 75% male user base creates a toxic liquidity loop—male scarcity-driven consumption versus female cognitive overload and safety concerns.',
                },
                {
                  label: 'THE STRATEGIC PIVOT',
                  body: 'Introduced intentional friction: a £89.99 entry barrier and mandatory ID verification to structurally filter out validation seekers and bad-faith actors.',
                },
                {
                  label: 'ENGINEERED SCARCITY',
                  body: 'Implemented a strict 4-conversation limit, forcing a behavioral shift from volume-based swiping to vulnerability-based connection.',
                },
              ].map(({ label, body }) => (
                <div key={label}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#999999',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    margin: 0,
                    marginBottom: '6px',
                  }}>{label}</p>
                  <p style={{
                    fontSize: '14px',
                    color: '#444444',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>{body}</p>
                </div>
              ))}
            </div>

            <Link
              href="/work/sincerely"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 600, color: '#2563EB', fontSize: '15px', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = '0.7'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = '1'}
            >
              Read the full case study
              <ArrowRight style={{ width: '15px', height: '15px' }} />
            </Link>
          </div>

          {/* Image - Right Column */}
          <div style={{ position: 'relative', backgroundColor: '#fcfcfc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }} className="case-img-col">
            <div style={{ position: 'relative', width: '100%', maxWidth: '320px', aspectRatio: '9/16', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.15)' }}>
              <Image
                src="/assets/sincerely_clay_mockup.png"
                alt="Sincerely app mockup"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .case-card { grid-template-columns: 1fr !important; }
            .case-img-col { min-height: 360px !important; order: -1; border-radius: 24px 24px 0 0; }
          }
        ` }} />
      </section>

      {/* ============================================================
          SECTION 5 — TRUST BAR
      ============================================================ */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e5e5', padding: 'clamp(40px, 5vw, 64px) clamp(24px, 6vw, 64px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '12px', color: '#999999', fontWeight: 500, letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '28px' }}>
            Experience and education across
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: 'clamp(24px, 5vw, 56px)' }}>
            {['eSec Forte', 'TheBinaryTree', 'Compro Technologies', 'ESCP Business School'].map((name) => (
              <span key={name} style={{ fontSize: 'clamp(15px, 1.6vw, 18px)', fontWeight: 600, color: '#1a1a1a', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
                {name}
              </span>
            ))}
          </div>

          <p style={{ fontSize: '12px', color: '#999999', fontWeight: 400, marginTop: '24px', lineHeight: 1.6 }}>
            Enterprise platforms, AI product, Master in Management, Marketing and Technology
          </p>
        </div>
      </section>

      {/* ============================================================
          FOOTER
      ============================================================ */}
      <footer style={{ backgroundColor: '#FAFAFA', borderTop: '1px solid #e5e5e5', padding: 'clamp(20px, 3vw, 32px) clamp(24px, 6vw, 64px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '13px', color: '#999999' }}>Vinay, 2026</span>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <Link
              href="https://www.linkedin.com/in/vinay-22-chahal/"
              target="_blank"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#666', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2563EB'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#666'}
            >
              <Linkedin style={{ width: '14px', height: '14px' }} />
              LinkedIn
            </Link>
            <Link
              href="/assets/Vinay Resume.pdf"
              target="_blank"
              style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#666', textDecoration: 'none', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#2563EB'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#666'}
            >
              <FileText style={{ width: '14px', height: '14px' }} />
              Resume
            </Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
