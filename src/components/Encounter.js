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
      const text = [];
      const parts = descriptions[encounter[0].name].split(
        new RegExp(/(\d*d\d+\s\+\s\d+|\d*d\d+)/g)
      );
      for (let i = 0; i < parts.length; i++) {
        if (i === 0 || i % 2 === 0) {
          text.push(parts[i]);
        } else {
          text.push(
            <span key={i} className="dice">
              {parts[i]}
            </span>
          );
        }
      }

      return <div className="Encounter">{text.map(t => [t, ' '])}</div>;
    }

    return <div className="Encounter">Reroll: missing encounter data.</div>;
  }
}

export default Encounter;
