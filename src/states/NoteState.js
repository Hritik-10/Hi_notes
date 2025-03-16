import notesContext from "../context/notesContext";

import React, { useState } from 'react'

const NoteState = (props) => {

    const note1 = {
        "name":"Hritik"
    }
    const [notes,setNotes] =useState(note1);

    const update =()=>{ 
      setTimeout(()=>{setNotes({"name":"aaaa"})}, 1000)
    }

  return (
    <notesContext.Provider value={{notes,update}}>
        {props.children}
    </notesContext.Provider>

  )
}

export default NoteState;

