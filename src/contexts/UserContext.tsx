import React, { ReactNode, createContext, useContext } from "react";

interface UserContextProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: {};
  phone: string;
  website: string;
  company?: {};
}

const UserContext = createContext<UserContextProps | null>(null);

export const UserProvider: React.FC<{
  children: ReactNode;
  user: UserContextProps;
}> = ({ children, user }) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  return context;
};
