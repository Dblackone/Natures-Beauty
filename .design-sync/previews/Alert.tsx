import { Alert } from '@natures-beauty/ui';

export function StatusVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '480px' }}>
      <Alert variant="success" title="Project Approved">
        Your custom home build proposal has been approved. We'll be in touch within 24 hours.
      </Alert>
      <Alert variant="info" title="Site Visit Scheduled">
        A team member will assess your lot on Friday between 9 AM and 12 PM.
      </Alert>
      <Alert variant="warning" title="Permit Pending">
        Building permits are still processing. Construction start may be delayed by 5–7 days.
      </Alert>
      <Alert variant="error" title="Payment Failed">
        We couldn't process your deposit. Please update your payment details.
      </Alert>
    </div>
  );
}

export function WithDismiss() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '480px' }}>
      <Alert variant="success" title="Quote Sent" onDismiss={() => {}}>
        Your quote request has been sent to our estimating team.
      </Alert>
      <Alert variant="warning" title="Unsaved Changes" onDismiss={() => {}}>
        You have unsaved changes to your project specifications.
      </Alert>
    </div>
  );
}

export function TitleOnly() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '480px' }}>
      <Alert variant="info" title="Office closed 26 Dec – 2 Jan for the holiday season." />
      <Alert variant="success" title="Your consultation is confirmed for Jan 8 at 10:00 AM." />
      <Alert variant="warning" title="Material costs have increased 4% since your last estimate." />
    </div>
  );
}
