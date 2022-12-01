import readlineSync from 'readline-sync';
import { userName } from './cli.js';

const calc = () => {
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    let resultGame;
    const randomNumber1 = Math.round(Math.random() * 100);
    const randomNumber2 = Math.round(Math.random() * 100);
    const operationNumber = Math.round(Math.random() * 100) % 3;
    let question;
    let correctAnswer;
    switch (operationNumber) {
      case 0:
        question = `${randomNumber1} - ${randomNumber2}`;
        correctAnswer = randomNumber1 - randomNumber2;
        break;

      case 1:
        question = `${randomNumber1} + ${randomNumber2}`;
        correctAnswer = randomNumber1 + randomNumber2;
        break;

      case 2:
        question = `${randomNumber1} * ${randomNumber2}`;
        correctAnswer = randomNumber1 * randomNumber2;
        break;

      default: console.log('Unexpected value');
    }

    console.log(`${'Question:'} ${question}`);

    const answer = Number(readlineSync.question('Your answer: '));

    if (answer === correctAnswer) {
      console.log((resultGame = 'Correct!'));
    } else {
      resultGame = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(resultGame);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default calc;
