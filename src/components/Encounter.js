import React, { Component } from 'react';

import encounters from '../data/encounters.json';
import descriptions from '../data/descriptions.json';

import '../css/Encounter.css';

class Encounter extends Component {
  render() {
    if (this.props.roll === 0 || this.props.location === '') {
      return <div className="Encounter" />;
    }

    const availableEncounters = encounters.filter(
      encounter => encounter[this.props.location]
    );

    const encounter = availableEncounters.filter(
      encounter =>
        encounter[this.props.location].indexOf(this.props.roll) !== -1
    );

    if (encounter.length > 0) {
      const text = descriptions[encounter[0].name].split(' ').map((word, i) => {
        if (word.match(/\d*d\d+/)) {
          return (
            <span key={i} className="dice">
              {word}
            </span>
          );
        }
        return word;
      });
      return (
        <div className="Encounter">
          {text.map(t => {
            if (React.isValidElement(t)) {
              return [t, ' '];
            }
            return `${t} `;
          })}
        </div>
      );
    }

    return <div className="Encounter" />;
  }
}

export default Encounter;
