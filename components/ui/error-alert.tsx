import classes from "./error-alert.module.scss";

function ErrorAlert(props: { children: React.ReactNode }) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
