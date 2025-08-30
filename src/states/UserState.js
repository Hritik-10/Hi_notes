import React, { useState } from 'react'
import userContext from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import Toast from '../components/Toast';

const UserState = (props) => {

    const [loggedin, setloggedin] = useState(false);
    const navigate = useNavigate();
    const [toastMsg, setToastMsg] = useState(""); 

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
                // console.log("Login Successful✅");
                showToast("Logged in successfully✅")
                localStorage.setItem("authToken", json.authToken)
                setloggedin(true);
                navigate('/home', { replace: true });
                return {success:true};
            }
            else {
                // console.log("Login failed❌");
                return { success: false, message: "Invalid credentials" };
            }

        } catch (error) {
            console.error("Error:", error.message);
            return { success: false, message: "Something went wrong. Please try again!" };
        }
    }

    const signup = async (user) => {
        if(user.name.length <3 || user.password.length<3){
            return {success: false, message: "Length of username / password should be greater than 3"}
        }
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
                // console.log("user created✅")
                localStorage.setItem("authToken", json.authToken)
                setloggedin(true);
                showToast("Account created successfully");
                navigate('/home', { replace: true });
                return {success:true};
            }
            else {
                // console.error("signup failed❌" + json.error)
                showToast(json.error);
                return { success: false, message: "Invalid credentials" };
            }
        } catch (error) {
            // console.error("Error:", error.message);
            return { success: false, message: "Something went wrong. Please try again!" };
        }
    }

    const logout = async () => {
        localStorage.removeItem("authToken")
        localStorage.removeItem("products-cache")
        setloggedin(false);
        navigate('/', { replace: true });
        showToast("Logout successfully!")

    }

    const showToast = (msg) => {
        setToastMsg(""); // Reset state to trigger re-render
        setTimeout(() => {
            setToastMsg(msg);
        }, 10); // Small delay ensures React recognizes the state change
    };


    return (
        <userContext.Provider value={{ login, signup, logout, showToast }}>
            {props.children}
            {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg("")} />}
        </userContext.Provider>
    );
}

export default UserState;