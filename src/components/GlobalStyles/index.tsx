import React from 'react';

interface IProps {
    children: React.ReactElement
}

function GlobalStyles({ children }: IProps) {
    return children;
}

export default GlobalStyles;