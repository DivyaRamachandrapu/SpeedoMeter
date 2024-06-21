import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  State = {speed: 0}

  speedIncrement = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }
  speedDecrement = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div>
        <div className="speedometerContainer">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometerImg"
          />
          <h1 className="speed">Speed is {speed}mph</h1>
          <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

          <div className="buttonContainer">
            <button
              type="buttton"
              className="accelerateButton button"
              onClick={this.speedIncrement}
            >
              Accelerate
            </button>
            <button
              type="button"
              className="breakButton button"
              onClick={this.speedDecrement}
            >
              Apply Break
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer

