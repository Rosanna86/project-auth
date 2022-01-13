
import React from "react";
import { useDispatch } from "react-redux";

import { user } from "../reducers/user";

const Logout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(user.actions.deleteAccessToken());
    dispatch(user.actions.deleteUserId());
  };

  return (
    <button onClick={Logout}>Logout</button>
  );
};

export default LogoutButton;