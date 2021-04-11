import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const Wrapper = styled.div`
    background-color: #1e6f5c;
    min-height: 50vh;
    display: flex;
    justify-content:center;
    align-items:flex-end;
`;

const Rights = styled.div`
    font-size:1.5rem;
    color: white;
    text-align: center;
    min-height: 25vh;
`;

export default Footer = () => (
    <Wrapper>
        <Rights> Made with React, MaterialUI, ❤️ and passion.
            <br />
            © March, 2021. No Rights Reserved.
            <br />
            Tweak the code and have fun.
            <br />
            <Button
                variant="contained"
                size="small"
                startIcon={<SystemUpdateAltIcon />}> Fork my repo for this portfolio.</Button>
        </Rights>

    </Wrapper>
);