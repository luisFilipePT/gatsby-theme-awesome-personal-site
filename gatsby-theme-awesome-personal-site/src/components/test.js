import React from 'react';

export const Test = ({ text = 'text in package' }) => {
    return (
        <h2>{ text }</h2>
    )
};

export default Test;