import React, { Component } from 'react';

class Roller extends Component {
  rollDice() {
    const roll = Math.floor(Math.random() * 99);
    if (roll === 0) {
      return 100;
    }
    return roll;
  }

  render() {
    return (
      <button
        className="btn btn-primary no-radius"
        onClick={() => this.props.setRoll(this.rollDice())}
      >
        Roll
      </button>
    );
  }
}

export default Roller;
