// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
export default function (
  condition: unknown,
  message?: string,
): asserts condition {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}
