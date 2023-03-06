import { REMOVEALLPOINT, REMOVEPOINT, SUBMITPOINT } from "../Action";

const initialState = {
  entries: [],
};
export const pointEntryReducers = (state = initialState, action) => {
  switch (action.type) {
    case SUBMITPOINT:
      console.log(action.payload);
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case REMOVEPOINT:
      return {
        ...state,
        entries: state.entries.filter(
          (item) => item.entryGameType !== action.payload
        ),
      };
    case REMOVEALLPOINT:
      return {
        ...state,
        entries: [],
      };
  }
  return state;
};
