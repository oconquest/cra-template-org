const RandomNumbers = () => {
  let randomNumber = '';

  for (let i = 0; i < 4; i++) {
    const digit = Math.floor(Math.random() * 10); // Generates a random digit between 0 and 9
    randomNumber += digit;
  }

  return randomNumber;
};

export default RandomNumbers;
