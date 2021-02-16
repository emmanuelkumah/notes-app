import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "@material-ui/core/Modal";
import EditIcon from "@material-ui/icons/Edit";
import db from "./firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    borderRadius: "5x",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

//modal function
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

function Note({ title, note, id }) {
  const [editNote, setEditNote] = useState({ title: title, note: note });
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

  //Edit doc from the collection
  // const editNoteHandler = (event) => {
  //   console.log(`The note to edit is ${title}`);
  // };

  //define the modal body
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //edit the note
  // const editNoteHandler =()=>{
  //   //update the doc with the new details
  //   db.collection("notes").doc(id).set(
  //     {
  //       title:
  //     }
  //   )

  // }

  //body of the note
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div>
        <Typography variant="h2" component="h2">
          Edit your note
        </Typography>
      </div>

      <Card>
        <CardActionArea>
          <CardContent>
            <div>
              <TextField
                id="outlined-basic"
                fullWidth
                label="Edit Title"
                variant="outlined"
                value={editNote.title}
                // onChange={editNoteHandler}
              />
            </div>
            <div>
              <TextField
                id="standard-multiline-flexible"
                fullWidth
                multiline
                rowsMax={6}
                value={editNote.note}
                // onChange={editNoteHandler}
              />
            </div>
          </CardContent>
          <CardActions>
            <Button color="primary">Save Note</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );

  return (
    <div>
      {/* <button type="button" onClick={handleOpen}>
        Open Modal
      </button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
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
          <Button
            size="small"
            color="secondary"
            startIcon={<EditIcon />}
            onClick={handleOpen}
          >
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
