import { useState, useEffect } from "react";
import styles from "./CardInput.module.scss";
import classNames from "classnames";
import { Button, TextField, InputAdornment } from "@mui/material";

export default function CardInput({
  correctAnswer,
  next,
  cardExp,
  boost,
  crrId,
  crrExp,
  correct,
  correctCount,
  wrong,
  wrongCount
}) {
  const [currentAnswer, setAnswer] = useState("");

  function handleAnswer(e) {
    setAnswer(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (currentAnswer === correctAnswer) {
      correct(correctCount + 1);
      next(crrId + 1);
      boost(crrExp + cardExp);
    } else {
      wrongCount(wrong + 1);
      next(crrId + 1);
    }
  }

  return (
    <form className={classNames(styles.wrapper)} onSubmit={handleSubmit}>
      <TextField
        className={classNames(styles.input)}
        onChange={handleAnswer}
        fullWidth
        variant="standard"
        placeholder="Write asnwer here"
        size="small"
        value={currentAnswer}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button className={classNames(styles.submit)}>
                ↩ PRESS ENTER TO SUBMIT
              </Button>
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      ></TextField>
    </form>
  );
}
