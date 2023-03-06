import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { showAddConversationModal } from "../actions";

//mini component for modal to show individual contacts to select from
const ContactModalComponent = ({ userData, dispatch }) => {
  //when clicked on contact thr modal closes by dispatching action
  const handleModal = () => {
    dispatch(showAddConversationModal(false));
  };
  return (
    <div onClick={handleModal} className="contactItem">
      <img className="profileIcon" alt="icon" src={userData.profilePic} />
      <div className="contactInfo">
        <div className="contactName"> {userData.name}</div>
        <div className="messageText">{userData.online}</div>
      </div>
      {/* <div className="messageTime">10:04 PM</div> */}
    </div>
  );
};

function AddConversationModal({ contactList, dispatch }) {
  return (
    <div className="wrapper">
      <div className="modalContainer">
        Select a contact to chat:
        {contactList.map((userData, index) => (
          <Link
            key={index}
            to={{ pathname: `/${userData.id}`, state: userData }}
          >
            <ContactModalComponent dispatch={dispatch} userData={userData} />
          </Link>
        ))}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    contactList: state.contactList,
  };
}
export default connect(mapStateToProps)(AddConversationModal);
