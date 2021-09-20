// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript

const isPangram = (phrase: string): boolean => {
  const arr = phrase.toLowerCase().replace(/[^(A-Za-zA) \b]+/g, "");
  const uniqueCharcters = [...new Set(arr)].sort();
  return uniqueCharcters.length === 27;
};

console.log(
  isPangram("The quick   13  brown fox jumps over the lazy dog.  \t")
);
console.log(isPangram("This is not a pangram."));
