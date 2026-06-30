import { Select } from '@natures-beauty/ui';

const serviceOptions = [
  { value: 'custom-build', label: 'Custom Home Build' },
  { value: 'renovation', label: 'Renovation' },
  { value: 'extension', label: 'Room Addition' },
  { value: 'landscape', label: 'Landscape & Exterior' },
  { value: 'consultation', label: 'Design Consultation' },
];

const budgetOptions = [
  { value: 'under-100k', label: 'Under $100,000' },
  { value: '100-250k', label: '$100,000 – $250,000' },
  { value: '250-500k', label: '$250,000 – $500,000' },
  { value: '500k-plus', label: '$500,000+' },
];

const stateOptions = [
  { value: 'ca', label: 'California' },
  { value: 'tx', label: 'Texas' },
  { value: 'fl', label: 'Florida' },
  { value: 'ny', label: 'New York' },
  { value: 'other', label: 'Other', disabled: true },
];

export function BasicSelects() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '400px' }}>
      <Select
        label="Service Type"
        options={serviceOptions}
        placeholder="Select a service…"
        helpText="Choose the service that best fits your needs."
      />
      <Select
        label="Budget Range"
        options={budgetOptions}
        placeholder="Select budget range…"
      />
      <Select
        label="State"
        options={stateOptions}
        placeholder="Select your state…"
        errorText="We currently only serve CA, TX, FL, and NY."
      />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '400px' }}>
      <Select label="Small" size="sm" options={serviceOptions} placeholder="Select…" />
      <Select label="Medium" size="md" options={serviceOptions} placeholder="Select…" />
      <Select label="Large" size="lg" options={serviceOptions} placeholder="Select…" />
    </div>
  );
}

export function WithDisabledOption() {
  return (
    <div style={{ padding: '16px', maxWidth: '400px' }}>
      <Select
        label="Service Area"
        options={stateOptions}
        placeholder="Select your state…"
        helpText="'Other' states are not yet available."
        fullWidth
      />
    </div>
  );
}
