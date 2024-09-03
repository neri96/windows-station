import { css } from "styled-components";

export const inputStyles = css`
  height: 35px;
  width: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  outline: none;
  padding: 0;
  padding-left: 5px;
  box-sizing: border-box;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 0.9rem;
`;

export const inputWrapStyles = css`
  position: relative;
  width: calc(100% - 20px);
  margin: 0 auto;
  margin-bottom: 15px;

  label {
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
`;

export const glassBaclkground = css`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.6px);
  -webkit-backdrop-filter: blur(6.6px);
  border: 1px solid rgba(255, 255, 255, 0.12);
`;
