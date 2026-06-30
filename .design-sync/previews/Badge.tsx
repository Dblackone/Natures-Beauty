import { Badge } from '@natures-beauty/ui';

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', padding: '16px', alignItems: 'center' }}>
      <Badge variant="primary">Featured</Badge>
      <Badge variant="secondary">New</Badge>
      <Badge variant="success">Approved</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="error">Overdue</Badge>
      <Badge variant="info">In Review</Badge>
      <Badge variant="default">Draft</Badge>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '16px' }}>
      <Badge variant="primary" size="sm">Small</Badge>
      <Badge variant="primary" size="md">Medium</Badge>
      <Badge variant="success" size="sm">On Track</Badge>
      <Badge variant="success" size="md">On Track</Badge>
      <Badge variant="warning" size="sm">Delayed</Badge>
      <Badge variant="warning" size="md">Delayed</Badge>
    </div>
  );
}

export function DotMode() {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', padding: '16px', alignItems: 'center' }}>
      <Badge variant="success" dot>Active project</Badge>
      <Badge variant="warning" dot>Permit pending</Badge>
      <Badge variant="error" dot>Action needed</Badge>
      <Badge variant="info" dot>Under review</Badge>
      <Badge variant="default" dot>Archived</Badge>
    </div>
  );
}
