import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fire from '../../firebase';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../theme';
import DarkButton from '../darkbutton/DarkButton';


const ColorLinkList = 'rgb(114, 18, 204);';
const HoverLinkList = '#845EC2';
const BgList = '#FFF';
const BgLogout = 'rgb(114, 18, 204)';
const ColorBorderLogout = '#FFF';
const ColorLogout = '#FFF';
const ColorBorderList = '#845EC2';

const RightNavBar = ({ open }) => {

  const logout = () => {
    fire.auth().signOut();
  }

  const [theme, setTheme] = useState("lightTheme");

  const themeToggler = () => {
    theme === "lightTheme" ? setTheme("darkTheme") : setTheme("lightTheme");
  };

  return (
      <List open={open}>
        <Link to="/homepage"><li>Home</li></Link>
        <Link to="/front"><li>Front End</li></Link>
        <Link to="/back"><li>Back End</li></Link>
        <Link to="/mobile"><li>Mobile</li></Link>
        
        <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
          <GlobalStyles />
            <DarkButton onClick={() => themeToggler()}></DarkButton>
        </ThemeProvider>

        <Link to="/login"><Logout onClick = {logout}>Sair</Logout></Link>
      </List>
  )
}

export default RightNavBar;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-right: 35px;
  z-index: 9999;

  li {
    padding: 15px 10px;
    cursor: pointer;
  }

  a{
      text-decoration: none;
      color: ${ColorLinkList};
      font-size: 18pt;
      font-weight: bold;

      &:hover{
        text-decoration: underline ${HoverLinkList};
        transition: all ease-in;
        }

    }
         
    
  @media (max-width: 1024px) {
    flex-flow: column nowrap;
    background-color: ${BgList};
    border: 1px solid ${ColorBorderList};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: -35px;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 51;

    a {
      color: ${ColorLinkList};
    }

  }
`;

const Logout = styled.button `
      background-color: ${BgLogout};
      border: 1px solid ${ColorBorderLogout};
      border-radius: 15px;
      width: 100px;
      height: 30px;
      margin-top: 15px;
      color: ${ColorLogout};
      font-size: 18pt;
      font-weight: bold;
      cursor: pointer;

      @media (max-width: 1024px){
        margin-left: 5px;
      }
    
`
