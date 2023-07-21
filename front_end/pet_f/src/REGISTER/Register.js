import { useState } from "react";
import data from "../DATA/data";
import { Link } from "react-router-dom";
import "../REGISTER/Register.css";
import { toast } from "react-hot-toast";

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
                    toast.success("signed up successfully")
                    window.location.href = "/login";
                }
                else {
                    toast.error("there was some error");
                }
            }
            )
    }
    return (
        <>
            <div className="h">
            <h5><label>FIRST NAME:</label></h5>
                <input type="text" id="Firstname" placeholder="enter first name"onChange={(e) => { setFirstname(e.target.value) }}></input>
                <h5><label>LAST NAME:</label></h5>
                <input type="text" id="Lastname" placeholder="enter last name" onChange={(e) => { setLastname(e.target.value) }}></input>
                <h5><label>EMAIL:</label></h5>
                <input type="text" id="email" placeholder="enter user name" onChange={(e) => { setEmail(e.target.value) }}></input>
                <h5><label>PASSWORD:</label></h5>
                <input type="text" id="password" placeholder="enter password" onChange={(e) => { setPassword(e.target.value) }}></input>
                <br></br>
                <br></br>
                <button onClick={handleSignup} className="b">REGISTER</button> 
                <h5>Aldready registerd??  <Link to="/login">< a href="/">Login</a></Link></h5>
                
            </div>
        </>
    )
}

export default Register;