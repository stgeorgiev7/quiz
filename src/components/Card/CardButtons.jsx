import { useState } from "react";
import styles from "./CardButtons.module.scss";
import classNames from "classnames";
import { Grid, Button } from "@mui/material";

export default function CardButtons({
  answers,
  correctAnswer,
  next,
  cardExp,
  boost,
  crrExp,
  crrId,
  correct,
  correctCount,
  wrong,
  wrongCount
}) {
  function handleClick(e) {
    e.preventDefault();
    if (e.target.value == correctAnswer) {
      correct(correctCount + 1);
      boost(crrExp + cardExp);
      next(crrId + 1);
    } else {
      wrongCount(wrong + 1);
      next(crrId + 1);
    }
  }

  return (
    <Grid container direction="row" gap={3} justifyContent="center">
      {answers?.map((crrBtn, index) => {
        return (
          <Grid item key={index}>
            <Button
              variant="text"
              size="large"
              className={classNames(styles.buttons)}
              value={crrBtn}
              onClick={handleClick}
            >
              {crrBtn}
            </Button>
          </Grid>
        );
      })}
    </Grid>
  );
}
