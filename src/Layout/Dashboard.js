import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBox from "../Components/ChatBox";
import Forgetpassword from "../Components/Forgetpassword";
import Login from "../Components/Login";
import Register from "../Components/Register"
function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="/forgetpassword" element={<Forgetpassword />} />
        <Route path="/register" element={<Register />}/>
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    </Router>
  );
}

export default Dashboard;
