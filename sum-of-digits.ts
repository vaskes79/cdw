// https://www.codewars.com/kata/541c8630095125aba6000c00
//
//  16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digitalRoot = (n: number): number => {
  let arrNum: number[] = n
    .toString()
    .split("")
    .map((num) => parseInt(num));

  if (arrNum.length === 1) {
    return arrNum[0];
  }

  let sum = arrNum.reduce((a, b) => a + b);
  return digitalRoot(sum);
};

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
console.log(digitalRoot(493193));
