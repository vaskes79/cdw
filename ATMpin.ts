class Kata {
  static validatePin(pin: string): boolean {
    const pinPattern: RegExp = new RegExp(/^\d{4}(\d{2})?$/);
    return pinPattern.test(pin);
  }
}

console.log(Kata.validatePin("1234"), "1234 true");
console.log(Kata.validatePin("123456"), "123456 true");
console.log(Kata.validatePin("1234567"), "1234567 false");
console.log(Kata.validatePin("a1234"), "a1234 false");
console.log(Kata.validatePin("234"), "234 false");
console.log(Kata.validatePin("1"), "1 false");
