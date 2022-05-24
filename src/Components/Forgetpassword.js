import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Styled/Forgetpassword.css"

function Forgetpassword() {
  const navigate = useNavigate();

  function resetPassword(e) {
    e.preventDefault();
    let request = {
      email: document.getElementById("Email").value,
      password: document.getElementById("Password").value,
    };
    axios
      .patch("http://localhost:3000/login/forgot_password", request)
      .then((res) => {
        console.log(res.data);
        if (res.data === "success") {
          navigate("/login");
        } else {
          window.alert("cannot change the password");
        }
      })
      .catch((err) => {
        window.alert(err);
      });
  }

  return (
    <>
      <div className="mainBaground">
        <div className="mainBody">
          <span>Forget Password</span><br /><br />
          <form onSubmit={(e) => resetPassword(e)}>
            <div className="emailBlock">
              <label className="emailLabel">Email</label><br />
              <input
                className="emailInput"
                type="email"
                placeholder="Enter your email address..."
                name="email"
                id="Email"
                required
              />
            </div><br />
            <div className="passwordBlock">
              <label className="passwordLabel">Enter your new password</label><br />
              <input
                className="passwordInput"
                type="password"
                placeholder="Enter your password..."
                name="password"
                id="Password"
                required
              />
            </div><br />
            <div className="submitBlock">
              <button className="submitButton" type="submit">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Forgetpassword;
