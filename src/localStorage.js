//to load the state from localstorage
export const loadState = () => {
  try {
    const serialState = localStorage.getItem("chatAppState");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

//to save the state to localstorage for making it persistent
export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    setTimeout(() => {
      localStorage.setItem("chatAppState", serialState);
    }, 3000);
  } catch (err) {
    console.log(err);
  }
};
