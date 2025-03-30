import notesContext from "../context/notesContext";

import React, { useState } from 'react'

const NoteState = (props) => {

  const [notes, setNotes] = useState([]);
               
  const fetchAllNotes = async () => {
    const token = localStorage.getItem("authToken");
    const resp = await fetch("http://localhost:5000/api/notes/fetchallnotes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      }
    })
    const initial_notes = await resp.json();
    setNotes(initial_notes);
  }

  const addNote = async (title, description, tag) => {
    //api call to save note-
    const token = localStorage.getItem("authToken");
    const response = await fetch("http://localhost:5000/api/notes/addnote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
      body: await JSON.stringify({ title, description, tag }),
    })
    const data = await response.json();
    if (response.ok) {
      const note = {
        "_id": data._id,
        "user": data.user,
        "title": data.title,
        "description": data.description,
        "tag": data.tag,
        "__v": 0
      }
      setNotes(notes.concat(note));
    }
    else {
      console.error("error in adding note:", data.error);
    }
  }
  const editNote = async(id, title,description,tag) => {
    
      // API Call 
      const token = localStorage.getItem("authToken");
      const response = await fetch(`http://localhost:5000/api/notes/update/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "auth-token": token
        },
        body: JSON.stringify({title, description, tag})
      });
      const json = await response.json(); 
  
       let newNotes = JSON.parse(JSON.stringify(notes))
      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      }  
      setNotes(newNotes);
    }
    // end
  

  const deleteNote = async (id) => {
    //api call to delete
    const token = localStorage.getItem("authToken");
    const new_note = notes.filter((note) => { return note._id !== id })
    setNotes(new_note);

    const response = await fetch(`http://localhost:5000/api/notes/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token
      },
    }
    )
    const json = response.json(); 
  }



  return (
    <notesContext.Provider value={{ notes, addNote, fetchAllNotes, deleteNote, editNote }}>
      {props.children}
    </notesContext.Provider>

  )
}

export default NoteState;

