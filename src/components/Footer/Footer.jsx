import React from 'react';
import './Footer.css';

export default class Footer extends React.Component {
    render = () => {
        return (
            <div className='footer-container'>
                <a
                    href='https://pupkit.github.io/flashtype'
                    className='footer-link'
                    target='_blank'
                    rel='noreferrer'
                >
                    Watch the full react course now!
                </a>
            </div>
        );
    };
}
