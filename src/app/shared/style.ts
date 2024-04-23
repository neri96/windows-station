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
