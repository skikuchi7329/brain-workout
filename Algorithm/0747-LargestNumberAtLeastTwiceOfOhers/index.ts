export function dominantIndex (nums: number[]): number {
  let max = 0; // 最大値
  let maxIndex = 0; // 最大値のindex
  let second = 0; // 2位
  for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
      // maxよりも大きい場合
      second = max; // 今のmaxをsecondにし
      max = nums[i]; // その大きい値をmaxにいれる
      maxIndex = i; // indexも保管しておく
    } else if (second < nums[i]) {
      // 2位よりも大きく1位以下の場合
      second = nums[i]; // secondを更新
    }
  }
  if (max >= second * 2) {
    // maxが2位の2倍以下なら indexを返す
    return maxIndex;
  }
  return -1;
};