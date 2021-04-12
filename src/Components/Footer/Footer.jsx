import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const Wrapper = styled.div`
    background-color: #1e6f5c;
    min-height: 50vh;
`;

const Rights = styled.div`
    font-size:1.5rem;
    color: white;
    text-align: center;
    min-height: 25vh;
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: space-between;
`;

const LeftDiv = styled.div``;
const RightDiv = styled.div``;

const Break = styled.div`
    min-height:10rem;;
`;

export default Footer = () => (
    <Wrapper>
        <Break />
        <Rights>
            <LeftDiv>
                Made with React, MaterialUI, ❤️ and passion.
                <br />
                © March, 2021. No Rights Reserved.
                <br />
                Tweak the code and have fun.
                <br />
            </LeftDiv>
            <RightDiv>
                Designed and developed by : SUBHAM MISHRA<br />
                Computer Science & Engineering, CET Bhubaneshwar<br />
                imsubham882@gmail.com<br />
                Phone No :- 8018821596<br />
                <Button
                    variant="contained"
                    size="small"
                    startIcon={<SystemUpdateAltIcon />}> Fork my repo for this portfolio.</Button>
            </RightDiv>
        </Rights>

    </Wrapper>
);