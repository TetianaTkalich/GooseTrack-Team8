import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 278px;
  }
`;

export const MonthWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 192px;
  height: 30px;
  padding: 8px 12px;

  background-color: #3e85f3;
  border-radius: 8px;
  @media (min-width: 768px) {
    height: 34px;
  }
`;

export const MonthName = styled.p`
  min-width: 94px;
  height: 18px;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.29;

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
  @media (min-width: 768px) {
    min-width: 107px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const WrapperButton = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  isolation: isolate;

  width: 36px;
  height: 30px;

  background: #ffffff;
  border: 1px solid rgba(220, 227, 229, 0.5);
  opacity: ${props => {
    if (props.disabled) {
      return '0.3';
    }
    return '1';
  }};
  &.active {
    &:hover,
    :focus {
      box-shadow: none;
    }
  }

  @media (min-width: 768px) {
    width: 38px;
    height: 34px;

    border: 1px solid rgba(255, 255, 255, 0.15);
  }
`;

export const ButtonLeft = styled(StyledLink)`
  border-radius: 8px 0px 0px 8px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: -4px 2px 10px rgba(136, 165, 191, 1);
  }
`;
export const ButtonRight = styled(StyledLink)`
  border-radius: 0px 8px 8px 0px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 4px 2px 10px rgba(136, 165, 191, 1);
  }
`;
export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #616161;
  fill: transparent;
  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;