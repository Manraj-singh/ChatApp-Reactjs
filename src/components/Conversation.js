import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";
import { sendMessage } from "../actions";

// used styled component to show acccording to prop
const MessageDiv = styled.div`
  justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
  display: flex;
  margin: 5px 16px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 19px;
  border-radius: 5px;
`;

//*Conversation component
const Conversation = ({
  messageList,
  contactList,
  dispatch,
  message,
  type,
}) => {
  //*Gets the user from params to display its messages
  const { userId = "u1" } = useParams();
  //Local states
  const [messagesList, setMessagesList] = useState([]);
  const [currUser, setCurrUser] = useState({});
  const [newMsg, setNewMsg] = useState("");

  useEffect(() => {
    const updatedList = messageList[userId] ? messageList[userId] : [];
    setMessagesList(updatedList);
    const usr = contactList.find((usr) => usr.id === userId);
    setCurrUser(usr);
  }, [userId, messageList[userId]]);

  //*below function gets called when clicked on send message icon
  const handleSendMessage = () => {
    dispatch(sendMessage({ id: userId || "u1", text: newMsg }));
    setNewMsg(" ");
  };

  return (
    <div className="conversationsContainer">
      <div className="profileHeader">
        <img className="profileImage" alt="profile" src={currUser.profilePic} />
        {currUser.name}
        <p>{currUser.online}</p>
      </div>
      <div className="messageContainer">
        {messagesList.map((messageData, index) => (
          <MessageDiv key={index} isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {[messageData.text]}{" "}
            </Message>
          </MessageDiv>
        ))}
      </div>
      <div className="chatBox">
        <div className="searchContainer">
          <img className="emojiImage" alt="emoji" src={"/data.svg"} />
          <input
            value={newMsg}
            onChange={(e) => setNewMsg(e.target.value)}
            className="searchInput"
            placeholder="Type a message"
          />
          <img
            onClick={handleSendMessage}
            className="emojiImage"
            alt="emoji"
            src="https://img.icons8.com/external-inkubators-blue-inkubators/1x/external-send-ecommerce-user-interface-inkubators-blue-inkubators.png"
          />
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    messageList: state.messageList,
    contactList: state.contactList,
    message: state.toast_message,
    type: state.toast_message_type,
  };
}
export default connect(mapStateToProps)(Conversation);
