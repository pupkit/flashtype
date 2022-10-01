import React, { Component } from 'react';
import './TestContainer.css';
import TryAgain from '../TryAgain/TryAgain';

export default function TestContainer({ words, characters, wpm }) {
    return (
        <div className='test-container'>
            <div className='try-again-container'>
                <TryAgain words={words} characters={characters} wpm={wpm} />
            </div>
        </div>
    );
}
