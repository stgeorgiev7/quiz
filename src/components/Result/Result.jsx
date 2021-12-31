import styles from "./Result.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Result({ correctAnswers }) {
  const { motion } = require("framer-motion");

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  return (
    <div className={classNames(styles.container)} sx={{ display: "none" }}>
      <Typography
        variant="h1"
        className={classNames(styles.title)}
        component={motion.h1}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {correctAnswers > 5 ? "GREAT JOB" : "KEEP LEARNING!"}
      </Typography>
      <Typography
        variant="h1"
        className={classNames(styles.score)}
        component={motion.h1}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {correctAnswers}/10
        <span className={classNames(styles.description)}>
          QUESTIONS ANSWERED CORRECTLY
        </span>
      </Typography>
    </div>
  );
}
