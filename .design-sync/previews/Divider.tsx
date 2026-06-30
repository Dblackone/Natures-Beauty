import { Divider, Text, Button } from '@natures-beauty/ui';

export function Horizontal() {
  return (
    <div style={{ padding: '16px', maxWidth: '420px' }}>
      <Text size="lg" weight="semibold">Custom Home Build</Text>
      <Text size="base" color="secondary" style={{ marginTop: '4px' }}>
        Full design-to-delivery service for your dream home.
      </Text>
      <Divider />
      <Text size="base">Starting at $320,000 for a 2,000 sq ft build.</Text>
      <Divider />
      <Text size="sm" color="secondary">Permits, plans, and quality control included.</Text>
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ padding: '16px', maxWidth: '420px', display: 'flex', flexDirection: 'column', gap: '0' }}>
      <Text size="sm" color="secondary">Contact details</Text>
      <Divider label="or" />
      <Text size="sm" color="secondary">Schedule a site visit</Text>
      <Divider label="Services" />
      <Text size="sm" color="secondary">Custom Builds · Renovations · Extensions</Text>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
      <Button variant="ghost" size="sm">View Gallery</Button>
      <Divider orientation="vertical" />
      <Button variant="ghost" size="sm">Our Process</Button>
      <Divider orientation="vertical" />
      <Button variant="ghost" size="sm">Get a Quote</Button>
    </div>
  );
}
