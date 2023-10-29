import React from "react";
import LoginForm from "./Componets/LoginForm";
import { Heading } from "./Componets/LoginFormStyle";
import ContentWrapper, { AppWrapper } from "./AppStyle";

function App() {
  return (
    <AppWrapper>
      <ContentWrapper>
        <Heading>Please Login Here</Heading>
        <LoginForm></LoginForm>
      </ContentWrapper>
    </AppWrapper>
  );
}

export default App;
