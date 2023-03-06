import { combineReducers } from "redux";
import { pointEntryReducers } from "./reducers/PointEntryReducers";

export const reducers = combineReducers({
  points: pointEntryReducers,
});
