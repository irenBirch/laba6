function checkBrackets(str) {
  const stack = [];
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let char of str) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();

      if (
        !lastOpeningBracket ||
        openingBrackets.indexOf(lastOpeningBracket) !==
          closingBrackets.indexOf(char)
      ) {
        // Не має відкриваючої дужки або вони не відповідають одна одній
        return false;
      }
    }
  }

  // Перевіряємо, чи весь стек порожній (всі дужки закриті правильно)
  return stack.length === 0;
}

// Приклад використання:
const code1 = "function someFn() { if (true) { return 'Valid code'; } }";
const code2 = "function someFn() { if (true) { return 'Invalid code'; } } ]";

console.log(checkBrackets(code1)); // Повинно повернути true
console.log(checkBrackets(code2)); // Повинно повернути false
