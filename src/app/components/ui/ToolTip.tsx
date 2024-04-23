import { ReactNode, useState, useRef, useLayoutEffect, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import useToggle from "@/app/hooks/useToggle";

import styled, { css } from "styled-components";

import { appear } from "@/app/helpers/variants";

export enum ToolTipPositionHorizontal {
  Top = "top",
  Middle = "middle",
  Bottom = "bottom",
}

export enum ToolTipPositionVertical {
  Left = "left",
  Center = "center",
  Right = "right",
}

interface IPosition {
  horizontal: ToolTipPositionHorizontal;
  vertical: ToolTipPositionVertical;
}

interface IProps {
  content: string;
  position: IPosition;
  children: ReactNode;
}

const StyledToolTip = styled.div`
  position: relative;
  z-index: 1000;
`;

const StyledToolTipContainer = styled.div<{
  $position: IPosition;
  $width: number;
}>`
  position: absolute;
  ${({ $position, $width }) => setPosition($position, $width)}
`;

const StyledToolTipContent = styled.div`
  position: relative;
  border-radius: 5px;
  background-color: #4e5148;
  white-space: nowrap;
  padding: 5px 10px;
  box-sizing: border-box;
  text-transform: capitalize;
`;

const setPosition = ($position: IPosition, $width: number) => {
  const { horizontal, vertical } = $position;

  const values = new Map();

  values.set(ToolTipPositionHorizontal.Top, `top: -35px;`);
  values.set(
    ToolTipPositionHorizontal.Middle,
    `top: 50%; transform: translateY(-50%);`
  );
  values.set(ToolTipPositionHorizontal.Bottom, `bottom: -35px;`);
  values.set(ToolTipPositionVertical.Left, `left: -${$width}px;`);
  values.set(
    ToolTipPositionVertical.Center,
    `left: 50%; transform: translateX(-50%);`
  );
  values.set(ToolTipPositionVertical.Right, `right: -${$width}px;`);

  return `${values.get(horizontal)} ${values.get(vertical)}`;
};

const ToolTip = ({ content, position, children }: IProps) => {
  const [elemWidth, setElemWidth] = useState<number>(0);
  const [isToolTipOpen, toggleToolTip] = useToggle();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && !elemWidth) {
      setElemWidth(ref.current.clientWidth);
    }
  }, [elemWidth, isToolTipOpen]);

  return (
    <StyledToolTip onMouseEnter={toggleToolTip} onMouseLeave={toggleToolTip}>
      {children}

      <StyledToolTipContainer ref={ref} $position={position} $width={elemWidth}>
        <AnimatePresence>
          {isToolTipOpen && (
            <StyledToolTipContent
              as={motion.div}
              variants={appear}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {content}
            </StyledToolTipContent>
          )}
        </AnimatePresence>
      </StyledToolTipContainer>
    </StyledToolTip>
  );
};

export default ToolTip;
