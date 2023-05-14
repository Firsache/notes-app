const indexedDB =
  window.indexedDB ||
  window.mozIndexedDB ||
  window.webkitIndexedDB ||
  window.msIndexedDB ||
  window.shimIndexedDB;

export let request = indexedDB.open("NotesDatabase", 1);

request.onerror = function (e) {
  console.error("Error", request.error);
  console.error(e);
};

request.onupgradeneeded = function () {
  const db = request.result;
  if (!db.objectStoreNames.contains("notes")) {
    const store = db.createObjectStore("notes", { keyPath: "id" });
    store.createIndex("notes_title", ["title"], { unique: false });
    store.createIndex("notes_message", ["message"], {
      unique: false,
    });
  }
};

request.onsuccess = function () {
  const db = request.result;
  const transaction = db.transaction("notes", "readwrite");

  const store = transaction.objectStore("notes");
  const titleIndex = store.index("notes_title");
  const messageIndex = store.index("notes_message");

  store.put({
    id: 1,
    title: "First note",
    message: "This is the note",
    date: "08/09/2019",
  });
  store.put({
    id: 2,
    title: "Wow",
    message: "This is a wow note",
    date: "11/06/2023",
  });
  store.put({
    id: 3,
    title: "Wow three",
    message: "This is a wow three note",
    date: "07/10/2023",
  });

  const idQuery = store.get(2);
  const titleQuery = titleIndex.getAll(["Wow"]);
  const messageQuery = messageIndex.getAll(["This is a wow three note"]);

  idQuery.onsuccess = function () {
    console.log("idQuery", idQuery.result);
  };

  titleQuery.onsuccess = function () {
    console.log("titleQuery", titleQuery.result);
  };
  messageQuery.onsuccess = function () {
    console.log("messageQuery", messageQuery.result);
  };
  transaction.oncomplete = function () {
    db.close();
  };
};