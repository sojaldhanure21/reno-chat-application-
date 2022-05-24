import axios from "axios";
import { useEffect, useState } from "react";
// import "../../Styled/Chatmassage.css"
// let msg_id =  sessionStorage.getItem('msg-id')

// to get all messages
let messageReq = {
  receiverid: "628c7a2d09b78b4a44f5b38f",
};

// used for reply
let msgid = {
  receiverid: "628c7a2d09b78b4a44f5b38f",

  reply_id: "628c7bd209b78b4a44f5b397",

  Text: "This is replymsg",
};

// to store msg id
let delMsg ='628c7eaa09b78b4a44f5b3a1';

// main function
function ChatMassage() {
  // to manage states
  let [text, setEnteredText] = useState();
  let [sentmsg, msgSent] = useState();
  let [recvMsg, setReceivedMsg] = useState([]);
  let [msgEnterEdit, setEditMsg] = useState();
  // to get token from session Storage
  const token = sessionStorage.getItem("token");

  // to read all messages
  function readAllMessages() {
    console.log("tokentoken", token);
    axios
      .post("http://localhost:3000/GetMsg", messageReq, { headers: { token } })
      .then((res) => {
        setReceivedMsg(res.data);
        console.log("data for all messages", res.data);
      })
      .catch((error) => {
        alert(error);
      });
  }

  function msgEntered(event) {
    setEnteredText(event.target.value);
    console.log("message Entered", text);
  }

  // to send message
  function sendMessages() {
    //   token send in headers and request as normal
    msgSent(text);

    let request = {
      receiverid: "628c7a2d09b78b4a44f5b38f",
      Text: text,
    };
    console.log("request", request);

    axios
      .post("http://localhost:3000/message", request, { headers: { token } })
      .then((res) => {
        console.log("after message sent", res.data);
        sessionStorage.setItem("msg-id", res.data._id);
      })
      .catch((error) => {
        console.log(error );
      });
  }

  // to reply the message
  function replyMessage() {
    console.log("request for reply", msgid);
    axios
      .post("http://localhost:3000/message", msgid, { headers: { token } })
      .then((res) => {
        console.log("replydata", res.data);
        console.log("message id from storage");
      })
      .catch((error) => {
        alert(error);
      });
  }

  // to delete the message
  function deleteMessage() {
    axios
      .delete(`http://localhost:3000/deletemsg/${delMsg}`)
      .then((res) => {
        console.log("replydata", "message deleted", res.data);
        alert('Message Delete Successfully')
      })
      .catch((error) => {
        alert(error);
      });
  }

  // edit message entered
  
  function messageEnterForEdit(event) {
  
    axios
      .get("http://localhost:3000/messageUpdate")
      .then((res) => {
        console.log("edited message", res.data);
      })

      .catch((error) => {
        alert(error);
      });
    setEditMsg(event.target.value);
  }

  //  edit message axios
  function EditMessage() {
    const editmsg = {
      id: "628c88bb09b78b4a44f5b3a3",
      text: msgEnterEdit,
    };
    axios
      .patch("http://localhost:3000/messageUpdate", editmsg)
      .then((res) => {
        console.log("edited message", res.data);
      })

      .catch((error) => {
        alert(error);
      });
  }

  return (
    <div className="hello">
      Welcome to message
      <div>
        <label>enter message here</label>
        <input onChange={msgEntered}></input>
        <br />
        <label>{sentmsg}</label>
        <button onClick={replyMessage}>Reply</button>
        <button onClick={deleteMessage}>Delete</button>
        <br />
        <input type="text" onChange={messageEnterForEdit} name="Edit Message" />
        <button onClick={EditMessage}>Edit</button>
        <br />
        {/* <label>{recvMsg}</label> */}
        <button onClick={sendMessages}>Send</button>
        <br />
        readAllMessages
        <button onClick={readAllMessages}>read</button>
      </div>
    </div>
  );
}
export default ChatMassage;
