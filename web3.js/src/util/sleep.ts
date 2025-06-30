// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
// zzz
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}
