import ContentLayout from '@/components/content-layout';

export default function MVPAdmissions() {
  return (
    <ContentLayout
      title="Enterprise Admissions Feature Launch"
      category="MVP Launch"
      metrics={[
        { label: "Active Users", value: "3M+" },
        { label: "Release Cycles", value: "4" },
        { label: "Cross-functional Teams", value: "3" },
      ]}
    >
      <h2>The Challenge</h2>
      <p>
        At Compro Technologies, our massive college admissions platform was serving over 3 million active users. During peak admission seasons, specific administrative modules became massive bottlenecks, slowing down both applicants and backend administrators.
      </p>

      <h2>The Strategic Feature MVP</h2>
      <p>
        We needed to deploy a new document verification module. Instead of a monolithic update, we treated this specific release cycle as a successful internal/external MVP. The goal was to validate the new verification workflow without disrupting the primary applicant funnel.
      </p>

      <h3>Execution:</h3>
      <ul>
        <li>Collaborated cross-functionally across 3 distinct engineering and QA teams to align raw development with the overarching product goals.</li>
        <li>Defined the minimum criteria required for the feature to be viable for university administrators.</li>
        <li>Ensured the feature delivery landed precisely on schedule across 4 aggressive release cycles.</li>
      </ul>

      <h2>The Result</h2>
      <p>
        By framing the specific release cycle as an MVP, we isolated risk and gathered immediate feedback from beta-testing administrators. This validated the core user need and allowed us to scale the verification module across the entire platform seamlessly.
      </p>
    </ContentLayout>
  );
}
