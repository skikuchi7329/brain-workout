export function sumZero (n: number): number[] {
  let arr = [];
  arr.length = n;
  for (let i = 0; i < arr.length; i++){
    if (arr.length == 1){
      arr.push(0);
    } else if (arr.length >= 1 && arr.length % 2 == 1){
    
    } 
  }
  return arr;

};

const n = 1;
console.log(sumZero(n));