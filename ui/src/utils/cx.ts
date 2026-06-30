/** Lightweight className combiner. */
export function cx(...classes: (string | number | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
