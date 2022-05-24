// import "../../Styled/Profile.css";
// import {LogoutIcon, Search} from '@mui/icons-material/Logout';
// import ProfilePic from "../../Styled/Images/profile.jpg"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  function searchData(e){
    e.preventDefault()
    const request = document.getElementById("Search").value

    axios.get(`http://localhost:3000/message/search/${request}`)
    .then((res)=>{
      console.log("data from search",res)
    })
    .catch((error)=>{
      console.log(error)
    });

    }

  

  function redirectLogin(e) {
    e.preventDefault();
    navigate("/login");
  }
  return (
    <div className="Container">
      <div className='topbarLeft'>
      
        {/* <img src={ProfilePic} alt='not found' className="profileimg" /> */}
      
       <button onClick={redirectLogin} className="logData">LogoutIcon</button>
       <input type="search" placeholder="search" id="Search" onChange={(e)=>searchData(e)}/>
      </div>
    </div>
  );
}

export default Profile;