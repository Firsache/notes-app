import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { currentNote, choseNote, adding, editing, addNote, editNote } =
    useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleEditing = (e) => {
    choseNote(e.target.value);
    editNote(currentNote);
  };

  const handleAdditing = (e) => {
    e.preventDefault();
    if (!title || !message) return;

    let newNote = {
      id: nanoid(10),
      title,
      message,
      date: new Date(),
    };

    addNote(newNote);
    setTitle("");
    setMessage("");
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
      {editing && currentNote && (
        <textarea
          rows="8"
          cols="15"
          value={currentNote.message}
          onChange={handleEditing}
        />
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
