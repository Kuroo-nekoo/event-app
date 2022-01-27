import { ReactElement } from "react";
import classes from "./event-content.module.scss";

function EventContent(props: { children: ReactElement }) {
  return <section className={classes.content}>{props.children}</section>;
}

export default EventContent;
