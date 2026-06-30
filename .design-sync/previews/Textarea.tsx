import { Textarea } from '@natures-beauty/ui';

export function BasicTextareas() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '480px' }}>
      <Textarea
        label="Project Description"
        placeholder="Describe your project — scope, style, timeline, and any special requirements."
        helpText="The more detail you provide, the more accurate your estimate will be."
        rows={4}
      />
      <Textarea
        label="Additional Notes"
        placeholder="Anything else we should know before your consultation?"
        rows={3}
      />
    </div>
  );
}

export function WithHelpAndError() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '480px' }}>
      <Textarea
        label="Site Access Instructions"
        placeholder="e.g. Gate code is 1234. Call 30 minutes before arrival."
        helpText="Our team will use these to reach the site safely."
        rows={3}
      />
      <Textarea
        label="Special Requirements"
        placeholder="List any special requirements or constraints for the build."
        errorText="Please describe any requirements before submitting."
        rows={3}
        fullWidth
      />
    </div>
  );
}

export function ResizeModes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px', maxWidth: '480px' }}>
      <Textarea label="Vertical resize (default)" resize="vertical" rows={2} placeholder="Drag corner to resize vertically" />
      <Textarea label="No resize" resize="none" rows={2} placeholder="This textarea cannot be resized" />
      <Textarea label="Both directions" resize="both" rows={2} placeholder="Drag corner to resize in any direction" />
    </div>
  );
}
