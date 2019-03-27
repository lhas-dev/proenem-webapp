import React, { useState } from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-styled-flexboxgrid';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import validate from 'validate.js';

const constraints = {
    email: {
        presence: true,
        email: true,
    },
    password: {
        presence: true,
        length: {
            minimum: 5,
        },
    },
};

const ButtonWrapper = styled.div`
    position: relative;
`;

const CircularProgressWrapper = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -4px;
    margin-left: -4px;
`;

const Login = ({
    loading,
    onSubmit,
}) => {
    const [isTouched, setIsTouched] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const validation = validate({ email, password }, constraints);
    const canSubmit = !validation;

    const handleSubmit = event => {
        event.preventDefault();
        onSubmit({ email, password });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row center="xs">
                <Col xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        value={email}
                        type="email"
                        label="Seu e-mail"
                        placeholder="exemplo@proenem.com.br"
                        variant="filled"
                        margin="normal"
                        error={isTouched.email && !!validation && !!validation.email}
                        onChange={event => {
                            setIsTouched({ ...isTouched, email: true });
                            setEmail(event.target.value);
                        }} />
                </Col>
            </Row>
            <Row center="xs">
                <Col xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        value={password}
                        type="password"
                        label="Sua senha"
                        variant="filled"
                        margin="normal"
                        error={isTouched.password && !!validation && !!validation.password}
                        onChange={event => {
                            setIsTouched({ ...isTouched, password: true });
                            setPassword(event.target.value);
                        }} />
                </Col>
            </Row>
            <Row center="xs">
                <Col xs={12} md={6}>
                    <ButtonWrapper>
                        <Button type="submit" disabled={!canSubmit || loading} fullWidth variant="contained" color="secondary" style={{ marginTop: 15 }}>
                            Entrar
                        </Button>
                        {loading && <CircularProgressWrapper><CircularProgress size={24} /></CircularProgressWrapper>}
                    </ButtonWrapper>
                </Col>
            </Row>
        </form>
    )
};

export default Login;
