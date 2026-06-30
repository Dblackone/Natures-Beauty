import { Card, Badge, Button } from '@natures-beauty/ui';

export function ServiceCard() {
  return (
    <div style={{ padding: '16px', maxWidth: '340px' }}>
      <Card variant="raised" padding="lg">
        <Card.Header>
          <Badge variant="primary">Featured Service</Badge>
          <div style={{ marginTop: '8px', fontWeight: '600', fontSize: '18px' }}>
            Custom Home Build
          </div>
        </Card.Header>
        <Card.Body>
          <div style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--color-text-secondary)' }}>
            Full design-to-delivery service. We manage permits, contractors, and quality control.
          </div>
        </Card.Body>
        <Card.Footer>
          <div style={{ display: 'flex', gap: '8px' }}>
            <Button variant="primary" size="sm">Get a Quote</Button>
            <Button variant="ghost" size="sm">View Projects</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', padding: '16px', maxWidth: '380px' }}>
      <Card variant="default" padding="md">
        <Card.Body><div style={{ fontSize: '13px' }}>Default</div></Card.Body>
      </Card>
      <Card variant="raised" padding="md">
        <Card.Body><div style={{ fontSize: '13px' }}>Raised</div></Card.Body>
      </Card>
      <Card variant="outlined" padding="md">
        <Card.Body><div style={{ fontSize: '13px' }}>Outlined</div></Card.Body>
      </Card>
      <Card variant="filled" padding="md">
        <Card.Body><div style={{ fontSize: '13px' }}>Filled</div></Card.Body>
      </Card>
    </div>
  );
}

export function Interactive() {
  return (
    <div style={{ padding: '16px', maxWidth: '300px' }}>
      <Card variant="raised" interactive padding="lg">
        <Card.Header>
          <div style={{ fontWeight: '600', fontSize: '16px' }}>Renovation Services</div>
        </Card.Header>
        <Card.Body>
          <div style={{ fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
            Kitchen & bath remodels, room additions, and exterior upgrades.
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
