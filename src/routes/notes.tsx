
import { useState, useEffect } from "react";
import Toast from "../components/Toast";

function Notes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState("");
  const [toast, setToast] = useState({ message: "", show: false });

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const showToast = (message: string) => {
    setToast({ message, show: true });
    setTimeout(() => {
      setToast({ message: "", show: false });
    }, 3000);
  };

  const addNote = () => {
    if (newNote.trim() !== "") {
      setNotes([...notes, newNote]);
      setNewNote("");
      showToast("Note added successfully!");
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
    showToast("Note deleted successfully!");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Ajouter une nouvelle note"
        />
        <button onClick={addNote} className="bg-blue-500 text-white p-2 ml-2">
          Ajouter une note
        </button>
      </div>
      <ul>
        {notes.map((note, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 border-b"
          >
            <span>{note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-500"
            >
              Suprimer
            </button>
          </li>
        ))}
      </ul>
      <Toast
        message={toast.message}
        show={toast.show}
        onDismiss={() => setToast({ message: "", show: false })}
      />
    </div>
  );
}
export const Component = Notes;
