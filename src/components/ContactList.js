import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  hideSearchResult,
  searchContact,
  showAddConversationModal,
} from "../actions";
import AddConversationModal from "./AddConversationModal";

//*getting props from mapStateToProps
//*This is a mini component for ContactListComponent to render individual contacts
export const ContactComponent = ({ userData, dispatch }) => {
  //when clicked on contactItem we dispatch action to hide the search results
  const hideResult = () => {
    dispatch(hideSearchResult());
  };

  return (
    <div onClick={hideResult} className="contactItem">
      <img className="profileIcon" alt="icon" src={userData.profilePic} />
      <div className="contactInfo">
        <div className="contactName"> {userData.name}</div>
        <div className="messageText">{userData.lastText}</div>
      </div>
      <div className="messageTime">10:04 PM</div>
    </div>
  );
};

//* this is main component ,gets props from mapStateToProps , it renders on left side with contact details,searchbox
const ContactListComponent = ({
  contactList,
  showAddModal,
  dispatch,
  showSearchResult,
  searchResult,
}) => {
  const [searchName, setSearchName] = useState("");
  //this function is called when clicked on add conversation icon
  //it dispatches to show the modal
  const handleModal = () => {
    dispatch(showAddConversationModal(true));
  };

  //this function is called when clicked on search contact icon
  //it dispatches to search and display the contact
  const handleSearch = () => {
    if (searchName.length === 0) {
      return;
    }
    dispatch(searchContact(searchName));
  };

  return (
    <div className="contactListContainer">
      {showAddModal && <AddConversationModal />}
      {/* top most section containing current dummy user info */}
      <div className="profileInfoDiv">
        <img className="profileImage" alt="profile" src="/profile/pp1.png" />
        <p>My Profile</p>
        <img
          className="settingicon"
          src="https://img.icons8.com/retro/1x/gear.png"
          alt="settings"
        />
      </div>
      {/* section containing the searchbox details */}
      <div className="searchBox">
        <div className="searchContainer">
          <div className="inputBox">
            <input
              onChange={(e) => setSearchName(e.target.value)}
              className="searchInput"
              placeholder="Search or start new chat"
            />
            <img
              onClick={handleSearch}
              className="searchIcon"
              alt="search"
              src={"/search-icon.svg"}
            />
          </div>
        </div>
      </div>
      {/* section containing search result */}
      {showSearchResult && (
        <div className="resultBox">
          <Link to={`/${searchResult.id}`}>
            {"Result: "}
            <ContactComponent dispatch={dispatch} userData={searchResult} />
          </Link>
        </div>
      )}
      {/* below sections shows conversations */}
      <div className="addConversation">
        Conversations
        <img
          alt="add"
          className="emojiImage"
          src="https://img.icons8.com/external-becris-lineal-becris/1x/external-add-mintab-for-ios-becris-lineal-becris.png"
          onClick={handleModal}
        />
      </div>
      {contactList.map((userData, index) => (
        <Link key={index} to={{ pathname: `/${userData.id}`, state: userData }}>
          <ContactComponent userData={userData} />
        </Link>
      ))}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contactList: state.contactList,
    showAddModal: state.showAddModal,
    searchResult: state.searchResult,
    showSearchResult: state.showSearchResult,
    message: state.toast_message,
    type: state.toast_message_type,
  };
}
//returns a connected component
export default connect(mapStateToProps)(ContactListComponent);
