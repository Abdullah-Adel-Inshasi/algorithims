function isOneWithLowestVision(number) {
  // Insert your code here
  // So I'll begin by creating an object that holds the digits in the integer as a key and an array of visible numbers from that integer
  const numberArray = number.toString().split("");
  const numbers = {};

  // Get visible numbers After index
  for (let i = 0; i < numberArray.length; i++) {
    numbers[i] = {
      numbers: numberArray.slice(i + 1, Number(i + Number(numberArray[i]) + 1)),
    };
  }

  // Get visible numbers before index
  for (let i = 0; i < numberArray.length; i++) {
    numbers[i] = {
      numbers: numbers[i].numbers.concat(
        numberArray.slice(Math.max(0, +i - +numberArray[i]), i)
      ),
    };
  }

  for (number in numbers) {
    numbers[number].sum = numbers[number].numbers.reduce(
      (acc, value) => acc + +value,
      0
    );
    numbers[number].hasOne = !!numbers[number].numbers.find(
      (number) => number === "1"
    );
  }

  const indexOfNumbersWhichCanSee1 = Object.keys(numbers).filter(
    (number) => numbers[number].hasOne
  );

  let result = indexOfNumbersWhichCanSee1[0];
  for (number of indexOfNumbersWhichCanSee1) {
    if (numbers[number].sum < numbers[result].sum) {
      result = number;
    }
  }
  return { index: +result, number: +numberArray[result] };
}

console.log(isOneWithLowestVision(2561548192151));
