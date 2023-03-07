
# ChatAPP using React,Redux
**Deployed on :**  https://react-chat-app-manraj.netlify.app/

**Overview :** A chat app mockup made using react,redux .




## Tech Stack

*REACT.JS , REDUX*
## Run Locally

Clone the project

```bash
  git clone https://github.com/Manraj-singh/ChatApp-Reactjs.git
```

install the nodemodules from package.json  :

```bash
  npm install
```

finally start it on your local server

```bash
  npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.




## Features

  Assuming as a dummy logged in user with a json file to load some dummy data in the project.
- Functionality:

  

  - Search : conversations should be searchable by contact name.

  - Left sidebar:
    Shows all the conversations created here and 
    each conversation has contact name and some text of the last message in the chat
  - Create conversation button:
    On clicking this opens a pop up and loads all the contacts (from the dummy data.json/js file).
    On clicking the contact it start a new conversation (if no conversation was previously started). Or opens the existing conversation for that contact.
  - Right side view
    Show the current selected conversation messages and able to send a message in the conversation




## Folder structure
```
src
   |-- Data.js    
   |-- actions    
   |   |-- index.js
   |-- components
   |   |-- AddConversationModal.js
   |   |-- App.js
   |   |-- ContactList.js
   |   |-- Conversation.js
   |   |-- Notification.js
   |-- index.css
   |-- index.js
   |-- localStorage.js
   |-- reducers
   |   |-- index.js
```

overview: 
- data.js file contains all the dummy data
- action folder contains the action types and action creators
- components folder has all the components created
- reducer folder has the reducer functions which is called by dipatching action
- localStorage file has code to make store persistant
- index.css file has all the styles for the App


basic flow  : dipatching a action from component  > goes to action creator for formatting and returning type and payload > calls the reducer fucntion as per type  > updates the store  > component gets rerendered as per new state 
