import React, { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import cardGameConfig from "src/config/cardGameConfig";
import useTimer from "src/hooks/useTimer";
import Styled from "./index.style";
import Card from "src/components/Card";
import { changeColor, generateRandomHexColor } from "src/utils/color";

const BOARD_SIZE = 360;
const INITIAL_GAME_STATE = {
  stage: 1,
  score: 0,
};
function CardGame() {
  const [gameData, setGameData] = useState(INITIAL_GAME_STATE);
  const cardProps = useMemo(() => {
    const cardLengthPerRow = Math.round((gameData.stage + 0.5) / 2) + 1;
    const cardLength = Math.pow(cardLengthPerRow, 2);
    const selectedCardIndex = Math.floor(Math.random() * (cardLength - 1));
    const backgroundColor = generateRandomHexColor();

    return Array(cardLength)
      .fill("")
      .map(() => uuidv4())
      .map((id, index) => ({
        key: id,
        isAnswer: index === selectedCardIndex ? true : false,
      }))
      .map(({ key, isAnswer }) => ({
        key,
        isAnswer,
        backgroundColor: isAnswer
          ? changeColor(backgroundColor, Math.max(1, 50 - gameData.stage))
          : backgroundColor,
        size: (BOARD_SIZE - 4 * cardLengthPerRow) / cardLengthPerRow,
      }));
  }, [gameData]);

  const { remain, resetTimer, reduceTime } = useTimer({
    time: cardGameConfig.gameLimitTime,
    onEnd: () => {
      alert(`GAME OVER!\n스테이지: ${gameData.stage}, 점수: ${gameData.score}`);
      setGameData(INITIAL_GAME_STATE);
    },
  });

  const onCardClick = (isAnswer: boolean) => () => {
    if (!isAnswer) {
      reduceTime(cardGameConfig.worngAnswerDiscountTime);
      return;
    }

    setGameData(({ score, stage }) => ({
      stage: stage + 1,
      score: score + Math.pow(stage, 3) * remain,
    }));

    resetTimer();
  };

  return (
    <Styled.CardGameContainer>
      <Styled.CardGameHeader>
        스테이지: {gameData.stage}, 남은시간: {remain}, 점수: {gameData.score}{" "}
      </Styled.CardGameHeader>
      <Styled.CardBoardContainer>
        {cardProps.map((card) => (
          <Card {...card} onCardClick={onCardClick} />
        ))}
      </Styled.CardBoardContainer>
    </Styled.CardGameContainer>
  );
}

export default CardGame;
