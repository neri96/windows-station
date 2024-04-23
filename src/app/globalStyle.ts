"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    color: #fff;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #e6e6e6;
    background: linear-gradient(to right, #f0f2f0, #000c40);
  }

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0;
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
