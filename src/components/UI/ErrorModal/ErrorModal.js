import Button from "../Button/Button";
import Card from "../Card";
import classes from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.action}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
}

export default ErrorModal;
