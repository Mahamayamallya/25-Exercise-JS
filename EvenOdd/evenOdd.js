/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/
function evenOrOdd(number) {
  let result = number % 2 === 0 ? "Even" : "Odd";
  return result;
}
