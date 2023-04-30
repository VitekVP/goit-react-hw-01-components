import styled from '@emotion/styled';

export const Card = styled.div`
  width: 360px;

  border-radius: 4px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 0px 10px 0px #000000bf;
`;

export const Description = styled.div`
  padding: 40px;
`;

export const Avatar = styled.img`
  width: 200px;
  margin-bottom: 40px;

  border-radius: 50%;
  box-shadow: 0px 0px 10px 0px #000000bf;
`;

export const Name = styled.p`
  margin-bottom: 20px;

  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  color: #585858;
`;
export const Location = styled.p`
  color: #585858;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 2 * 2px) / 3);
  padding: 20px 0;

  display: flex;
  flex-direction: column;
  gap: 2px;

  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px #6c6c6c83;
`;

export const Label = styled.span`
  color: #585858;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
