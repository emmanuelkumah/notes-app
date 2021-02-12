import React from "react";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
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

function Form({ inputText, setInputText }) {
  const classes = useStyles();

  //get the input text
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  //Add notes to the db
  const addNoteHandler = (event) => {
    //prevent browser refresh
    event.preventDefault();
    //fetch the collection from db and add new note
    db.collection("notes").add({
      text: inputText,
    });
    setInputText("");
  };

  return (
    <div>
      <form className={classes.root}>
        <TextField
          label="Jot your notes "
          variant="outlined"
          color="primary"
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
