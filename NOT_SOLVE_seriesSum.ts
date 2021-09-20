function SeriesSum(n: number): string {
  this.sum: number = 0;

  function add() {
    sum = sum === 0 ? n : sum + sum / n;
    let result = sum.toFixed(2);
    return result;
  }

  return add();
}

// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
console.log(SeriesSum(0)); //, "1.00");
console.log(SeriesSum(1)); //, "1.00");
console.log(SeriesSum(2)); //, "1.25");
// console.log(SeriesSum(3)); //, "1.39");
// console.log(SeriesSum(4)); //, "1.49");
console.log(SeriesSum(5)); //, "1.49");
