import React from 'react';
import styled from 'styled-components';
import Particles from "./Particles";
import { name, aboutMe } from '../../UserData/info.js';
import '../../Styles/headerButtonAnimation.scss';
import '../../Styles/styles.scss';


const Container = styled.div`
    position: absolute;
    top: 35%;
    left: 10%;
    z-index: 9999;
`;

const Heading = styled.h1`
    font-size: 3rem;
`;

const Span = styled.span`
    background: -webkit-linear-gradient(135deg,#02aab0,#00cdac);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const Br = styled.br``;

const Button = styled.a``;


export default Header = () => { 
    return (
    <>
        <Particles />
        <Container>
            <Heading>Hi, My name is <Span>{name}</Span>.<Br />{aboutMe[0]}</Heading>
            <Br />
            <Button
                className='buttonfx slideleft'
                onClick={() => { console.log('Clicked') }}>
                Know more about me!
            </Button>
        </Container>
    </>

)};
