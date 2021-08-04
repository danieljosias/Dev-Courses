import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BgContainerFooter = 'rgb(114, 18, 204)'
const ColorItemList = "#FFF";
const ColorBorderContainerFooter = "#FFF";


function footer() {
    return (
        <ContainerFooter>
            <Footer>
                <ul>
                    <Link to="/privacidade"><li>Política de Privacidade</li></Link>
                    <li>Daniel Josias © 2021</li>
                    <li>DevCourses@gmail.com</li>
                </ul>
            </Footer>
        </ContainerFooter>
    )
}

export default footer;

const ContainerFooter = styled.div`
   background-color: ${BgContainerFooter};
   height: 50px;
   border-top: 1px solid ${ColorBorderContainerFooter};
`
const Footer = styled.footer`
    
   ul{
       justify-content: space-between;
       display: flex;
       list-style: none;
       padding-top: 10px;

       li{
           padding: 0 15px;
           font-size: 18pt;
           color: ${ColorItemList};
           cursor: pointer;

        @media (max-width: 1024px){
            padding: 0 15px;
        }

        @media (max-width: 780px){
            font-size: 14pt;
        }

        @media (max-width: 500px){
            font-size: 9pt;
            padding-top: 5px;
        }

       }

       a{
           text-decoration: none;
       }

        
   }


`