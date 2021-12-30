import styles from "./Title.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { Typography, Button } from "@mui/material";

export default function Title() {
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

  const buttonVariants = {
    hidden: {
        opacity: 0,
        scale: 1
    },
    visible: {
        opacity: 1,
        scale: 1.20,
        transition: {
            delay: 1.1,
            yoyo:4  
        },
        
    }
  }

  return (
    <div className={classNames(styles.container)}>
      <Typography
        variant="h1"
        className={classNames(styles.title)}
        component={motion.h1}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        BOOM QUIZ
      </Typography>
      <Link href="/questions">
        <Button
          variant="contained"
          size="large"
          className={classNames(styles.button)}
          component={motion.button}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
       
        >
          START
        </Button>
      </Link>
    </div>
  );
}
