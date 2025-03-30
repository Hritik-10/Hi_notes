import React, { useState } from 'react'
import userContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';

const UserState = (props) => {

    const [loggedin, setloggedin] = useState(false);
    const navigate = useNavigate();
    const login = async (user) => {

        try {
            const response = await fetch(`http://localhost:5000/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({ email: user.email, password: user.password })
            })

            const json = await response.json();
            if (json.authToken) {
                console.log("Login Successful✅");
                localStorage.setItem("authToken", json.authToken)
                setloggedin(true);
                navigate('/home', { replace: true });
                return {success:true};
            }
            else {
                console.log("Login failed❌");
                return { success: false, message: "Invalid credentials" };
            }

        } catch (error) {
            console.error("Error:", error.message);
            return { success: false, message: "Something went wrong. Please try again!" };
        }
    }

    const signup = async (user) => {
        try {
            const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: user.name, email: user.email, password: user.password })
            });
            const json = await response.json();
            if (json.authToken) {
                console.log("user created✅")
                localStorage.setItem("authToken", json.authToken)
                setloggedin(true);
                navigate('/home', { replace: true });
                return {success:true};
            }
            else {
                console.error("signup failed❌" + json.error)
                return { success: false, message: "Invalid credentials" };
            }
        } catch (error) {
            console.error("Error:", error.message);
            return { success: false, message: "Something went wrong. Please try again!" };

        }
    }

    const logout = async () => {
        localStorage.removeItem("authToken")
        setloggedin(false);
        navigate('/', { replace: true });
    }

    return (
        <userContext.Provider value={{ login, signup, logout }}>
            {props.children}
        </userContext.Provider>
    );
}

export default UserState;