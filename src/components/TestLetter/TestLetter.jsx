import React from 'react';
import './TestLetter.css';

function TestLetter({ individualLetterInfo }) {
    const { testLetter, status } = individualLetterInfo;

    return (
        <span className={`test-letter test-letter-${status}`}>
            {testLetter}
        </span>
    );
}

export default TestLetter;
