import { useCallback, useState } from "react";

export const useNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState(null);

  // const getNotes = ()=>{}
  const createNote = useCallback((note) => {
    setCurrentNote(note);
  }, []);
  const addNote = useCallback(
    (note) => {
      setNotesList([...notesList, note]);
    },
    [notesList]
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
    },
    [notesList]
  );

  return { notesList, currentNote, createNote, addNote, deleteNote, editNote };
};
