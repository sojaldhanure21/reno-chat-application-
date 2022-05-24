import axios from "axios";
import { useEffect, useState } from "react";
// import "../../Styled/Contact.css";
// import Profile from "../../Styled/Images/profile.jpg"
function Contact() {
  const [contactList, setContactList] = useState([]);
 const request= { 
     'email': 'sdhanure8@gmail.com' }

  function chatStart(chatWith){
    
    console.log(chatWith)
  }

  useEffect(() => {
    axios.get("http://localhost:3000/getAllUsers")
    .then((res) => {
      alert('inside contactlist')
      setContactList(res.data);
    });
  }, []);

  console.log(contactList);

  return (
    <div className="contactBox">
      {contactList.map((ele) => {
        var chatWith = ele.username
        console.log(chatWith)
        return (
          <div className="contactList" onClick={(chatWith)=>chatStart(chatWith)}>
            {/* <img className="profilePic" src={Profile} alt="profilepic" /> */}
            <span className="profileName">{ele.username}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Contact;
