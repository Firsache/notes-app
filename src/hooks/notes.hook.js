import { useCallback, useState } from "react";
import { request } from "../db";

export const useNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);

  const getNotes = () => {
    request.onsuccess = function () {
      const db = request.result;
      const transaction = db.transaction("notes", "readonly");

      const store = transaction.objectStore("notes");
      const getReq = store.getAll();

      getReq.onsuccess = (ev) => {
        let request = ev.target;
        setNotesList(request.result);
      };
      getReq.onerror = (err) => {
        console.warn(err);
      };
    };
  };
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
      request.onsuccess = function () {
        const db = request.result;
        const transaction = db.transaction("notes", "readwrite");

        const store = transaction.objectStore("notes");
        const getReq = store.add(note);

        getReq.onsuccess = (ev) => {
          let request = ev.target;
          console.log({ request });
          getNotes();
          choseAdd();
        };
        getReq.onerror = (err) => {
          console.warn(err);
        };
      };
    },
    [choseAdd]
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
    getNotes,
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
