function duplicateCount(text: string): number {
  const formatText = [...text.toLowerCase()].sort().join('');
  console.log(formatText);
  return (formatText.match(/([^])\1+/g) || []).length;
}

console.log(duplicateCount(""), '0');
console.log(duplicateCount("abcde"), '0');
console.log(duplicateCount("aabbcde"), '2');
console.log(duplicateCount("aabBcde"), '2,"should ignore case"');
console.log(duplicateCount("Indivisibility"), '1, character i repeated 7')
console.log(duplicateCount("Indivisibilities"), '2, characters may not be adjacent i and s')
console.log(duplicateCount("aA11"), '2, a and 1');
console.log(duplicateCount("ABBA"), '2, a and b');
