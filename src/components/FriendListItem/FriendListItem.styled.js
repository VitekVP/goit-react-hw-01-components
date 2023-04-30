import styled from '@emotion/styled';

export const Item = styled.li`
  padding: 10px;

  display: flex;
  gap: 30px;
  align-items: center;

  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #000000bf;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  border-radius: 4px;
  border: 1px solid grey;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
