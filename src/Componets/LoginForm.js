import React from "react";
import LoginFormWrapper, {
  Button,
  Form,
  Heading,
  Input,
} from "./LoginFormStyle";

const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <Form>
        <Heading>Login</Heading>
        <Input type="email" placeholder="Type your email" />
        <Input type="text" placeholder="password" />

        <Button type="submit">Login</Button>
      </Form>
    </LoginFormWrapper>
  );
};

export default LoginForm;
