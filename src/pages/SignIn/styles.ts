import styled from "styled-components";
import { shade } from "polished";

import signin from "../../assets/signin-background.png";

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

    input {
      background-color: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background-color: #ff9000;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #312e38;
      font-weight: 500;
      line-height: 21px;
      width: 100%;
      height: 56px;
      margin-top: 16px;
      transition: background-color 0.2s;

      &:hover {
        background-color: ${shade(0.2, "#FF9000")};
      }
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
    color: #FF9000;
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
  background-image: url(${signin});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
