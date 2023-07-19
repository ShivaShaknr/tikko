import { useState } from "react";
import "../LOGIN/Login.css"
export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleLogin = (e) => {
        e.preventDefault();
        fetch("http://localhost:4000/login", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",

            },
            body: JSON.stringify({
                email,
                password
            }),

        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "login successful");
                if (data.status == "ok") {
                    alert("login Successful");
                    window.localStorage.setItem("token", data.data);
                    window.location.href = "./main"
                }
                else {
                    alert("login Failed , Try again")
                }
            })
    }
    return (
        <div className="login-main">
            <label>email : </label>
            <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }}></input>
            <label>Password : </label>
            <input type="text" id="password" onChange={(e) => { setPassword(e.target.value) }}></input>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}