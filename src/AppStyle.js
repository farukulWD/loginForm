import styled from "styled-components";

export const AppWrapper = styled.section`
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(255, 0, 160, 0.3),
      rgba(255, 0, 200, 0.3)
    ),
    url(https://i.ibb.co/26Sy6mz/6938839-3409297.jpg);
  background-size: cover;
  padding: 10px;
  @media only screen and (min-width: 350px) and (max-width: 480px) {
    min-height: 100vh;
  }
`;
const ContentWrapper = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export default ContentWrapper;
