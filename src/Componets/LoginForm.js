import React, { useState } from "react";
import LoginFormWrapper, {
  AnimationContainer,
  Button,
  DisableButton,
  ForgotPassword,
  Form,
  FormWrapper,
  Input,
  PasswordInputStyle,
  ShowHideButton,
  SocialButton,
  SocialLoginWrapper,
} from "./LoginFormStyle";
import ReCAPTCHA from "react-google-recaptcha";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import Lottie from "lottie-react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import loginAnimation from "./loginAnimation.json";
import HorizontalLineWithCenteredText from "./HorizontalLineWithText/HorizontalLineWithText";

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [verified, setVerified] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  function onChange(value) {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const data = { email, password };
    console.log(data);
    form.reset();
  };

  return (
    <LoginFormWrapper>
      <FormWrapper>
        {/* Form Area */}
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Input
            type="email"
            name="email"
            placeholder="Type your email"
            required
          />
          <PasswordInputStyle>
            <Input
              name="password"
              type={passwordVisible ? "text" : "password"}
              placeholder="password"
              required
            />
            <ShowHideButton onClick={togglePasswordVisibility}>
              {passwordVisible ? (
                <AiOutlineEye></AiOutlineEye>
              ) : (
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              )}
            </ShowHideButton>
          </PasswordInputStyle>
          <ForgotPassword>Forgot Password ?</ForgotPassword>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          {verified ? (
            <Button disabled={!verified} type="submit">
              Login
            </Button>
          ) : (
            <DisableButton>Please Check Recaptcha</DisableButton>
          )}
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
