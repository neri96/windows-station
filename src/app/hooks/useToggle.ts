import { useState, Dispatch, SetStateAction } from "react";

const useToggle = (
  defaultStaste?: boolean
): [boolean, () => void, Dispatch<SetStateAction<boolean>>] => {
  const [isActive, setIsActive] = useState<boolean>(defaultStaste || false);

  const toggle = () => setIsActive((prevState) => !prevState);

  return [isActive, toggle, setIsActive];
};

export default useToggle;
