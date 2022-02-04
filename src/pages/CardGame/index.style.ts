import styled from "styled-components";

const CardGameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardGameHeader = styled.header`
  font-size: 20px;
`;

const CardBoardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 360px;
  height: 360px;
`;

export default { CardGameContainer, CardGameHeader, CardBoardContainer };
