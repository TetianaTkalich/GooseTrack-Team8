import { Link } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  border-radius: 8px;
  @media (min-width: 768px) {
  border: 1px solid rgba(220, 227, 229, 0.8);
  }
`;
export const ListMonth = styled(List)`
  grid-template-rows: 50px;
  @media (min-width: 768px) {
    grid-template-rows: 46px;
  }
`;
export const ListDays = styled(List)`
  grid-template-rows: 74px;
  @media (min-width: 768px) {
    grid-template-rows: 68px;
  }
`;

export const Month = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Days = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;

  padding-top: 10px;
`;

const Day = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;

  text-transform: uppercase;

  color: #616161;
  text-align: center;
`;

export const DayWeek = styled(Day)`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.12px;
`;

export const OtherMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
  pointer-events: none;
`;
export const CurrentMonthStyledLink = styled(Link)`
  text-decoration: none;
  color: currentColor;
`;

const DateOfWeek = styled(Day)`
  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 700;
  font-size: 12px;
  line-height: 1.17px;

  width: 24px;
  height: 24px;
  padding: 4px 6px;
  color: #343434;
  border-radius: 6px;

  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12px;
    width: 27px;
    height: 26px;
    padding: 4px 8px;
    border-radius: 6px;
  }
`;

export const ChoosedDate = styled(DateOfWeek)`
  background-color: #3e85f3;
  color: #ffffff;
`;
export const DateOfWeekCurrentMonth = styled(DateOfWeek)`
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    box-shadow: 4px 4px 24px rgba(136, 165, 191, 1);
  }
`;

export const DateOfWeekOtherMonth = styled(DateOfWeek)`
  opacity: 0.3;
`;