"use client";

import { useState } from "react";

import OurWorkTop from "./OurWorkTop";
import OurWorkGallery from "./OurWorkGallery";

import { PortfolioOption } from "../ts/types";

export const OurWorkContainer = () => {
  const [currentOption, setCurrentOption] = useState<PortfolioOption>(
    PortfolioOption.Window
  );

  const handleOption = (option: PortfolioOption) => setCurrentOption(option);

  return (
    <>
      <OurWorkTop currentOption={currentOption} handleOption={handleOption} />
      <OurWorkGallery currentOption={currentOption} />
    </>
  );
};
