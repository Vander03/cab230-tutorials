import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, FormGroup, Label, Input, FormFeedback, FormText, Button, InputGroup, Form } from 'reactstrap';
import { postLogin } from "../api";

export default function Login() {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const [passValid, setPassValid] = useState(null)
    const [emailValid, setEmailValid] = useState(null)
    const [loginError, setLoginError] = useState(null)



    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        postLogin(email, password, setPassValid, setEmailValid, setLoginError)
    }


    return (
        <div className="Login">
            <h1>Login Page</h1>
                <Form onSubmit={onSubmit}>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            bsSize="sm"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                            invalid={ emailValid === false }
                        />
                        <FormFeedback>
                            {`${loginError}`}
                        </FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password:</Label>
                        <Input
                            bsSize="sm"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="*********"
                            invalid={ passValid === false }
                        />
                        <FormFeedback>
                            {`${loginError}`}
                        </FormFeedback>
                    </FormGroup>
                    <InputGroup>
                        <Button className="text-center" color="primary" type="submit">
                            Update
                        </Button>
                    </InputGroup>
                </Form>
        </div>
    )
}