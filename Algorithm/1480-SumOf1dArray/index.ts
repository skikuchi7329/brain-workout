export  function SumOf1dArray (nums: number[]): number[] {
  const result = [];
  let acc = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      acc += nums[i];

      result.push(acc);
    }
  }
  return result;
}

