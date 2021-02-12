import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Form from "./Form";
import NotesList from "./NotesList";
import db from "./firebase";

function NotesApp() {
  const [inputText, setInputText] = useState("");
  const [notes, setNotes] = useState([]);

  //access the db and fetch all documents
  useEffect(() => {
    const unsubscribe = db.collectionGroup("notes").onSnapshot((snapshot) => {
      setNotes(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
        }))
      );
    });
  }, []);
  console.log("All data in 'notes' collection", notes);

  return (
    <div style={{ backgroundColor: "#f5f5f5", height: "100vh" }}>
      <Container>
        <div>
          <Typography variant="h2" component="h2">
            Jot your thoughts and keep it forever{" "}
          </Typography>
        </div>

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
