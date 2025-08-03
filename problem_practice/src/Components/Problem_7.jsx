// 1. Create Context
import React, { createContext, useContext } from "react";

// Create context
const UserContext = createContext();

function ComponentA() {
  const userName = "Pardeep Yadav";

  return (
    <UserContext.Provider value={userName}>
      <ComponentB />
    </UserContext.Provider>
  );
}

function ComponentB() {
  return <ComponentC />;
}

function ComponentC() {
  const user = useContext(UserContext);
  return <h2>Hello, {user} 👋</h2>;
}

export default ComponentA;
