import React, { useState } from "react";
import LoginFormWrapper, {
  AnimationContainer,
  Button,
  Form,
  FormWrapper,
  Input,
  PasswordInputStyle,
  ShowHideButton,
  SocialButton,
  SocialLoginWrapper,
  SubHeading,
} from "./LoginFormStyle";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import Lottie from "lottie-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginAnimation from "./loginAnimation.json";
import HorizontalLineWithCenteredText from "./HorizontalLineWithText/HorizontalLineWithText";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <LoginFormWrapper>
      <FormWrapper>
        {/* Form Area */}
        <Form>
          <Input type="email" placeholder="Type your email" />
          <PasswordInputStyle>
            <Input
              type={passwordVisible ? "text" : "password"}
              placeholder="password"
            />
            <ShowHideButton onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </ShowHideButton>
          </PasswordInputStyle>
          <Button type="submit">Login</Button>
        </Form>
        {/* Social Login Area */}
        <HorizontalLineWithCenteredText text="OR" />
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
