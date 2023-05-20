import { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { currentNote, adding, editing, addNote, editNote } =
    useContext(NotesContext);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    setTitle(currentNote.title);
    setMessage(currentNote.message);
  }, [currentNote]);

  const handleAdditing = (e) => {
    e.preventDefault();
    if (!title || !message) return;

    let newNote = {
      id: nanoid(10),
      title,
      message,
      date: new Date().toLocaleString(),
    };

    addNote(newNote);
    setTitle("");
    setMessage("");
  };

  const handleEditing = (e) => {
    e.preventDefault();
    if (!title || !message) return;

    let updatedNote = {
      id: currentNote.id,
      title,
      message,
      date: new Date().toLocaleString(),
    };
    editNote(updatedNote);
  };
  return (
    <>
      {adding && (
        <form onSubmit={handleAdditing}>
          <input
            type="text"
            placeholder="Type to add a note title"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="8"
            cols="15"
            placeholder="Type to add a note message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      )}
      {editing && (
        <form onSubmit={handleEditing}>
          <input
            type="text"
            value={title}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            rows="8"
            cols="15"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      )}
      {!adding && !editing && currentNote && (
        <>
          <h3>{currentNote.date}</h3>
          <p>{currentNote.title}</p>
          <p>{currentNote.message}</p>
        </>
      )}
    </>
  );
};
