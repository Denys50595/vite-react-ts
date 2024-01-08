import React from "react";
import { useUser } from "../contexts/UserContext";
import NestedComponent from "./NestedComponent";

const UserInfo: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <h2>User Information</h2>
      <p>ID: {user?.id}</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
      <NestedComponent />
    </div>
  );
};

export default UserInfo;
