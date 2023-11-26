const initialState = {
  theme: "white",
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "theme/drak": {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "theme/light": {
      localStorage.setItem("theme", JSON.stringify(action.payload));
      return {
        ...state,
        theme: action.payload,
      };
    }
    default:
      return state;
  }
};
