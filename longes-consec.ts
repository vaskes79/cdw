// my solution
// function longestConsec(strarr: string[], k: number): string {
//   const n = strarr.length;
//   let result = "";
//   if (n === 0 || n < k || k <= 0) {
//     return result;
//   }
//   const concatedStrArr = strarr.map((_, i, strarr) =>
//     strarr.slice(i, i + k).join("")
//   );
//   concatedStrArr.forEach((str) => {
//     if ([...result].length < [...str].length) {
//       result = str;
//     }
//   });

//   return result;
// }

// best solution using reduce
export function longestConsec(strarr: string[], k: number): string {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return "";
  }

  return strarr.reduce((defender, _, idx, target) => {
    const challenger = target.slice(idx, idx + k).join("");

    return challenger.length > defender.length ? challenger : defender;
  }, "");
}

// Tests
// ---------------------------------------------------------------------------------
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2),
  "   abigailtheta"
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ),
  "   oocccffuucccjjjkkkjyyyeehh"
);
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3),
  "   ixoyx3452zzzzzzzzzzzz"
);
