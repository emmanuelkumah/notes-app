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

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    borderRadius: "10px",
  },
  text: {
    fontFamily: "Roboto",
    fontSize: "1.5rem",
  },
});

function Note({ text }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.text}
            >
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button size="small" color="secondary" startIcon={<EditIcon />}>
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Note;
