import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import './TypingChallengeContainer.css';

function TypingChallengeContainer({ words, characters, wpm }) {
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
                <p>This is the Real Challenge!</p>
            </div>
        </div>
    );
}

export default TypingChallengeContainer;
