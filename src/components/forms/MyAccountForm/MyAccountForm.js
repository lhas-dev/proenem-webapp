import React from 'react';
import styled from 'styled-components';
import { Row, Col, } from 'react-styled-flexboxgrid';
import {
    TextField,
    SelectField,
} from '../../';

const Wrapper = styled.div`
    @media only screen and (min-width: 768px) {    
        padding-left: 90px;
    }
`;

const Fieldset = styled.fieldset`
    margin-bottom: 20px;
    border: 0;
`;

const Legend = styled.div`
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const LegendText = styled.h2`
    flex-grow: 1;
    color: #001187;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
`;

const LegendLine = styled.div`
    flex-grow: 38;
    margin-left: 20px;
    height: 1px;
    background: #ededed;
`;

const MyAccountForm = () => (
    <>
        <Wrapper>
            <Fieldset>
                <Legend>
                    <LegendText>Dados pessoais</LegendText>
                    <LegendLine />
                </Legend>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" value="Preenchido" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" value="Focus" />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" value="(27) 981141549" />
                    </Col>
                </Row>
            </Fieldset>
            <Fieldset>
                <Legend>
                    <LegendText>Endereço de cobrança</LegendText>
                    <LegendLine />
                </Legend>
                <Row>
                    <Col xs={12} md={6}>
                        <TextField
                            placeholder="Placeholder"
                            value="29456-092"
                            button="Atualizar"
                            buttonOnClick={() => console.log('Refresh triggered.')}
                        />
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" value="Av. Paulista" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <TextField placeholder="Placeholder" value="15.902" />
                    </Col>
                    <Col xs={5}>
                        <TextField placeholder="Placeholder" value="Ed. Business Center, Sl. 501" />
                    </Col>
                    <Col xs={5}>
                        <TextField placeholder="Placeholder" value="Bela Vista" />
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <SelectField>
                            <option value="">São Paulo (SP)</option>
                        </SelectField>
                    </Col>
                    <Col xs={12} md={6}>
                        <TextField placeholder="Placeholder" value="São Paulo" />
                    </Col>
                </Row>
            </Fieldset>
        </Wrapper>
    </>
);

export default MyAccountForm;
