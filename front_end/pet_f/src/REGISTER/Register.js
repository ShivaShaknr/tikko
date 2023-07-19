import { useState } from "react";
import data from "../DATA/data";
import { Link } from "react-router-dom";
import "../REGISTER/Register.css";

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [firstname, setFirstname] = useState();
    const [lastname, setLastname] = useState();
    const handleSignup = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/signup", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },
            body: JSON.stringify({
                email,
                password,
                firstname,
                lastname
            }),

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "signup");
                if (data.status == "ok") {
                    alert("signed up successfully")
                    window.location.href = "/main";
                }
                else {
                    alert("there was some error");
                }
            }
            )
    }
    return (
        <>
            <div className="reg-main">
                <label>email : </label>
                <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }}></input>
                <label>Password : </label>
                <input type="text" id="password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <label>First Name : </label>
                <input type="text" id="Firstname" onChange={(e) => { setFirstname(e.target.value) }}></input>
                <label>Last Name : </label>
                <input type="text" id="Lastname" onChange={(e) => { setLastname(e.target.value) }}></input>
                <span><button onClick={handleSignup}>signup</button> 
                <Link to="/login">
                    <h1>login</h1>
                </Link>
                </span>
            </div>
        </>
    )
}

export default Register;