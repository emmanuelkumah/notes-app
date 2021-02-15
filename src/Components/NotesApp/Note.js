import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import db from "./firebase";

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    borderRadius: "5x",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
  },
});

function Note({ title, note, id }) {
  const classes = useStyles();

  //Delete doc from the collection
  const deleteNoteHandler = (event) => {
    db.collection("notes")
      .doc(id)
      .delete()
      .then(() => console.log("Document Deleted"))
      .catch((error) => console.error("error deleting document", error));
    // console.log(`The id is ${id}  and the note is ${title}`);
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              variant="h2"
              color="primary"
              component="h2"
              className={classes.text}
            >
              {title}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.text}
            >
              {note}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="secondary" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            size="small"
            color="primary"
            startIcon={<DeleteIcon />}
            onClick={deleteNoteHandler}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;
