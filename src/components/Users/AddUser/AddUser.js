import { useState } from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card";
import classes from "./AddUser.module.css";

function AddUser() {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();

    if (enteredUserName.trim().length === 0 || enteredAge.trim.length === 0) {
      return;
    }

    if (+enteredAge < 1) {
      return;
    }

    console.log(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  }

  function userNameChangeHandler(event) {
    setEnteredUserName(event.target.value);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          onChange={userNameChangeHandler}
          value={enteredUserName}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          id="age"
          onChange={ageChangeHandler}
          value={enteredAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
