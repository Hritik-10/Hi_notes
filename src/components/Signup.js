import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';

const Signup = () => {

    const [user, setUser] = useState({ name: "", email: "", password: "", confirmPassword: "" })
    const [error, setError] = useState("");
    const {signup}= useContext(userContext);

    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const onsubmit =  async (e) => {
        e.preventDefault()
        // API Call 
        if (user.password !== user.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        const result = await signup(user);
        if (!result.success) {
            setError(result.message);
        }
    }

    return (
        <section className="d-flex flex-column justify-content-center align-items-center vh-100">
            {/* Logo and Title */}
            <div className="position-absolute top-0 start-0 d-flex align-items-center m-4">
                <img
                    src="HB_logo.png"
                    className="me-2"
                    style={{ borderRadius: "50%", height: "50px", width: "50px", objectFit: "cover" }}
                />
                <h1 style={{ fontFamily: "cursive", margin: "0" }}>Hi_Notes</h1>
            </div>

            {/* Signup Form */}
            <div className="container card">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-10 col-lg-6 ">
                        <div className="p-4 bg-light ">
                            <p className="text-center h1 fw-bold mb-4" style={{ fontFamily: "cursive" }}>Sign up</p>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={onsubmit} typeof='POST'>
                                <div className="mb-3">
                                    <label className="form-label fw-bold " htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name='name' onChange={onchange} className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold" htmlFor="email">Your Email</label>
                                    <input type="email" id="email"name='email' onChange={onchange} className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold" htmlFor="password">Password</label>
                                    <input type="password" id="password" name='password' onChange={onchange} className="form-control" required />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold" htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" id="confirmPassword" name='confirmPassword' onChange={onchange} className="form-control" required />
                                </div>

                                <div className="d-flex flex-column align-items-center">
                                    <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                    
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account?   
                                        <Link className="link-danger " to={"/"}> Login</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="col-md-10 col-lg-6 d-flex align-items-center">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid" alt="Signup Illustration" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
