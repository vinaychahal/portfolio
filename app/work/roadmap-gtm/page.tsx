import ContentLayout from '@/components/content-layout';

export default function RoadmapGTM() {
  return (
    <ContentLayout
      title="The Go-to-Market Roadmap"
      category="Strategy"
      metrics={[
        { label: "Timeline", value: "6 Months" },
        { label: "Major Sprints", value: "4" },
      ]}
    >
      <h2>Strategic Overview</h2>
      <p>
        A successful Go-to-Market strategy is entirely dependent on timing, prioritization, and cross-functional alignment. This roadmap outlines the 6-month lifecycle for taking an AI-driven platform from internal alpha to public beta, balancing business goals with technical constraints.
      </p>

      <h2>Month 1: Discovery & User Segmentation</h2>
      <ul>
        <li><strong>Product:</strong> Define core user segments and establish baseline metrics.</li>
        <li><strong>Research:</strong> Conduct 12 user interviews to identify critical friction points.</li>
        <li><strong>Output:</strong> Finalized PRD and initial wireframes for the MVP.</li>
      </ul>

      <h2>Month 2-3: Engineering Sprints & MVP Build</h2>
      <ul>
        <li><strong>Engineering:</strong> Sprint 1 (Core API Integration) & Sprint 2 (UI implementation).</li>
        <li><strong>Product:</strong> Daily standups to refine requirements and actively cut scope creep by 20% to maintain the timeline.</li>
        <li><strong>Marketing:</strong> Shape messaging pillars based on the Month 1 user research.</li>
      </ul>

      <h2>Month 4: Private Beta Launch</h2>
      <ul>
        <li><strong>GTM:</strong> Roll out to a tightly controlled cohort of 50+ users.</li>
        <li><strong>Analytics:</strong> Integrate HubSpot CRM tracking to monitor the beta lifecycle.</li>
        <li><strong>Output:</strong> First set of quantitative data on user drop-offs.</li>
      </ul>

      <h2>Month 5: Iteration & A/B Testing</h2>
      <ul>
        <li><strong>Product:</strong> Analyze data to discover friction points. Run A/B testing on onboarding flows.</li>
        <li><strong>Engineering:</strong> Sprint 3 (Refinement and UI/UX optimization based on data).</li>
        <li><strong>Output:</strong> Achieved a 20% reduction in onboarding drop-offs.</li>
      </ul>

      <h2>Month 6: Public Readiness & Scale</h2>
      <ul>
        <li><strong>GTM:</strong> Finalize positioning and prepare for broader market acquisition.</li>
        <li><strong>Engineering:</strong> Sprint 4 (Performance optimization and server scaling).</li>
        <li><strong>Output:</strong> Launch-ready product validated by real user data.</li>
      </ul>
    </ContentLayout>
  );
}
