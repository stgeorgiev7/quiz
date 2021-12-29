import styles from "./QuestionCount.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function QuestionCount({ id }) {
  return (
    <div className={classNames(styles.container)}>
      <Typography variant="h3" className={classNames(styles.counter)}>
        {id}/10
      </Typography>
      <span className={classNames(styles.questions)}>QUESTIONS</span>
    </div>
  );
}
