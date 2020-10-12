const balancedStringSplit = function(s) {
  
  for (let i = 0; i < s.length; i++) {
    const result = 0;
    const countR = 0;
    const countL = 0;
    if (s.charAt(i) === "R") {
      countR++;
    } else if (s.charAt(i) === "L") {
      countL++;
    } else if (countR === countL) {
      result++;
    }
  }
  return result;
}


const s = "RLRRLLRLRL";
console.log(balancedStringSplit(s));