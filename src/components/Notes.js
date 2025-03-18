import {useContext} from 'react'
import notesContext from '../context/notesContext';
import Noteitem from './Noteitem';

const Notes = () => {
    const {notes,setNotes} = useContext(notesContext);

  return (
    <div className="container">
        <h2> My notes</h2>
        <div className='row'>
        {notes.map((note)=>{
          return <Noteitem key={note.id} note={note}/>
          })}
            </div>
          {/* {notes && notes.length > 0 ? (
                notes.map((note) => <Noteitem key={note.id} note={note} />)
            ) : (
                <p>No notes available</p>
            )} */}
          
      </div>
  )
}

export default Notes;
