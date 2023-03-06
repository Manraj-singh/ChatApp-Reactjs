import { ACTIONS } from "../actions";
import { contactList, messagesList } from "../Data";

// INITIAL STATES
const initialState = {
  contactList: contactList,
  messageList: { ...messagesList },
  showAddModal: false,
  searchResult: {},
};

//REDUCER FUNCTIONS
export default function chatReducer(state = initialState, action) {
  switch (action.type) {
    //*here we will get message details like id and text and we will add the message to our message list
    case ACTIONS.SEND_MESSAGE:
      const id = action.message.id;
      const text = action.message.text;
      let userMsgArray = { ...state.messageList };
      let contactInfo = [...state.contactList];
      const newContactInfo = contactInfo.map((usr) => {
        if (usr.id == id) {
          usr.lastText = text;
        }
        return usr;
      });
      //*if there is already chats for the user we add the new message in array
      if (userMsgArray[id]) {
        const length = userMsgArray[id].length + 1;
        userMsgArray[id].push({
          id: length,
          text,
          senderID: 0,
        });
      }
      //*else we create a message list for the user
      else {
        const newval = [{ id: 1, text, senderID: 0 }];
        userMsgArray[id] = newval;
      }

      return {
        ...state,
        messageList: userMsgArray,
        contactList: newContactInfo,
      };

    //*when the add button is clicked we change state value to show add modal
    case ACTIONS.SHOW_ADD_CONVERSATION_MODAL:
      return { ...state, showAddModal: action.bool };

    //* here we get the contact name to search ,if the contact exist we show result else we dont show it
    case ACTIONS.SEARCH_CONTACT:
      const cList = [...state.contactList];
      const result = cList.find((contact) =>
        contact.name.toLowerCase().includes(action.contactName.toLowerCase())
      );

      if (result) {
        return {
          ...state,
          searchResult: result,
          showSearchResult: true,
        };
      } else {
        return {
          ...state,
          searchResult: {},
          showSearchResult: false,
        };
      }

    //*this is for hiding the search result if we clicked on any contact we close the search result
    case ACTIONS.HIDE_SEARCH_RESULT:
      return { ...state, showSearchResult: false };
    default:
      return state;
  }
}