import styles from "./Header.module.scss";
import classNames from "classnames";
import { Grid } from "@mui/material";
import QuestionCount from "./QuestionCount";
import Timer from "./Timer";
import Expirience from "./Expirience";

export default function Header({ id, expirience }) {
  return (
    <Grid container
    justifyContent="center"
    gap={24}
    className={classNames(styles.gridContainer)}>
      <Grid item>
        <QuestionCount id={id} />
      </Grid>

      <Grid item>
          <Timer />
      </Grid>

      <Grid item>
        <Expirience expirience={expirience}/>
      </Grid>
    </Grid>
  );
}
