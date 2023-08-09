import { endpoints } from "@/constants";
import fetchApi from "@/utils/fetchApi";
import { useEffect, useReducer } from "react";

const usersEndpoint = endpoints.users;

const actions = {
  SET_USERS: "SET_USERS",
  SET_CURRENT_USER_ID: "SET_CURRENT_USER_ID",
};

const reducer = (state, action) => {
  const { SET_USERS, SET_CURRENT_USER_ID } = actions;
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_CURRENT_USER_ID:
      return { ...state, currentUserId: action.payload };
    default:
      return state;
  }
};

export default function useUsers(
  initialState = { users: [], currentUserId: null },
) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initializeState = () => {
    fetchApi(usersEndpoint).then((data) => {
      dispatch({ type: actions.SET_USERS, payload: data });
      dispatch({ type: actions.SET_CURRENT_USER_ID, payload: data[0].id });
    });
  };

  const setCurrentUserId = (id) => {
    dispatch({ type: actions.SET_CURRENT_USER_ID, payload: id });
  };

  useEffect(initializeState, []);

  return { ...state, setCurrentUserId };
}
