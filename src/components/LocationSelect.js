import React, { Component } from 'react';

// import encounters from '../data/encounters.json';

class LocationSelect extends Component {
  render() {
    return (
      <select
        className="form-control no-radius"
        value={this.props.location}
        onChange={e => {
          this.props.setLocation(e.target.value);
        }}
      >
        <option value="no_selection">Select location</option>
        <option value="beach">Beach</option>
        <option value="no_undead">Jungle: No Undead</option>
        <option value="lesser_undead">Jungle: Lesser Undead</option>
        <option value="greater_undead">Jungle: Greater Undead</option>
        <option value="mountains">Mountains</option>
        <option value="ruins">Ruins</option>
        <option value="swamp">Swamp</option>
        <option value="wasteland">Wasteland</option>
      </select>
    );
  }
}

export default LocationSelect;

// class LocationSelect extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       location: 'beach'
//     };
//   }

//   render() {
//     return (
//       <div className="col-10">
//         <select
//           className="form-control"
//           value={this.state.location}
//           onChange={e => {
//             this.props.getEncounters(
//               encounters
//                 .filter(en => en[this.state.location])
//                 .map(en => ({ name: en.name, rolls: en[this.state.location] }))
//             );
//             this.setState({ location: e.target.value });
//           }}
//         >
//           <option value="beach">Beach</option>
//           <option value="no_undead">Jungle: No Undead</option>
//           <option value="lesser_undead">Jungle: Lesser Undead</option>
//           <option value="greater_undead">Jungle: Greater Undead</option>
//           <option value="mountains">Mountains</option>
//           <option value="ruins">Ruins</option>
//           <option value="swamp">Swamp</option>
//           <option value="wasteland">Wasteland</option>
//         </select>
//       </div>
//     );
//   }
// }

// export default LocationSelect;
