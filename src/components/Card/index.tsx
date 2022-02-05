import React from "react";
import Styled from "./index.style";

const Card = ({ isAnswer, backgroundColor, size, onCardClick }: CardProps) => (
  <Styled.Card
    style={{
      backgroundColor: "#" + backgroundColor,
      width: size,
      height: size,
    }}
    onClick={onCardClick(isAnswer)}
  />
);

interface CardProps {
  isAnswer: boolean;
  backgroundColor: string;
  size: number;
  onCardClick: (isAnswer: boolean) => () => void;
}

export default React.memo(Card);
