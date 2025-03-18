import React, { useContext, useEffect } from 'react'
import notesContext from '../context/notesContext'
import Notes from './Notes';

const AddNote = () => {

    const nc=useContext(notesContext);
    const {}

    return (
    <div className="container my-2">
        <h2> Add a Note</h2>
        <form>
          <div className="form-group mt-3">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>*/}
          </div>
          <div className="form-group mt-3">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            {/* <label className="form-check-label" for="exampleCheck1">Check me out</label> */}
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
  )
}

export default AddNote
