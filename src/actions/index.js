//ACTION TYPES
export const ACTIONS = {
  SEND_MESSAGE: "SEND_MESSAGE",
  SEARCH_CONTACT: "SEARCH_CONTACT",
  SHOW_ADD_CONVERSATION_MODAL: "SHOW_ADD_CONVERSATION_MODAL",
  HIDE_SEARCH_RESULT: "HIDE_SEARCH_RESULT",
};

//ACTION CREATORS

export function sendMessage(message) {
  return {
    type: ACTIONS.SEND_MESSAGE,
    message,
  };
}
export function searchContact(contactName) {
  return {
    type: ACTIONS.SEARCH_CONTACT,
    contactName,
  };
}

export function hideSearchResult() {
  return {
    type: ACTIONS.HIDE_SEARCH_RESULT,
  };
}
export function showAddConversationModal(bool) {
  return {
    type: ACTIONS.SHOW_ADD_CONVERSATION_MODAL,
    bool,
  };
}
