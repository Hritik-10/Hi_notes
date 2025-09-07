import React, { useContext, useEffect } from 'react'
import Notes from './Notes';
import AddNote from './AddNote';
import Navbar from './Navbar';

const Home = () => {

  return (
    <>
    <Navbar />
    <AddNote/>
    <Notes/>
    </>
  )
}

export default Home
