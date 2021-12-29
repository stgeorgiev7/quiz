import styles from "./Experience.module.scss";
import classNames from "classnames";
import { Typography } from "@mui/material";

export default function Expirience({ expirience }) {
  return (
    <div className={classNames(styles.container)}>
      <Typography variant="h3" className={classNames(styles.exp)}>
        {expirience}xp
      </Typography>
      <span className={classNames(styles.total)}>TOTAL XP</span>
    </div>
  );
}
