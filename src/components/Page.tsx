import * as React from 'react';
import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { dimensions } from '../styles/variables';

const StyledPage = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    /* padding: ${dimensions.containerPadding}rem; */
    /* margin-bottom: 3rem; */
`;

interface PageProps {
    className?: string;
}

const Page: React.FC<PageProps & HTMLAttributes<HTMLDivElement>> = props => <StyledPage {...props} />;

export default Page;
