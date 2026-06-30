import { Button } from '@natures-beauty/ui';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap', padding: '16px' }}>
      <Button variant="primary">Request a Quote</Button>
      <Button variant="secondary">Learn More</Button>
      <Button variant="outline">View Gallery</Button>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete Project</Button>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
  );
}

export function LoadingAndFullWidth() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '320px' }}>
      <Button variant="primary" loading>Submitting Request…</Button>
      <Button variant="primary" fullWidth>Schedule Consultation</Button>
      <Button variant="outline" fullWidth>Download Brochure</Button>
    </div>
  );
}
