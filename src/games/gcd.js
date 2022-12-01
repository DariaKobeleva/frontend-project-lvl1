import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const gcd = () => {
  console.log('Find the greatest common divisor of given numbers?'); // Поле для вопроса

  for (let i = 0; i < 3; i += 1) {
    let resultGame;
    let correctAnswer;
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    let firstNumber = randomNumber1;
    let secondNumber = randomNumber2;
    if (randomNumber1 === randomNumber2) {
      correctAnswer = randomNumber1;
    }
    while (firstNumber % secondNumber !== 0) {
      correctAnswer = firstNumber % secondNumber;
      firstNumber = secondNumber;
      secondNumber = correctAnswer;
    }
    console.log(`${'Question:'} ${randomNumber1} ${randomNumber2}`);
    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log((resultGame = 'Correct!'));
    } else {
      resultGame = `"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(resultGame);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
