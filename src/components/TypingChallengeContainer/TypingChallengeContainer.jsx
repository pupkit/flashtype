import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';
import TypingChallenge from '../TypingChallenge/TypingChallenge';

function TypingChallengeContainer({
    words,
    characters,
    wpm,
    selectedParagraph,
    timerStarted,
    timeRemaining,
}) {
    return (
        <div className='typing-challenge-container'>
            <div className='details-container'>
                <ChallengeDetailsCard cardName='Words' cardValue={words} />
                <ChallengeDetailsCard
                    cardName='Characters'
                    cardValue={characters}
                />
                <ChallengeDetailsCard cardName='Speed' cardValue={wpm} />
            </div>

            {/* The real challenge */}
            <div className='typewriter-container'>
                <TypingChallenge
                    selectedParagraph={selectedParagraph}
                    timeRemaining={timeRemaining}
                    timerStarted={timerStarted}
                />
            </div>
        </div>
    );
}

export default TypingChallengeContainer;
