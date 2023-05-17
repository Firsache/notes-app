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
      transaction.oncomplete = function () {
        db.close();
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
    (newNote) => {
      // console.log(newNote);
      request.onsuccess = function () {
        console.log("request onsuccess");
        const db = request.result;
        const trx = db.transaction("notes", "readwrite");

        const notes = trx.objectStore("notes");
        const getReq = notes.add(newNote);

        getReq.onsuccess = (ev) => {
          console.log("getReq onsuccess");
          let request = ev.target;
          console.log({ request });
          getNotes();
          choseAdd();
        };
        getReq.onerror = (err) => {
          console.warn(err);
        };
        trx.oncomplete = function () {
          db.close();
        };
      };
    },
    [choseAdd]
  );

  const deleteNote = useCallback((noteId) => {
    // console.log(noteId);
    request.onsuccess = function () {
      console.log("request onsuccess");
      const db = request.result;
      const trx = db.transaction("notes", "readwrite");

      const notes = trx.objectStore("notes");
      const getReq = notes.delete(noteId);

      getReq.onsuccess = (ev) => {
        console.log("getReq onsuccess");
        let request = ev.target;
        console.log({ request });
        getNotes();
      };
      getReq.onerror = (err) => {
        console.warn(err);
      };
      trx.oncomplete = function () {
        db.close();
      };
    };
    // const newList = notesList.filter((note) => note.id !== noteId);
    // setNotesList(newList);
  }, []);

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
