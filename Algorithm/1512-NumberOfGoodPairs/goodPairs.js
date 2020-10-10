const goodPairs = function (nums) {
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

module.exports = goodPairs;
