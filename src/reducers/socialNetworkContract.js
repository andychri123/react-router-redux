import { connect, useDispatch, useSelector } from "react-redux";
let init = {
  members: [],
  member: {}
};
export const socialNetworkContract = (state = init, action) => {
  const { type, response } = action;
  switch (type) {
    case "ADD_MEMBER":
      return {
        ...state,
        members: [...state.members, response]
      };
    case "SET_MEMBER":
      return {
        ...state,
        member: response
      };

    default:
      return state;
  }
};
