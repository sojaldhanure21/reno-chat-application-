import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register(){

    const navigate = useNavigate() 

    function registerUser(e){
        e.preventDefault()
        let request = {
            username: document.getElementById("Username").value,
            email: document.getElementById("Email").value,
            password: document.getElementById("Password").value
        }
        axios.post("http://localhost:3000/register",request).then((res)=>{
            console.log("status about Register",res)
            // if(res.statusText==="Created"){
            //     navigate("/login")
            // }else{
            //     window.alert("Unable to process")
            // }
        })
        .catch((err)=>{
            window.alert(err)
        })
    }

    return(
        <>
        <div>
            <form onSubmit={(e)=>registerUser(e)}>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter your Username" id="Username" name="username" required/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" id="Email" name="email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter your password" id="Password" name="password" required />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        </div>
        </>
    )
}
export default Register