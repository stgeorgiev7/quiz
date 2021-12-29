import { useState, useEffect } from "react";
import classNames from "classnames";
import Card from "../src/components/Card/Card";
import Header from "../src/components/Header/Header";

export default function Home() {
  const [cardQuestions, setCard] = useState([]);
  const [expirience, setExp] = useState(0);
  const [id, setId] = useState(1);

  useEffect(async () => {
    const question = await fetch(
      `https://bumquiz-646a8-default-rtdb.europe-west1.firebasedatabase.app/questions/.json`
    );

    const response = await question.json();
    setCard(response)
    
  }, []);

  return (
    <div>
      <Header id={id} expirience={expirience} />
      <Card cards={cardQuestions} id={id} getNextQuestion={setId} crrExp={expirience} boost={setExp}/>
      {/* <Card
        title={cardQuestion?.title}
        exp={cardQuestion?.exp}
        question={cardQuestion?.question}
        correctAnswer={cardQuestion?.correctAnswer}
        answers={cardQuestion?.answers}
        getNextQuestion={setId}
        crrId={id}
        boost={setExp}
        crrExp={expirience}
      /> */}
    </div>
  );
}
