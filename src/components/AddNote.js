import React, { use, useContext, useEffect, useState } from 'react'
import notesContext from '../context/notesContext'
import Notes from './Notes';

const AddNote = () => {

    const nc=useContext(notesContext);
    const {notes, addNote} =nc;
    const [ note, setNote] =useState({title:'',description:'',tag:'default'});

    const onchange = (e)=>{
        setNote({...note, [e.target.name]:e.target.value})
    }
    const onclick = (e)=>{
      e.preventDefault();
      addNote(note.title,note.description,note.tag);
    }

    return (
    <div className="container my-3">
        <h2> Add a Note</h2>
        <form>
          <div className="form-group mt-3">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" onChange={onchange} placeholder="Enter title" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
          </div>
          <div className="form-group mt-3">
            <label htmlFor="p">Description</label>
            <input type="text" className="form-control" id="description" name="description" onChange={onchange} placeholder="Enter description" />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="tag">tag</label>
            <input type="text" className="form-control" id="tag"  name="tag" onChange={onchange} placeholder="Enter tag"/>
            {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
          </div>
          <button type="submit" className="btn btn-primary mt-3" onClick={onclick}>Submit</button>
        </form>
      </div>
  )
}

export default AddNote
