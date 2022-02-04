import React, { useMemo } from "react";
import Styled from "./index.style";
import { changeColor } from "src/utils/color";

const Card = ({ isAnswer, color, size, stage, onCardClick }: CardProps) => {
  const backgroundColor = useMemo(
    () =>
      "#" + (isAnswer ? changeColor(color, Math.max(1, 50 - stage)) : color),
    [color]
  );

  if (isAnswer) {
    console.log(color, backgroundColor);
  }

  return (
    <Styled.Card
      style={{ backgroundColor, width: size, height: size }}
      onClick={onCardClick(isAnswer)}
    />
  );
};

interface CardProps {
  isAnswer: boolean;
  color: string;
  stage: number;
  size: number;
  onCardClick: (isAnswer: boolean) => () => void;
}

export default React.memo(Card);
