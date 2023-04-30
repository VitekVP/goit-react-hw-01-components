import styled from '@emotion/styled';

export const StatisticsCard = styled.section`
  width: 360px;
  padding-top: 25px;

  border-radius: 2px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px #000000bf;
`;

export const Title = styled.h2`
  margin-bottom: 25px;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2px;
`;

const getRandomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const Item = styled.li`
  flex-basis: calc((100% - 3 * 2px) / 4);
  padding: 10px 0;

  display: flex;
  flex-direction: column;
  gap: 2px;

  border-radius: 2px;
  background-color: ${getRandomColor};
`;

export const Label = styled.span`
  font-weight: 600;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
