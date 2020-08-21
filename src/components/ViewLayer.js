import styled from 'styled-components';

export default styled.div`
    background: ${props => props.backgroundColor};
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index: ${props => props.zIndex};
`;
