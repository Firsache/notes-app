import { useContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { NotesContext } from "../../context/NotesContext";
import { Form, Message, Wrapper } from "./Workspace.styled";
import { MdDownloadDone } from "react-icons/md";

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
      date: new Date().toString(),
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
      date: new Date().toString(),
    };
    editNote(updatedNote);
  };

  const d = new Date(currentNote?.date).toDateString().split(" ");
  const getDate = [d[1], `${d[2]},`, d[3]].join(" ");
  const getTime = new Date(currentNote?.date).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <>
      {adding && (
        <Form onSubmit={handleAdditing}>
          <input
            type="text"
            maxlength="50"
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
          <button type="submit">
            <MdDownloadDone size="20px" />
          </button>
        </Form>
      )}
      {editing && (
        <Form onSubmit={handleEditing}>
          <input
            type="text"
            maxlength="50"
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
          <button type="submit">
            <MdDownloadDone size="20px" />
          </button>
        </Form>
      )}
      {!adding && !editing && currentNote && (
        <Wrapper>
          <h3>{`${getDate} at ${getTime}`}</h3>
          <Message>
            <p>{currentNote.title}</p>
            <p>{currentNote.message}</p>
          </Message>
        </Wrapper>
      )}
    </>
  );
};
