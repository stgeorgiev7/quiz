import { useState, useEffect, useRef } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { Card as CardContainer, CardContent, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CardInput from "./CardInput";
import CardButtons from "./CardButtons";
import Result from "../Result/Result"

export default function Cards({
  cards,
  id,
  getNextQuestion,
  boost,
  crrExp,
  correct,
  correctCount,
  timeOut
}) {
  const { motion } = require("framer-motion");
  const [wrong, setWrong] = useState(0);
  const [showCorrectAnswer, setCorrectAnswer] = useState("none");
  const [showWrongAnswer, setWrongAnswer] = useState("none");

  const isFirstRender = useRef(true);

  const colors = {
    default: "#0C4BFA",
    success: "#248C46",
    fail: "#DD0D41",
  };

  const [cardcolor, setCardColor] = useState(colors.default);

  const containerVariants={
    hidden: {
      opacity: 0,
      y: 300
    }, visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.5,
        times: 10
      }
    }
  }

  useEffect(() => {
    if (isFirstRender.current) {
      return;
    } else {
      setCardColor(colors.fail);
      setWrongAnswer("flex");

      setTimeout(() => {
        setCardColor(colors.default);
        setWrongAnswer("none");
      }, 800);
    }
  }, [wrong]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    } else {
      setCardColor(colors.success);
      setCorrectAnswer("flex");
      setTimeout(() => {
        setCardColor(colors.default);
        setCorrectAnswer("none");
      }, 800);
    }
  }, [correctCount]);

  return (
    <div>
      <CardContainer
        className={classNames(styles.card)}
        sx={{ backgroundColor: `${cardcolor}` }}
      >
        <CardContent
          className={classNames(styles.cardContent)}
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Typography className={classNames(styles.title)}>
            {cards[id]?.title}
          </Typography>
          <Typography className={classNames(styles.exp)}>
            +{cards[id]?.exp}xp
          </Typography>
          <SyntaxHighlighter
            language="javascript"
            showInlineLineNumbers
            customStyle
            style={docco}
            className={classNames(styles.code)}
          >
            {`${cards[id]?.question}`}
          </SyntaxHighlighter>

          {!cards[id]?.answers ? (
            <CardInput
              correctAnswer={cards[id]?.correctAnswer}
              next={getNextQuestion}
              cardExp={cards[id]?.exp}
              boost={boost}
              crrId={id}
              crrExp={crrExp}
              correct={correct}
              correctCount={correctCount}
              wrong={wrong}
              wrongCount={setWrong}
            />
          ) : (
            <CardButtons
              answers={cards[id]?.answers}
              correctAnswer={cards[id]?.correctAnswer}
              next={getNextQuestion}
              crrId={id}
              cardExp={cards[id]?.exp}
              boost={boost}
              crrExp={crrExp}
              correct={correct}
              correctCount={correctCount}
              wrong={wrong}
              wrongCount={setWrong}
            />
          )}
        </CardContent>
      </CardContainer>

      <Typography
        sx={{ display: showCorrectAnswer }}
        className={classNames(styles.correctNotification)}
      >
        CORRECT ANSWER!
      </Typography>

      <Typography
        sx={{ display: showWrongAnswer }}
        className={classNames(styles.wrongtNotification)}
      >
        WRONG ANSWER!
      </Typography>
      {id > 10  || timeOut ? <Result correctAnswers={correctCount}/> : <div />}
    </div>
  );
}
