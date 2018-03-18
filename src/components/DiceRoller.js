import React, { Component } from 'react';

class DiceRoller extends Component {
  rollDice() {
    return Math.floor(Math.random() * 100);
  }

  render() {
    return (
      <div className="col-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.props.getRoll(this.rollDice());
          }}
        >
          Roll
        </button>
      </div>
    );
  }
}

export default DiceRoller;
