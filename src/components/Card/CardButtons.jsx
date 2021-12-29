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
  crrId
}) {
  function handleClick(e) {
    e.preventDefault();
    if (e.target.value == correctAnswer) {
      alert("Correct Answer!");
      boost(crrExp + cardExp);
      next(crrId + 1);
    } else {
      alert("Wrong Answer");
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
