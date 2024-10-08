import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ListLink = styled(NavLink)`
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  background-color: transparent;
  /* color: #d9d9d9; */
  padding: 5px 10px;
  text-decoration: none;
`;

export const OrangeButton = styled.button`
  background-color: #f55729;
  color: var(--white-color-400);
  font-size: 17px;
  font-weight: bold;
  padding: 7px 45px;
  margin: 50px 0 30px 0;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;
