import styled from 'styled-components';

const Container = styled.div`
background: linear-gradient(#DD2C54, #7B286B);
width: 100%;
min-height: 100vh;
${({ vertical }) => `
    ${vertical ? `
        display: flex;
        justify-content: center;
        flex-direction: column;
    ` : ''}
`}
`;

export default Container;
