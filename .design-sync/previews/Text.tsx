import { Text } from '@natures-beauty/ui';

export function TypeScale() {
  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '560px' }}>
      <Text size="5xl" display>Nature's Beauty</Text>
      <Text size="3xl">Custom Home Construction</Text>
      <Text size="xl" weight="semibold">Premium Craftsmanship</Text>
      <Text size="lg">Building homes that inspire for over 15 years.</Text>
      <Text size="base">From foundation to finish, we handle every detail of your project.</Text>
      <Text size="sm" color="secondary">Licensed & insured. Serving the greater metropolitan area.</Text>
    </div>
  );
}

export function DisplayFont() {
  return (
    <div style={{ padding: '24px', maxWidth: '480px' }}>
      <Text size="4xl" display weight="bold">Crafting Your Dream Home</Text>
      <Text size="xl" display>Spaces that feel like you</Text>
    </div>
  );
}

export function ColorVariants() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', maxWidth: '420px' }}>
      <Text color="primary">Primary — Request your consultation today.</Text>
      <Text color="secondary">Secondary — View our portfolio of completed projects.</Text>
      <Text color="accent">Accent — New: Sustainable building packages now available.</Text>
      <Text color="tertiary">Tertiary — Serving the greater metropolitan area.</Text>
      <Text color="disabled">Disabled — Feature coming soon.</Text>
    </div>
  );
}
