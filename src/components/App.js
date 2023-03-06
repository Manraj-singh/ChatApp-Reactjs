import ContactList from "./ContactList";
import Conversation from "./Conversation";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="appContainer">
      <ContactList />

      <Routes>
        <Route path="/" element={<Conversation />} />
        <Route path="/:userId" element={<Conversation />} />
      </Routes>
    </div>
  );
}

export default App;
