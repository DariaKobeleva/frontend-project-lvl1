import readlineSync from "readline-sync";
import { userName } from "./cli.js";

const evenGame = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    let resultGame;
    const randomNumber = Math.round(Math.random() * 10);
    console.log(`${"Question:"} ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");

    const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";
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

export default evenGame;
