import React from 'react';
import styled from 'styled-components';
import Typed from 'react-typed';
import Particles from "./Particles";
import { name, aboutMe } from '../../UserData/info.js';
import '../../Styles/headerButtonAnimation.scss';

const Wrapper = styled.div`
    height: 150vh;
`;

const Container = styled.div`
    position: absolute;
    top: 25rem;;
    left: 5rem;;
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
        <Wrapper>
            <Particles />
            <Container>
                <Heading> Hi, My name is <Span>{name}.</Span>
                    <Br />
                    <Typed
                        strings={aboutMe}
                        typeSpeed={30}
                        loop
                    />
                </Heading>
                <Br />
                <Button
                    className='buttonfx slideleft'
                    onClick={() => { console.log('Clicked') }}>
                    Know more about me!
            </Button>
            </Container>
        </Wrapper>
    )
};
