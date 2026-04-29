import ContentLayout from '@/components/content-layout';

export default function PRDPDF() {
  return (
    <ContentLayout
      title="Large-Scale PDF Generation (eSec Forte)"
      category="Product Requirement Document"
    >
      <h2>1. Overview</h2>
      <p><strong>Product Feature:</strong> Asynchronous Risk Report Generation Engine</p>
      <p><strong>Objective:</strong> Resolve memory leaks and server crashes caused by synchronous generation of massive compliance reports.</p>

      <h2>2. Problem Statement</h2>
      <p>When compliance officers at tier-1 financial institutions generate quarterly risk reports (often exceeding 500 pages with dense data tables), the synchronous HTTP request times out, and the server process consumes excessive memory, leading to application-wide instability.</p>

      <h2>3. Proposed Solution</h2>
      <p>Refactor the reporting service into an asynchronous queue-based architecture. Shift the heavy PDF generation workload off the main application servers onto dedicated background worker nodes.</p>

      <h2>4. Core Features & Requirements</h2>
      <h3>4.1 User Experience</h3>
      <ul>
        <li>When a user requests a report, the UI immediately returns a success message: "Report generation started. You will receive an email when it is ready."</li>
        <li>A "Reports Dashboard" showing the status of requested reports (Pending, Processing, Completed, Failed).</li>
      </ul>

      <h3>4.2 Technical Architecture</h3>
      <ul>
        <li>Implement a message broker (e.g., RabbitMQ or Redis).</li>
        <li>Spin up dedicated worker nodes specifically optimized for high memory allocation.</li>
        <li>Implement a retry mechanism: if a report fails to generate, the worker should retry up to 3 times before marking it as "Failed" in the database.</li>
      </ul>

      <h2>5. Success Metrics</h2>
      <ul>
        <li><strong>Primary:</strong> 0 downtime incidents related to memory leaks from the reporting service.</li>
        <li><strong>Secondary:</strong> Main application API response times remain under 200ms during peak reporting periods.</li>
      </ul>
    </ContentLayout>
  );
}
