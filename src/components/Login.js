import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import userContext from '../context/userContext';
import Toast from './Toast';

const Login = () => {

    const { login } = useContext(userContext);
    const [user, setUser] = useState({ email: "", password: "" })
    const [error, setError] = useState("");


    const onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleclick = async (e) => {
        e.preventDefault();

        const result = await login(user);

        if (!result.success) {
            setError(result.message);
        }
    }

    const [toastMessage, setToastMessage] = useState("");

    useEffect(() => {
        // ✅ Retrieve the stored toast message
        const message = localStorage.getItem("toastMessage");
        if (message) {
            setToastMessage(message);
            setTimeout(() => {
                setToastMessage("");
                localStorage.removeItem("toastMessage"); // Remove after display
            }, 3000); 
        }
    }, []);


    return (
        <>
            <section className="vh-100 d-flex flex-column">
            {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}
                <img
                    src="HB_logo.png"
                    className="position-absolute top-0 start-0 m-4"
                    style={{ borderRadius: "50%", height: "80px", width: "80px", objectFit: "cover" }}
                />
                <h1 className="position-absolute top-0 start-0 " style={{ margin: "37px  110px", height: "80px", width: "0px", objectFit: "cover", fontFamily: "cursive" }}>Hi_Notes</h1>

                <div className="container-fluid h-custom flex-grow-1 d-flex align-items-center">
                    <div className="row d-flex justify-content-center align-items-center w-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample image" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4">
                            <label className="form-label fw-bold" htmlFor="email" style={{ fontFamily: "cursive" }}><h2>Login</h2></label>
                            
                            {error && <div className="alert alert-danger">{error}</div>}

                            <form onSubmit={handleclick}>
                                <div data-mdb-input-init className="form-outline mb-4">
                                    <label className="form-label fw-bold" htmlFor="email">Email address</label>
                                    <input type='email' id="email" name="email" onChange={onchange} className="form-control form-control-lg"
                                        placeholder="Enter email address" required />
                                </div>

                                <div data-mdb-input-init className="form-outline mb-3">
                                    <label className="form-label fw-bold" htmlFor="password">Password</label>
                                    <input type="password" id="password" name='password' onChange={onchange} className="form-control form-control-lg"
                                        placeholder="Enter password" required />
                                </div>

                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg"
                                        style={{ paddingLeft: 20, paddingRight: 20 }}>Login</button>
                                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account?
                                        <Link className="link-danger" to={"/signup"}> Register</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-2 px-3 px-xl-5 bg-primary">
                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2025. All rights reserved.
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login        