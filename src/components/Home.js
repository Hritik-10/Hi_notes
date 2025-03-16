import React, { useContext, useEffect } from 'react'
import notesContext from '../context/notesContext'

const Home = () => {

  const a=useContext(notesContext);
  useEffect(()=>{a.update()},[])

  return (
    <div>
      This is Home page created by {a.notes.name} and it will change!!!
    </div>
  )
}

export default Home
