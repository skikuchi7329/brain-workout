export function goodPairs(nums: number[]): number {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        result.push([i, j]);
      }
    }
  }
  return result.length;
};


