import ContactList from "./ContactList";
import Conversation from "./Conversation";
import { Routes, Route } from "react-router-dom";
import "react-notifications/lib/notifications.css";
import Notification from "./Notification";
import { connect } from "react-redux";
import { saveState } from "../localStorage";

function App() {
  return (
    <div className="appContainer">
      <Notification />
      <ContactList />

      <Routes>
        <Route path="/" element={<Conversation />} />
        <Route path="/:userId" element={<Conversation />} />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  saveState({ ...state, showNotification: false });
  return state;
}

export default connect(mapStateToProps)(App);
