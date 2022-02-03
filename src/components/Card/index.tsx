import React from 'react'
import Styled from './index.style'
import { changeColor } from 'src/utils/color'

const Card = ({ isAnswer, color, size, onCardClick }: CardProps) => {
  const backgroundColor = '#' + (isAnswer ? changeColor(color) : color)

  return (
    <Styled.Card
      style={{ backgroundColor: backgroundColor, width: size, height: size }}
      onClick={onCardClick(isAnswer)}
    />
  )
}

interface CardProps {
  isAnswer: boolean
  color: string
  size: number
  onCardClick: (isAnswer: boolean) => () => void
}

export default React.memo(Card)
