// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class DigitalTimer extends Component {
  state = {seconds: 0, timerStarted: false}

  componentDidMount = () => {
    const {timerStarting} = this.state
  }

  ticking = () => {
    const {seconds, timerStarted} = this.state

    this.setState(prevState => ({
      seconds: prevState.seconds + 1,
    }))
  }

  resetting = () => {
    const {initialTimer} = this.state
    this.setState({seconds: 0, timerStarted: false})
    clearInterval(this.timerId)
  }

  starting = () => {
    const {timerStarted} = this.state
    if (timerStarted === false) {
      this.timerId = setInterval(this.ticking, 1000)
      this.setState({timerStarted: true})
    }
  }

  stoping = () => {
    clearInterval(this.timerId)
    this.setState({timerStarted: false})
  }

  render() {
    const {seconds, timerStarting, initialTimer} = this.state

    const displayedMinutes = Math.floor(seconds / 60)

    const displayedSeconds = seconds - displayedMinutes * 60

    return (
      <div className="background-card">
        <h1 className="main-heading-style">Stopwatch</h1>
        <div className="stopwatch-card">
          <div className="stopwatch-heading-container">
            <img
              className="stopwatch-logo-style"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p className="timer-description-style">Timer</p>
          </div>

          <h1 className="stopwatch-display-style">
            {displayedMinutes.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
            :
            {displayedSeconds.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </h1>
          <div className="buttons-container">
            <button
              className="button-style button-green"
              type="button"
              onClick={this.starting}
            >
              Start
            </button>
            <button
              className="button-style button-red"
              type="button"
              onClick={this.stoping}
            >
              Stop
            </button>
            <button
              className="button-style button-yellow"
              type="button"
              onClick={this.resetting}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default DigitalTimer
