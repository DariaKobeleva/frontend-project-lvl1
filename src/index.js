const calc = () => {
  console.log("Question");

  for (let i = 0; i < 3; i += 1) {
    let resultGame;
    let question;
    let correctAnswer;

    console.log(`${"Question:"} ${question}`);

    const answer = Number(readlineSync.question("Your answer: ")); //Для чисел

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

//export default ;
