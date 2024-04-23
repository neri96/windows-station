import { useContext } from "react";

import { CtxItemData } from "@/app/context";

const useCtxData = () => {
  const data = useContext(CtxItemData);

  return data;
};

export default useCtxData;
