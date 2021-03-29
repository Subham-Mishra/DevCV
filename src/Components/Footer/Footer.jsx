import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #1e6f5c;
    min-height: 50vh;
    display: flex;
    justify-content:center;
    align-items:flex-end;
`;

const Rights = styled.div`
    font-size:1rem;
    color: white;

`;

export default Footer = () => (
    <Wrapper>
    Made with React MaterialUI Passion and Love. 
    <Rights>2021. No Rights Reserved. Tweak the code and have fun.</Rights>
    </Wrapper>
);