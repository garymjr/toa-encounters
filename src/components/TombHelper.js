import React, { Component } from 'react';
import Encounter from './Encounter';
import Roller from './Roller';
import LocationSelect from './LocationSelect';

import '../css/TombHelper.css';

class TombHelper extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="TombHelper">
          <Encounter
            roll={this.state.roll || 0}
            location={this.state.location || ''}
          />
          <div className="row p-1">
            <div className="col-1">
              <Roller setRoll={roll => this.setState({ roll })} />
            </div>
            <div className="col">
              <LocationSelect
                location={this.state.location || 'no_selection'}
                setLocation={location => this.setState({ location })}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TombHelper;
