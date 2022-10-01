import React from 'react';
import './TypingChallenge.css';

function TypingChallenge({ selectedParagraph }) {
    return (
        <div className='typing-challenge'>
            <div className='timer-container'>
                <p className='timer'>00:60</p>
                <p className='timer-info'>Start typing to start test</p>
            </div>

            <div className='textarea-container'>
                <div className='textarea-left'>
                    <div className='textarea test-paragraph'>
                        {selectedParagraph}
                    </div>
                </div>
                <div className='textarea-right'>
                    <textarea
                        placeholder='Start typing here'
                        className='textarea'
                    ></textarea>
                </div>
            </div>
        </div>
    );
}

export default TypingChallenge;
