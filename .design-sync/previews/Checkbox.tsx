import { Checkbox } from '@natures-beauty/ui';

export function BasicForm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '380px' }}>
      <Checkbox
        label="I agree to the project terms and conditions"
        helpText="Review your contract before signing."
      />
      <Checkbox
        label="Send me project updates by email"
        helpText="Weekly progress reports and milestone alerts."
      />
      <Checkbox
        label="I consent to site access for inspections"
      />
    </div>
  );
}

export function States() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '16px', maxWidth: '380px' }}>
      <Checkbox
        id="checked-demo"
        label="Foundation work complete"
        defaultChecked
      />
      <Checkbox
        id="unchecked-demo"
        label="Framing inspection pending"
      />
      <Checkbox
        id="indeterminate-demo"
        label="Electrical rough-in (partially complete)"
        indeterminate
      />
      <Checkbox
        id="disabled-demo"
        label="Final walkthrough (not yet available)"
        disabled
      />
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '380px' }}>
      <Checkbox
        label="I have read and accept the warranty terms"
        errorText="You must accept the warranty terms to continue."
      />
      <Checkbox
        label="Property survey has been completed"
        helpText="Required before permit application."
        errorText="Please confirm the survey is on file."
      />
    </div>
  );
}
