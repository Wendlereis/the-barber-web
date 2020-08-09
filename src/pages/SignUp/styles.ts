import styled from "styled-components";
import { shade } from "polished";

import signup from "../../assets/signup-background.png";

export const Container = styled.section`
  display: flex;
  align-items: strech;
  height: 100vh;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 660px;
  width: 100%;

  form {
    margin-top: 80px;
    margin-bottom: 80px;
    width: 300px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    > a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    color: #F4EDE8;
    display: flex;
    align-items: center;
    margin-top: 24px;
    margin-bottom: 40px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#FF9000")};
    }
  }
`;

export const Background = styled.section`
  flex: 1;
  background-image: url(${signup});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
