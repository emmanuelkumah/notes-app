import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Form from "./Form";
import NotesList from "./NotesList";

function NotesApp() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  console.log("the new note is " + notes);
  //access the db and fetch all documents
  useEffect(() => {
    console.log("app has rendered");
  }, []);
  return (
    <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
      <Container>
        <Typography variant="h2" component="h2">
          Jot your thoughts and keep it forever{" "}
        </Typography>
        <Form
          inputText={inputText}
          setInputText={setInputText}
          notes={notes}
          setNotes={setNotes}
        />
        <NotesList notes={notes} />
      </Container>
    </div>
  );
}

export default NotesApp;
