import React, { Component } from 'react';
import './ChallengeSection.css';
import TestContainer from '../TestContainer/TestContainer';

function ChallengeSection({
    selectedParagraph,
    words,
    characters,
    wpm,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
}) {
    return (
        <div className='challenge-section-container'>
            <h1 data-aos='fade-down' className='challenge-section-header'>
                Take a speed test now!
            </h1>
            <TestContainer
                words={words}
                characters={characters}
                wpm={wpm}
                selectedParagraph={selectedParagraph}
                timeRemaining={timeRemaining}
                timerStarted={timerStarted}
                testInfo={testInfo}
                onInputChange={onInputChange}
            />
        </div>
    );
}

export default ChallengeSection;
