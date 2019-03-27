import styled from 'styled-components';

const Container = styled.div`
${({ vertical }) => `
    background: ${vertical ? 'linear-gradient(#DD2C54, #7B286B)' : '#DD2C54'};
    width: 100%;
    min-height: 100vh;
    ${vertical ? `
        display: flex;
        justify-content: center;
        flex-direction: column;
    ` : ''}
`}
`;

export default Container;
