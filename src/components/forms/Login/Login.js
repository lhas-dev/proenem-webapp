import React, { useState } from 'react';
import { Col, Row } from 'react-styled-flexboxgrid';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
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

const Login = ({
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
                    <Button type="submit" disabled={!canSubmit} fullWidth variant="contained" color="secondary" style={{ marginTop: 15 }}>Entrar</Button>
                </Col>
            </Row>
        </form>
    )
};

export default Login;
