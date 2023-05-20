import { useCallback, useState } from "react";
import request from "../db";

export const useNotes = () => {
  const [notesList, setNotesList] = useState([]);
  const [currentNote, setCurrentNote] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [editing, setEditing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [adding, setAdding] = useState(false);

  const getNotes = () => {
    request.onsuccess = () => {
      setNotes();
    };
  };
  const setNotes = () => {
    const db = request.result;
    const trx = db.transaction("notes", "readonly");

    const store = trx.objectStore("notes");
    const getReq = store.getAll();

    getReq.onsuccess = (ev) => {
      let req = ev.target;
      setNotesList(req.result);
    };
    getReq.onerror = (err) => {
      console.warn(err);
    };
    trx.oncomplete = function () {};
  };

  const choseNote = useCallback((note) => {
    setCurrentNote(note);
    setAdding(false);
    setDisabled(false);
  }, []);

  const choseEdit = useCallback(() => {
    setEditing(!editing);
    setAdding(false);
  }, [editing]);

  const choseAdd = useCallback(() => {
    setAdding(!adding);
    setEditing(false);
    setDisabled(true);
    setCurrentNote("");
  }, [adding]);

  const addNote = useCallback(
    (newNote) => {
      const db = request.result;
      const trx = db.transaction("notes", "readwrite");

      const store = trx.objectStore("notes");
      const getReq = store.add(newNote);
      getReq.onsuccess = () => {};
      getReq.onerror = (err) => {
        console.warn(err);
      };
      trx.oncomplete = function () {
        setNotes();
        choseAdd();
      };
    },
    [choseAdd]
  );

  const modalDelete = useCallback(() => {
    setModalOpen(!modalOpen);
  }, [modalOpen]);

  const deleteNote = useCallback(
    (noteId) => {
      const db = request.result;
      const trx = db.transaction("notes", "readwrite");

      const notes = trx.objectStore("notes");
      const getReq = notes.delete(noteId);

      getReq.onsuccess = (ev) => {};
      getReq.onerror = (err) => {
        console.warn(err);
      };
      trx.oncomplete = function () {
        setCurrentNote("");
        modalDelete();
        setDisabled(true);
        setNotes();
      };
    },
    [modalDelete]
  );

  const editNote = useCallback(
    (note) => {
      const db = request.result;
      const trx = db.transaction("notes", "readwrite");

      const store = trx.objectStore("notes");
      const getReq = store.put(note);
      getReq.onsuccess = () => {};
      getReq.onerror = (err) => {
        console.warn(err);
      };
      trx.oncomplete = function () {
        setNotes();
        choseEdit();
        setCurrentNote(note);
      };
    },
    [choseEdit]
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
    modalDelete,
    modalOpen,
    deleteNote,
    editNote,
  };
};
