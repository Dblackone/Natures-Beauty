import { Input } from '@natures-beauty/ui';

export function BasicInputs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '400px' }}>
      <Input
        label="Full Name"
        placeholder="e.g. James Carter"
        helpText="As it appears on your ID."
      />
      <Input
        label="Email Address"
        placeholder="you@example.com"
        type="email"
      />
      <Input
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
        type="tel"
        errorText="Please enter a valid phone number."
      />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '400px' }}>
      <Input label="Small" size="sm" placeholder="Project title" />
      <Input label="Medium" size="md" placeholder="Project title" />
      <Input label="Large" size="lg" placeholder="Project title" />
    </div>
  );
}

export function WithAddons() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '400px' }}>
      <Input
        label="Budget"
        placeholder="250,000"
        leftAddon={<span style={{ padding: '0 8px' }}>$</span>}
        helpText="Estimated project budget in USD."
      />
      <Input
        label="Lot Size"
        placeholder="0.5"
        rightAddon={<span style={{ padding: '0 8px' }}>acres</span>}
      />
      <Input
        label="Website"
        placeholder="yourwebsite.com"
        leftAddon={<span style={{ padding: '0 8px' }}>https://</span>}
        fullWidth
      />
    </div>
  );
}
