import React, { Component } from 'react';

import encounters from './data/encounters.json';
import descriptions from './data/descriptions.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'beach',
      roll: null
    };

    this.rollDice = this.rollDice.bind(this);
  }
  
  rollDice() {
    const roll = Math.floor(Math.random() * 100);
    this.setState({ roll: roll });
  }

  getEncounter() {
    const re = /(\d*d\d+\+?\d*)/g;

    if (this.state.roll) {
      let encounter = encounters
        .filter(e =>
          e[this.state.location] && e[this.state.location].indexOf(this.state.roll) >= 0
        )[0];

        if (encounter) {
          const rolls = descriptions[encounter.name].match(re);
          const words = descriptions[encounter.name].split(' ');

          return (
            <div style={{
              background: '#f7f4d2',
              border: '2px solid #e2dc93',
              padding: '5px'
            }}>
              {words.map((w, i) => {
                if (rolls && rolls.indexOf(w) !== -1) {
                  return <span key={i} style={{ color: '#e5394a', fontWeight: 'bold' }}>{w} </span>;
                }
                return <span key={i}>{w} </span>;
              })}
            </div>
          );
        }
        return null;
    }
    return null;
  }

  render() {
    return (
      <div className="App">
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col-10">
                  <select
                    className="form-control"
                    value={this.state.location}
                    onChange={e => {
                      this.setState({ location: e.target.value, roll: null });
                    }}
                  >
                    <option value="beach">Beach</option>
                    <option value="no_undead">Jungle: No Undead</option>
                    <option value="lesser_undead">Jungle: Lesser Undead</option>
                    <option value="greater_undead">Jungle: Greater Undead</option>
                    <option value="mountains">Mountains</option>
                    <option value="ruins">Ruins</option>
                    <option value="swamp">Swamp</option>
                    <option value="wasteland">Wasteland</option>
                  </select>
                </div>
                <div className="col-2">
                  <button type="button" className="btn btn-primary" onClick={this.rollDice}>Roll</button>
                </div>
              </div>
            </div>
            <div className="col">{this.getEncounter()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
