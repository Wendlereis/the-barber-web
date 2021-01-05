import { animated } from 'react-spring';
import styled,{ css } from 'styled-components'


interface ContainerProps {
  type: 'success' | 'info' | 'error';
}

const toastTypesColors = {
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
  info: css`
    background-color: #ebf8ff;
    color: #3172b7;
  `,
}

export const Container = styled(animated.div)<ContainerProps>`
  display: flex;
  align-items: flex-start;
  position: relative;

  padding: 16px 24px 16px;

  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, .2);
  width: 360px;

  & + div {
    margin-top: 8px;
  }

  ${props => toastTypesColors[props.type || 'info']}

  > svg {
    margin-right: 16px; 
  }

  div {
    flex: 1;

    p {
      margin-top: 8px;
      font-size: 14px;
      opacity: .8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 16px;

    border: 0;
    background: transparent;
    color: inherit;
  }
`;