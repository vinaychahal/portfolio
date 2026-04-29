import ContentLayout from '@/components/content-layout';

export default function CaseStudyESec() {
  return (
    <ContentLayout
      title="Enterprise Risk Platform: Management & Compliance"
      category="Technical PM Impact"
      metrics={[
        { label: "Scope Creep", value: "-20%" },
        { label: "Efficiency", value: "+90%" },
        { label: "Role", value: "Core Builder / PM" },
      ]}
    >
      <h2>The Technical Challenge</h2>
      <p>
        At eSec Forte Technologies, we were building an enterprise compliance platform for top-tier Indian financial institutions. A critical component was generating massive, complex risk reports. The existing architecture was causing severe memory leaks and maxing out server CPU, resulting in a sluggish experience and delayed report generation.
      </p>

      <h2>The PM Lens: Defining Specs from User Needs</h2>
      <p>
        The engineering team wanted to rewrite the entire reporting service from scratch, a massive undertaking that would delay the release by months. Applying a PM lens, I dug into the actual user needs.
      </p>
      <p>
        Through stakeholder meetings with the compliance officers (our end-users), I discovered they didn't need real-time, synchronous generation for these massive reports. They were perfectly fine with asynchronous generation, provided they received an email notification upon completion.
      </p>

      <h2>Managing Engineering Resource Allocation</h2>
      <p>
        Armed with this refined requirement, I drafted a new technical spec. Instead of rewriting the service, we implemented a queuing system (like RabbitMQ/Redis) and shifted report generation to background worker nodes.
      </p>

      <h2>Cutting Scope Creep</h2>
      <p>
        By clearly defining what the user actually needed (asynchronous reliability) versus what engineering assumed they needed (synchronous speed), I cut the project scope by 20%. 
      </p>

      <h2>The Impact</h2>
      <p>
        This strategic technical decision boosted overall system efficiency by 90%, entirely resolving the memory leaks on the main application servers. The release was sped up significantly, and we delivered a stable, scalable feature that perfectly met the clients' compliance workflow needs.
      </p>
    </ContentLayout>
  );
}
