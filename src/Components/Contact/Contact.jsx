import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    margin: theme.spacing(3),
  },
  button: {
    padding: "5px 60px",
    margin: "1rem",
  },
}));

const Wrapper = styled.div`
  ${'' /* margin-top: 50vh; */}
  background: purple;
  color: white;
  height: 100vh;
  width: 100%;
  padding: 10rem 8rem;
  display: inline-block;
  justify-content: space-between;
  white-space: nowrap;
`;

const LeftDiv = styled.div`
  float: left;
`;

const RightDiv = styled.div`
  margin-top: 10%;
  float: right;
`;

const FormDiv = styled.div`
  background-color: white;
  padding: 0rem 3rem 0rem 0rem;
`;

const Form = styled.form`
  padding: 5rem;
`;

const Para = styled.p`
  font-size: 4rem;
`;

export default Contact = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <LeftDiv>
        <FormDiv>
          <Form noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Name"
              fullWidth
              color="secondary"
            />
            <br />
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Email"
              fullWidth
              color="secondary"
            />
            <br />
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Contact No."
              fullWidth
              color="secondary"
            />
            <br />
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Message"
              fullWidth
              color="secondary"
            />
            <br />
            <Button
              variant="contained"
              className={classes.button}
              color="secondary"
            >
              Send
            </Button>
          </Form>
        </FormDiv>
      </LeftDiv>
      <RightDiv>
        <Para>
          Have a Query <br />
          or
          <br /> Wanna say something?
        </Para>
      </RightDiv>
    </Wrapper>
  );
};
