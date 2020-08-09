import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.button`
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
`;
