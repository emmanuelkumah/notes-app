import { Grid } from "@material-ui/core";
import React from "react";
import Note from "./Note";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  // paper: {
  //   height: 140,
  //   width: 100,
  // },
  //   control: {
  //     padding: theme.spacing(2),
  //   },
}));

function NotesList({ notes }) {
  return (
    <div>
      <Grid container justify="center" spacing={3}>
        {notes.map((note) => (
          <Grid key={note} item md={4}>
            <Note note={note.note} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default NotesList;
