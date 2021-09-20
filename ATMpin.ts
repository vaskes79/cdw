class Kata {
  static validatePin(pin: string): boolean {
    const regPattern = /^[\d]+$/;
    const lengthPin = [...pin].length;
    return (lengthPin === 4 || lengthPin === 6) && regPattern.test(pin);
  }
}

console.log(Kata.validatePin("1234"));
