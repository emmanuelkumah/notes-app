import React from "react";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import firebase from "firebase";
import { makeStyles } from "@material-ui/core/styles";

//style the input text
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "60%",
    },
  },
  input: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  actionBtn: {
    width: "20px",
    marginRight: "50px",
    float: "right",
  },
}));

function Form({ input, setInput }) {
  const classes = useStyles();

  //get the input text
  const inputTextHandler = (event) => {
    setInput({ ...input, [event.target.name]: event.target.value });
  };
  console.log({ input });

  //Add doc to the collection
  const addNoteHandler = (event) => {
    event.preventDefault();
    //fetch the collection from db and add new note using  the following keys
    db.collection("notes").add({
      title: input.title,
      note: input.note,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //clear input fields on submit
    setInput({ title: "", note: "" });
  };

  return (
    <div>
      <form className={classes.root}>
        <TextField
          name="title"
          label="Title of note "
          variant="outlined"
          color="primary"
          value={input.title}
          onChange={inputTextHandler}
        />
        <TextField
          name="note"
          label="Jot your notes "
          variant="outlined"
          color="primary"
          value={input.note}
          onChange={inputTextHandler}
        />
        <div className={classes.actionBtn}>
          <Fab
            color="secondary"
            aria-label="add"
            type="submit"
            onClick={addNoteHandler}
          >
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default Form;
