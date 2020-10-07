function SumOf1dArray (nums) {
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

// const nums = [1,2,3,4];
// console.log(SumOf1dArray(nums));
module.exports = SumOf1dArray;