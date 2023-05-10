import { useCallback, useState } from "react";

export const useNotes = () => {
  const [notesList, setNotesList] = useState([
    {
      id: 1,
      title: "First note",
      message: "This is the note",
      date: "08/09/2019",
    },
    {
      id: 2,
      title: "Wow",
      message: "This is a wow note",
      date: "11/29/2023",
    },
  ]);
  const [currentNote, setCurrentNote] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  // const getNotes = ()=>{}
  const choseNote = useCallback((note) => {
    setCurrentNote(note);
    setDisabled(false);
  }, []);

  const choseEdit = useCallback(() => {
    setEditing(!editing);
    setAdding(false);
  }, [editing]);

  const choseAdd = useCallback(() => {
    setAdding(!adding);
    setEditing(false);
  }, [adding]);

  const addNote = useCallback(
    (note) => {
      setNotesList([...notesList, note]);
      choseAdd();
    },
    [choseAdd, notesList]
  );

  const deleteNote = useCallback(
    (noteId) => {
      const newList = notesList.filter((note) => note.id !== noteId);
      setNotesList(newList);
    },
    [notesList]
  );

  const editNote = useCallback(
    (note) => {
      const newList = notesList.map((n) => (n.id === note.id ? note : n));
      setNotesList(newList);
      choseEdit();
    },
    [choseEdit, notesList]
  );

  return {
    notesList,
    currentNote,
    disabled,
    choseNote,
    editing,
    choseEdit,
    adding,
    choseAdd,
    addNote,
    deleteNote,
    editNote,
  };
};
