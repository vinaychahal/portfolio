import ContentLayout from '@/components/content-layout';

export default function PRDDictation() {
  return (
    <ContentLayout
      title="AI Dictation Tool (TheBinaryTree)"
      category="Product Requirement Document"
    >
      <h2>1. Overview</h2>
      <p><strong>Product:</strong> Tap Free (AI Dictation Module)</p>
      <p><strong>Objective:</strong> Reduce user onboarding drop-off by removing the friction of text-based data entry.</p>

      <h2>2. Problem Statement</h2>
      <p>Currently, 78% of users abandon the onboarding flow when presented with the initial data entry text box. User interviews indicate "cognitive overload" and "typing fatigue" as the primary reasons. We need a frictionless way for users to input complex thought streams.</p>

      <h2>3. Target Audience</h2>
      <p>New users entering the platform for the first time, primarily accessing via mobile devices where typing long-form text is most difficult.</p>

      <h2>4. Proposed Solution</h2>
      <p>Implement a voice-to-text dictation engine prominently on the onboarding screen. The tool will capture spoken audio, transcribe it to text in real-time, and auto-populate the required data fields.</p>

      <h2>5. Core Features & Requirements</h2>
      <h3>5.1 User Interface (UI)</h3>
      <ul>
        <li>A prominent, single-action microphone button replacing the primary text area focus.</li>
        <li>Visual feedback indicating active listening (e.g., a pulsating animation or waveform).</li>
        <li>Real-time text preview as the user speaks.</li>
      </ul>

      <h3>5.2 Technical Capabilities</h3>
      <ul>
        <li>Must support background noise cancellation.</li>
        <li>Must accurately parse continuous speech without requiring explicit punctuation commands (e.g., "period", "comma").</li>
        <li>Latency between speech and text preview must be under 500ms.</li>
      </ul>

      <h2>6. Success Metrics</h2>
      <ul>
        <li><strong>Primary:</strong> 15% absolute reduction in onboarding drop-off rate within the first 30 days of launch.</li>
        <li><strong>Secondary:</strong> 50% adoption rate of voice input vs. text input among new users.</li>
      </ul>

      <h2>7. Out of Scope (For MVP)</h2>
      <ul>
        <li>Multi-language support (English only for MVP).</li>
        <li>Voice commands for platform navigation.</li>
        <li>Offline dictation capabilities.</li>
      </ul>
    </ContentLayout>
  );
}
