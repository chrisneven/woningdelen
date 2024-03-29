import * as React from 'react';
import styled from 'styled-components';
import GlobalStyle from '../styles/GlobalStyle';

const StyledLayoutRoot = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

interface LayoutRootProps {
    className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
    <>
        <GlobalStyle />
        <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
    </>
);

export default LayoutRoot;
