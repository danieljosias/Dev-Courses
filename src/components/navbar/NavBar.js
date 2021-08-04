import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const ColorLogo = 'rgb(114, 18, 204);';

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        DevCourses
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: 55px;

  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  
  .logo {
    padding: 15px 0;
    color: ${ColorLogo};
  
    font-size: 18pt;
    font-weight: bold;
    cursor: pointer;

    @media (max-width: 500px){
      font-size: 16pt;
    }
  }
`