import readlineSync from "readline-sync";
import { userName } from "./cli.js";

const progression = () => {
  console.log("What number is missing in the progression?"); // Поле для вопроса

  for (let i = 0; i < 3; i += 1) {
    let arrProgression = [];
    const firstNumber = Math.round(Math.random() * 100);
    const stepProgression = Math.round(Math.random() * 9 + 1);
    const lengthProgression = Math.round(Math.random() * 5 + 5);
    let resultGame;

    for (let j = 0; j < lengthProgression; j += 1) {
      let item = firstNumber + j * stepProgression;
      arrProgression.push(item);
    }

    const randomIndex = Math.round(
      Math.random() * (arrProgression.length - 2) + 1
    );
    let correctAnswer = arrProgression[randomIndex];
    arrProgression[randomIndex] = "..";
    console.log(`${"Question:"} ${arrProgression.join(" ")}`); //Вопрос
    const answer = Number(readlineSync.question("Your answer: ")); //Ответ пользователя

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
export default progression;
