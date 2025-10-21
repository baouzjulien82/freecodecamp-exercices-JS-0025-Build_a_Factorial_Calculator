// Première version

const num = 19;
const factorialCalculator = (number) => {
  let result = 1;
  let i = 1;
  while(i <= number){
    result = result * i;
    i++;
  }
  return result;
}
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)

// Version avec for

const num = 19;
const factorialCalculator = (number) => {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
};
const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
