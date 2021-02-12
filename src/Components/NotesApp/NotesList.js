import { Grid } from "@material-ui/core";
import React from "react";
import Note from "./Note";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function NotesList({ notes }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid xs={2} />
        <Grid xs={8}>
          {notes.map((note) => (
            <Grid item sm={12} md={4} key={note}>
              <Note text={note.text} id={note.id} />
            </Grid>
          ))}
        </Grid>
        <Grid xs={2} />
      </Grid>
    </div>
  );
}

export default NotesList;
