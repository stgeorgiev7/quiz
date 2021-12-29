import { useEffect } from "react";
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
  exp,
  getNextQuestion,
  crrId,
  boost,
  crrExp,
}) {
  
  return (
    <div>
      <CardContainer className={classNames(styles.card)}>
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
            />
          ) : (
            <CardButtons
              answers={cards[id]?.answers}
              correctAnswer={cards[id]?.correctAnswer}
              next={getNextQuestion}
              crrId={crrId}
              cardExp={cards[id]?.exp}
              boost={boost}
              crrExp={crrExp}
            />
          )}
        </CardContent>
      </CardContainer>
    </div>
  );
}
