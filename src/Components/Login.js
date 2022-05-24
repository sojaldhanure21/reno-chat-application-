import axios from "axios";
import "../Styled/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  function ForgetData() {
    navigate("/forgetpassword");
  }
  function RegisterData(e) {
    navigate("/register");
  }

  function LoginData(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById("Email").value,
      password: document.getElementById("Password").value,
    };

    axios
      .post("http://localhost:3000/login", request)
      .then((res) => {
        if (res.statusText === "OK") {
          // get token from login api to handle chat message
          let sessiontoken = res.data.token;
          // to set token into session storage
          sessionStorage.setItem("token", sessiontoken);
          console.log('data from login',res.data)

          navigate("/chatbox");
        } else {
          window.alert("Login failed");
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  }
  return (
    <div className="loginBlock">
      <div className="loginDiv">
        <form onSubmit={(e) => LoginData(e)}>
          <div className="emailBlock">
            <label className="emailLabel">Email</label>
            <br />
            <input
              className="emailInput"
              type="email"
              placeholder="Enter Email..."
              id="Email"
            />
          </div>
          <div className="passwordBlock">
            <label className="passwordLabel">Password</label>
            <br />
            <input
              className="passwordInput"
              type="password"
              placeholder="Enter Password"
              id="Password"
            />
          </div>
          <br />
          <div className="submitBlock">
            <button className="loginButton" type="submit">
              Login
            </button>
          </div>
          <br />
          <div className="registerBlock">
            <button
              className="registerButton"
              type="button"
              onClick={RegisterData}
            >
              Sign Up
            </button>
            <br />
            <div className="forgetpasswordBlock">
              <button
                className="forgetButton"
                type="button"
                onClick={ForgetData}
              >
                Forget Password
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
