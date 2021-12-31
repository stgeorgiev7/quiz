import { useState, useEffect } from "react";
import classNames from "classnames";
import Card from "../../src/components/Card/Card";
import Header from "../../src/components/Header/Header";
import Result from "../../src/components/Result/Result";

export default function Questions() {
  const [cardQuestions, setCard] = useState([]);
  const [expirience, setExp] = useState(0);
  const [id, setId] = useState(1);
  const [correct, setCount] = useState(0);
  const [timeOut, setTimeout] = useState(false);

  useEffect(async () => {
    const question = await fetch(
      `https://bumquiz-646a8-default-rtdb.europe-west1.firebasedatabase.app/questions/.json`
    );

    const response = await question.json();
    setCard(response);
  }, []);


  return (
    <div>
      <Header id={id} expirience={expirience} time={setTimeout}/>
      <Card
        cards={cardQuestions}
        id={id}
        getNextQuestion={setId}
        crrExp={expirience}
        boost={setExp}
        correct={setCount}
        correctCount={correct}
        timeOut={timeOut}
      />
    </div>
  );
}
