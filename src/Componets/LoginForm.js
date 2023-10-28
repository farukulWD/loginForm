import React from "react";
import LoginFormWrapper, {
  AnimationContainer,
  Button,
  Form,
  FormWrapper,
  Heading,
  Input,
  SocialButton,
  SocialLoginWrapper,
} from "./LoginFormStyle";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import Lottie from "lottie-react";
import loginAnimation from "./loginAnimation.json";
const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <FormWrapper>
        <Form>
          <Input type="email" placeholder="Type your email" />
          <Input type="text" placeholder="password" />
          <Button type="submit">Login</Button>
        </Form>
        <Heading>OR Login With</Heading>
        <SocialLoginWrapper>
          <SocialButton>
            <BsGoogle></BsGoogle>
          </SocialButton>
          <SocialButton>
            <BsFacebook></BsFacebook>
          </SocialButton>
        </SocialLoginWrapper>
      </FormWrapper>

      <AnimationContainer>
        <Lottie animationData={loginAnimation} loop={true} />
      </AnimationContainer>
    </LoginFormWrapper>
  );
};

export default LoginForm;
