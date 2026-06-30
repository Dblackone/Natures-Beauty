import { Avatar } from '@natures-beauty/ui';

export function Sizes() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px', flexWrap: 'wrap' }}>
      <Avatar size="xs" name="James Carter" alt="James Carter" />
      <Avatar size="sm" name="Maria Lopez" alt="Maria Lopez" />
      <Avatar size="md" name="David Kim" alt="David Kim" />
      <Avatar size="lg" name="Sarah Chen" alt="Sarah Chen" />
      <Avatar size="xl" name="Robert Nash" alt="Robert Nash" />
    </div>
  );
}

export function StatusIndicators() {
  return (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', padding: '16px' }}>
      <Avatar size="lg" name="Emma W" alt="Emma W" status="online" />
      <Avatar size="lg" name="Liam T" alt="Liam T" status="away" />
      <Avatar size="lg" name="Noah B" alt="Noah B" status="busy" />
      <Avatar size="lg" name="Olivia M" alt="Olivia M" status="offline" />
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
      <Avatar size="lg" name="James Carter" variant="circle" alt="James Carter" />
      <Avatar size="lg" name="Maria Lopez" variant="square" alt="Maria Lopez" />
      <Avatar size="lg" name="David Kim" variant="circle" status="online" alt="David Kim" />
      <Avatar size="lg" name="Sarah Chen" variant="square" status="away" alt="Sarah Chen" />
    </div>
  );
}
