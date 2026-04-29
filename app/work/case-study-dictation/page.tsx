import ContentLayout from '@/components/content-layout';

export default function CaseStudyDictation() {
  return (
    <ContentLayout
      title="Solving Dictation Drop-off"
      category="Impact Case Study"
      metrics={[
        { label: "User Interviews", value: "12" },
        { label: "Drop-off Rate", value: "78%" },
        { label: "Solution", value: "Core Engine Reshape" },
      ]}
    >
      <h2>The Problem: The 78% Wall</h2>
      <p>
        During the early stages of TheBinaryTree platform, we identified a catastrophic leak in our onboarding funnel: 78% of users were dropping off immediately after creating an account, right when they were asked to input their initial data.
      </p>

      <h2>The Discovery Phase (The "Why")</h2>
      <p>
        Quantitative data tells you what is happening; qualitative data tells you why. I initiated a sprint of 12 deep-dive user interviews to observe the exact moment of friction.
      </p>
      <p>
        The insight was profound: users were experiencing "blank page syndrome." The platform required complex, nuanced input, and typing it out on a mobile device or even a desktop was cognitively exhausting. They were quitting due to the anticipated effort of typing, not because they didn't want the product's value.
      </p>

      <h2>Shaping the Core Engine (The "How")</h2>
      <p>
        Armed with this insight, I pivoted the product strategy. Instead of trying to gamify the typing experience or break the form into smaller steps, we changed the input mechanism entirely. 
      </p>
      <p>
        I authored the PRD for an AI-driven dictation engine. We didn't need a conversational AI; we needed a highly accurate transcription tool that could parse rambling thought streams into structured text.
      </p>

      <h2>The Impact</h2>
      <p>
        By reshaping the core engine around voice input, we completely bypassed the friction point. The perceived effort dropped to near zero: users just had to talk. This single strategic pivot directly solved the 78% drop-off rate and fundamentally improved the core product loop.
      </p>
    </ContentLayout>
  );
}
