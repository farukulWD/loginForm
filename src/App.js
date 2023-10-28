import React from "react";
import LoginForm from "./Componets/LoginForm";
import { Heading } from "./Componets/LoginFormStyle";

function App() {
  return (
    <div style={{ padding: "10px" }}>
      <div style={{ width: "70%", margin: "0 auto", textAlign: "center" }}>
        <Heading>Login</Heading>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}

export default App;
