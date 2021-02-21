export function isPalindrome(x: number): boolean {
  const stringNumber = String(x).split('').reverse().join('');
  const sup = 2147483647;
  const fin = -2147483648;
  if (x < 0) {
    return false;
  } else if (x > sup || x < fin) {
    return false;
  } else if (x = stringNumber) {
    return true;
  }
};