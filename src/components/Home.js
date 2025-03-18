import React, { useContext, useEffect } from 'react'
import notesContext from '../context/notesContext'
import Notes from './Notes';
import AddNote from './AddNote';

const Home = () => {

  return (
    <>
    <AddNote/>
    <Notes/>
    </>
  )
}

export default Home
