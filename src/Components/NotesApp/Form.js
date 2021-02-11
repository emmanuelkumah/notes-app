import React from "react";
import { Fab, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core/styles";

//style the input text
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "65ch",
    },
  },
  actionBtn: {
    float: "right",
  },
}));

function Form({ inputText, setInputText, notes, setNotes }) {
  const classes = useStyles();

  //get the input text
  const inputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  //submit the input text
  const submitTextHandler = (event) => {
    // console.log("the input is " + inputText);
    event.preventDefault();
    const addNotes = { id: "id", note: inputText, completed: false };
    //grab all the notes, and add the new note
    setNotes([...notes, addNotes]);
    setInputText("");
  };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          label="Jot your notes "
          variant="outlined"
          //   id="outlined-full-width"
          placeholder="Write your notes here"
          color="primary"
          onChange={inputTextHandler}
        />
        <div className={classes.actionBtn}>
          <Fab color="secondary" aria-label="add" onClick={submitTextHandler}>
            <AddIcon />
          </Fab>
        </div>
      </form>
    </div>
  );
}

export default Form;
