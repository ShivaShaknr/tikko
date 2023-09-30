import { useState } from "react";
import { Link } from "react-router-dom";
import "../LOGIN/Login.css"
import { toast } from "react-hot-toast";
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
                    toast.success("login Successful");
                    window.localStorage.setItem("token", data.data);
                    window.localStorage.setItem("email",email);
                     window.localStorage.setItem("loggedIn", true);
                     
                     
                    window.location.href = "./main"
                }
                else {
                    toast.error("login Failed , Try again")
                }
            })
    }
    return (
       
        <div className="h">
        
     
     
        <h5><label>USERNAME:</label></h5>
        <input type="text" placeholder="enter email" class="user" onChange={(e) => {setEmail(e.target.value)}}/>
        <br/>
        <h5><label>PASSWORD:</label></h5>
        <input type="password" placeholder="enter password" class="password" onChange={(e) => {setPassword(e.target.value)}}/>
        <br/>
        <br/>
        <button className="b" onClick={handleLogin}>LOGIN</button>
        <h5>Are you new user?? <Link to='/register'><a href="/">Register</a></Link></h5>
        
      </div>
        // <div className="login-main">
        //     <label>email : </label>
        //     <input type="text" id="email" onChange={(e) => { setEmail(e.target.value) }}></input>
        //     <label>Password : </label>
        //     <input type="text" id="password" onChange={(e) => { setPassword(e.target.value) }}></input>
        //     <button onClick={handleLogin}>Login</button>
        // </div>
    )
}