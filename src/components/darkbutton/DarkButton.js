import React from 'react';
import styled from 'styled-components';

const ColorTextButton = 'rgb(114, 18, 204)';
const ColorBorderSpan = '#855EC2';

const DarkButton = ({ onClick }) => (
    <StyledButton onClick={onClick}>
        <span>Dark Mode</span> 
    </StyledButton>
)

const StyledButton = styled.button`
background:none;

width: 130px;
height: 25px;

margin-bottom: 1rem;
margin-right: 30px;
margin-top: 17px;
margin-left: 15px;

font-size: 18pt;

span{
    color: ${ColorTextButton};
    font-weight: bold;
    cursor: pointer;

    &:hover{
        border-bottom: 2px solid ${ColorBorderSpan};
    }
}

@media (max-width: 1024px){
    margin-left: 5px;
}
`
export default DarkButton;