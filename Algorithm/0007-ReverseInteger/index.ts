export function reverse(x: number): number {
  const stringNumber = Number(String(Math.abs(x)).split('').reverse().join(''));
  const sup = 2147483647; //2^31
  if (stringNumber > sup ) {
    return 0; 
  } else if (x >= 0) {
    return stringNumber; 
  } else {
    return stringNumber * -1;
  }
}
