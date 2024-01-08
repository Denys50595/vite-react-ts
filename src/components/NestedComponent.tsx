import React from "react";
import { useUser } from "../contexts/UserContext";

const NestedComponent: React.FC = () => {
  const user = useUser();

  return (
    <div>
      <h2>Nested User Information</h2>
      <p>ID: {user?.id}</p>
      <p>Username: {user?.username}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
};

export default NestedComponent;
