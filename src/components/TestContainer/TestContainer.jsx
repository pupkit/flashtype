import React, { Component } from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer';

export default function TestContainer({
    words,
    characters,
    wpm,
    selectedParagraph,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
}) {
    return (
        <div className='test-container'>
            {timeRemaining > 0 ? (
                <div data-aos='fade-up' className='typing-challenge-cont'>
                    <TypingChallengeContainer
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
            ) : (
                <div className='try-again-container'>
                    <TryAgain words={words} characters={characters} wpm={wpm} />
                </div>
            )}
        </div>
    );
}
