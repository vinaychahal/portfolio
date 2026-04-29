import ContentLayout from '@/components/content-layout';

export default function ReportBinaryTree() {
  return (
    <ContentLayout
      title="TheBinaryTree Beta Metrics Report"
      category="Data Analysis"
      metrics={[
        { label: "Beta Cohort", value: "50+" },
        { label: "Drop-off Reduction", value: "20%" },
        { label: "User Interviews", value: "12" },
      ]}
    >
      <h2>Executive Summary</h2>
      <p>
        This report details the quantitative data analysis and qualitative findings from the beta launch of TheBinaryTree's AI Dictation module. Our primary objective was to evaluate user friction during onboarding and determine if voice input could bridge the gap.
      </p>

      <h2>1. HubSpot CRM Tracking Lifecycle</h2>
      <p>
        We utilized HubSpot to track the end-to-end lifecycle of our 50+ beta users. By setting up strict pipeline stages (Invite Sent -{'>'} Account Created -{'>'} First Dictation Attempt -{'>'} Successful Submission), we identified the exact point of friction: <strong>78% of drop-offs occurred between "Account Created" and "First Dictation Attempt."</strong>
      </p>

      <h2>2. A/B Testing Results</h2>
      <p>
        We ran an A/B test routing 50% of traffic to the standard text-input onboarding, and 50% to the new "Tap Free" voice-first onboarding.
      </p>
      <ul>
        <li><strong>Control Group (Text):</strong> 45% completion rate.</li>
        <li><strong>Variant Group (Voice):</strong> 65% completion rate.</li>
      </ul>
      <p>
        This directly correlated to the 20% reduction in overall onboarding drop-offs.
      </p>

      <h2>3. Qualitative Synthesis</h2>
      <p>
        Beyond the dashboard metrics, I conducted 12 deep-dive user interviews. The data showed us <em>where</em> users were dropping off, but the interviews told us <em>why</em>. Users felt "blank page syndrome" when faced with a massive text box. The microphone icon served as a psychological permission slip to just start talking, lowering the cognitive barrier to entry.
      </p>

      <h2>Conclusion</h2>
      <p>
        The data unequivocally validated the MVP. By combining CRM lifecycle tracking with targeted A/B testing and qualitative interviews, we successfully refined the UI/UX and permanently integrated the dictation engine into the core product loop.
      </p>
    </ContentLayout>
  );
}
