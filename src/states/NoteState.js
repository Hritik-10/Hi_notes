import notesContext from "../context/notesContext";

import React, { useState } from 'react'

const NoteState = (props) => {

    const intial_notes = [
      {
        "_id": "67d556f059f0757defd3684b",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "mobile",
        "description": "8gb 256 gb",
        "tag": "oneplus",
        "__v": 0
      },
      {
        "_id": "67d55905e42a3f3b2f1660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67d55905e424tff3b201660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67d55905e42argey5rtb201660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67d55905e42,uim3b201660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67d55905e42a3f3bdvvs1660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67dvdd5905e42a3f3b201660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      },
      {
        "_id": "67d55dv905e42a3f3b201660de",
        "user": "67d530d58df0be8e907bcf5b",
        "title": "rama",
        "description": "chinche khali basloy",
        "tag": "hritik",
        "__v": 0
      }
    ]
    const [notes,setNotes] =useState(intial_notes);

    const addNote=  (title,description,tag) => {
      //to do api call to save note
      setNotes(notes.push(note))
    }
    const updateNote =()=>{
      //api call to update
    }

    const deleteNote =()=>{
      //api call to delete
    }


  return (
    <notesContext.Provider value={{notes,setNotes}}>
        {props.children}
    </notesContext.Provider>

  )
}

export default NoteState;

