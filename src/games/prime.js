import readlineSync from "readline-sync";
import { userName } from "./cli.js";

const prime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    let resultGame;
    const randomNumber = Math.round(Math.random() * 100);
    let correctAnswer = "";
    const isPrime = () => {
      if (randomNumber < 2) {
        return (correctAnswer = "no");
      }

      for (let i = 2; i <= randomNumber / 2; i += 1) {
        if (randomNumber % i === 0) {
          return (correctAnswer = "no");
        }
      }

      return (correctAnswer = "yes");
    };
    isPrime();

    console.log(`${"Question:"} ${randomNumber}`);

    const answer = readlineSync.question("Your answer: ");

    if (answer === correctAnswer) {
      console.log((resultGame = "Correct!"));
    } else {
      resultGame = `"${answer}" is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
      console.log(resultGame);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default prime;
