import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, } from 'react-styled-flexboxgrid';

const Wrapper = styled.div`
    padding-top: 30px;

    @media only screen and (min-width: 768px) {
        padding-top: 60px;
    }
`;

const Title = styled.h1`
    color: #001187;
    font-family: Poppins;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
`;

const Description = styled.p`
    color: #9b9b9b;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 15px;
    line-height: 1.4;
    text-align: center;
`;

const PageHeader = ({
    title,
    description,
}) => (
        <Wrapper>

            <Grid>
                <Row>
                    <Col xs={12}>
                        <Title>{title}</Title>
                        <Description>{description}</Description>
                    </Col>
                </Row>
            </Grid>
        </Wrapper>
    );

export default PageHeader;
