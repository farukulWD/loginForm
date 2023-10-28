import styled from "styled-components";

const LoginFormWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
export const Heading = styled.h1`
  font-size: 30px;
`;
export const Input = styled.input`
  width: 95%;
  padding: 10px 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginFormWrapper;
