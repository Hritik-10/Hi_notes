import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import userContext from '../context/userContext';
import notesContext from '../context/notesContext';
const Navbar = () => {
   const { logout } = useContext(userContext);
   const { searchNotes } = useContext(notesContext);

   const [query, setQuery] = useState("");

   const handleSearch = (e) => {
      e.preventDefault();
      searchNotes(query);
   };
   const OnChange = (e) => {
      setQuery(e.target.value);
      searchNotes(e.target.value);
   };

   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <img
            src="HB_logo_nbg.png"
            className="position-absolute  top-5 start-0 "
            style={{ borderRadius: "50%", height: "50px", width: "50px", objectFit: "cover" }}
         />
         <Link className="navbar-brand mx-5" to="/" style={{ fontFamily: "cursive" }}>Hi Notes</Link>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>

         <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">

               <li className="nav-item active">
                  <Link className="nav-link" to="/home">Home </Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/About">About</Link>
               </li>
            </ul>

            <form className="d-flex align-items-center" onSubmit={handleSearch}>
               <input className="form-control mr-sm-2 m-3" type="search" placeholder="Search" value={query} onChange={OnChange} aria-label="Search" />
               <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
               <button className="btn btn-outline-secondary bg-white my-2 my-sm-0 mx-2" type="submit" onClick={logout}>Logout</button>
            </form>
         </div>
      </nav>
   )
}

export default Navbar
