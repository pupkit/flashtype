import React from 'react';
import './App.css';
import Nav from '../Nav/Nav';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

const TotalTime = 60;
const ServiceUrl = 'http://metaphorpsum.com/paragraphs/1/9';
class App extends React.Component {
    state = {
        selectedParagraph: 'Hello, World!',
        timerStarted: false,
        timeRemaining: TotalTime,
        words: 0,
        characters: 0,
        wpm: 0,
        testInfo: [],
    };

    componentDidMount() {
        fetch(ServiceUrl)
            .then((response) => response.text())
            .then((data) => {
                const selectedParagraphArray = data.split('');
                const testInfo = selectedParagraphArray.map(
                    (selectedLetter) => {
                        return {
                            testLetter: selectedLetter,
                            status: 'notAttempted',
                        };
                    }
                );
                this.setState({ testInfo, selectedParagraph: data });
            });
    }

    handleUserInput = (inputValue) => {
        if (!this.state.timerStarted) this.startTimer();

        const characters = inputValue.length;
        const words = inputValue.split(' ').length;
        const index = characters - 1;

        if (index < 0) {
            this.setState({
                testInfo: [
                    {
                        testLetter: this.state.testInfo[0].testLetter,
                        status: 'notAttempted',
                    },
                    ...this.state.testInfo.slice(1),
                ],
                characters,
                words,
            });
        }

        if (index >= this.state.selectedParagraph.length) {
            this.setState({ characters, words });
            return;
        }

        const testInfo = this.state.testInfo;
        if (!(index === this.state.selectedParagraph.length - 1))
            testInfo[index + 1].status = 'notAttempted';

        const isCorrect = inputValue[index] === testInfo[index].testLetter;

        testInfo[index].status = isCorrect ? 'correct' : 'incorrect';

        this.setState({ testInfo, words, characters });
    };

    startTimer = () => {
        this.setState({ timerStarted: true });
        const timer = setInterval(() => {
            if (this.state.timeRemaining > 0) {
                const timeSpent = TotalTime - this.state.timeRemaining;
                const wpm =
                    timeSpent > 0
                        ? (this.state.words / timeSpent) * TotalTime
                        : 0;
                this.setState({
                    timeRemaining: this.state.timeRemaining - 1,
                    wpm: parseInt(wpm),
                });
            } else {
                clearInterval(timer);
            }
        }, 1000);
    };

    render() {
        return (
            <div className='app'>
                {/*Nav Section*/}
                <Nav />
                {/*Landing Page*/}
                <Landing />
                {/*Challenge Section*/}
                <ChallengeSection
                    selectedParagraph={this.state.selectedParagraph}
                    words={this.state.words}
                    characters={this.state.characters}
                    wpm={this.state.wpm}
                    timeRemaining={this.state.timeRemaining}
                    timerStarted={this.state.timerStarted}
                    testInfo={this.state.testInfo}
                    onInputChange={this.handleUserInput}
                />
                {/*Footer*/}
                <Footer />
            </div>
        );
    }
}

export default App;
