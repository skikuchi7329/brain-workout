function largestAltitude(gain: number[]): number {
  let max: number = 0;
  let cur: number = 0;
  let altitudes: number[] = [0];
  for (let i = 0;i < gain.length;i++) {
    cur += gain[i];
    altitudes.push(cur);
  }
  console.log(altitudes);
  max = Math.max(...altitudes);
  console.log(max);
  return max;
};

const test1 = [-5,1,5,0,-7];
largestAltitude(test1);

const test2 = [-4,-3,-2,-1,4,3,2];
largestAltitude(test2);