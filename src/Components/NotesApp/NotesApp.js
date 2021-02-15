import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import Form from "./Form";
import NotesList from "./NotesList";
import db from "./firebase";

function NotesApp() {
  const [input, setInput] = useState({
    title: "",
    note: "",
  });
  const [notes, setNotes] = useState([]);

  // access the db and fetch all documents
  useEffect(() => {
    const unsubscribe = db.collection("notes").onSnapshot((snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setNotes(data);
    });
  }, []);

  return (
    <div>
      <Container>
        <div>
          <Typography variant="h2" component="h2">
            Jot your thoughts and keep it forever{" "}
          </Typography>
        </div>

        <Form
          input={input}
          setInput={setInput}
          notes={notes}
          setNotes={setNotes}
        />
        <NotesList notes={notes} />
      </Container>
    </div>
  );
}

export default NotesApp;
