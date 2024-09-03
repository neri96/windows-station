"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import Header from "../../components/features/Header";
import Footer from "../../components/features/Footer";

const theme = {
  textColor: "#ffffff",
  backgroundColor: "#333333",
  backgroundColor2: "#4b5544",
  borderRadius: "15px",
};

const Main = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
