import React, { useContext, useState } from 'react'
import notesContext from '../context/notesContext';

const Noteitem = (props) => {
    const { note, updateNote  } = props;
    const {deleteNote}= useContext(notesContext);
   
    return (
        <>
        <div className="col-md-3">
            <div className="card my-3" style={{backgroundColor:"antiquewhite", borderRadius:"2px"}}>
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <h5 className="card-title">{note.title}</h5>
                        <img src='/edit.png'onClick={()=>{updateNote(note)}}  style={{ width: '20px', height: '20px', marginLeft:'10px', cursor:"pointer"}} alt="Edit" />
                        <img src='/bin.png' onClick={()=>{deleteNote(note._id)}} style={{ width: '20px', height: '20px', marginLeft:'10px' , cursor:"pointer"}} alt="Delete" />
                        
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
        </>
    )
}

export default Noteitem;
