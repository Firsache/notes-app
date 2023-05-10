import { useContext } from "react";
import { NotesContext } from "../../context/NotesContext";

export const Workspace = () => {
  const { currentNote, choseNote, adding, editing, addNote, editNote } =
    useContext(NotesContext);

  const handleEditing = (e) => {
    choseNote(e.target.value);
    editNote(currentNote);
  };

  const handleAdditing = (e) => {
    choseNote(e.target.value);
    addNote(currentNote);
  };

  return (
    <>
      {adding && (
        <textarea
          rows="8"
          cols="15"
          placeholder="Type to add a note"
          onChange={handleAdditing}
        />
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
