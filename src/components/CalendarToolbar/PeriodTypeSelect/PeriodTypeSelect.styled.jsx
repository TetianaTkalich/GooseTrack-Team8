import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 34px;

  background: #21222c;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29px;

  color: #3e85f3;

  &.active {
    background: #cae8ff;
    color: #ffffff;
    &:hover,
    :focus {
      background-color: #3e85f3;
      box-shadow: none;
    }
  }
  @media (min-width: 768px) {
    width: 82px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const StyledLinkMonth = styled(StyledLink)`
  padding: 8px 16px;

  border: none;
  border-right: 1px solid rgba(62, 133, 243, 0.2);
  border-radius: 8px 0px 0px 8px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: rgba(33, 34, 44, 0.6);
    box-shadow: -4px 2px 16px rgba(136, 165, 191, 1);
  }
`;

export const LinkActiveMonth = styled(StyledLinkMonth)`
  background: #cae8ff;
  color: #ffffff;
`;

export const StyledLinkDay = styled(StyledLink)`
  padding: 8px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: rgba(33, 34, 44, 0.6);
    box-shadow: 4px 2px 16px rgba(136, 165, 191, 1);
  }
  @media (min-width: 768px) {
    padding: 8px 26px;
  }
`;

export const LinkActiveDay = styled(StyledLinkDay)`
  background: #cae8ff;
  color: #ffffff;
`;