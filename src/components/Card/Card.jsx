import { useState, useEffect, useRef } from "react";
import styles from "./Card.module.scss";
import classNames from "classnames";
import { Card as CardContainer, CardContent, Typography } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import CardInput from "./CardInput";
import CardButtons from "./CardButtons";

export default function Cards({
  cards,
  id,
  getNextQuestion,
  boost,
  crrExp,
  correct,
  correctCount,
}) {

  const [wrong, setWrong] = useState(0);

  const colors = {
    default: "#0C4BFA",
    success: "#248C46",
    fail: "#DD0D41",
  };

  const [cardcolor, setCardColor] = useState(colors.default);
  const isMounted = useRef(false);

  useEffect(() => {
    setCardColor(colors.success);

    setTimeout(() => {
      setCardColor(colors.default);
    }, 500);

  }, [correctCount]);

  useEffect(() => {
    setCardColor(colors.fail);

    setTimeout(() => {
      setCardColor(colors.default);
    }, 500);

  }, [wrong]);

  return (
    <div>
      <CardContainer
        className={classNames(styles.card)}
        sx={{ backgroundColor: `${cardcolor}` }}
      >
        <CardContent className={classNames(styles.cardContent)}>
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
    </div>
  );
}
