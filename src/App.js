import React, { Component } from 'react';
import TombHelper from './components/TombHelper';

import './css/App.css';

class App extends Component {
  // getEncounter() {
  //   const re = /(\d*d\d+\+?\d*)/g;

  //   if (this.state.roll) {
  //     if (descriptions[this.state.encounter]) {
  //       const encounter = descriptions[this.state.encounter];
  //       const rolls = encounter.match(re);
  //       const words = encounter.split(' ');

  //       return (
  //         <div
  //           style={{
  //             background: '#f7f4d2',
  //             border: '2px solid #e2dc93',
  //             padding: '5px'
  //           }}
  //         >
  //           {words.map((w, i) => {
  //             if (rolls && rolls.indexOf(w) !== -1) {
  //               return (
  //                 <span
  //                   key={i}
  //                   style={{ color: '#e5394a', fontWeight: 'bold' }}
  //                 >
  //                   {w}{' '}
  //                 </span>
  //               );
  //             }
  //             return <span key={i}>{w} </span>;
  //           })}
  //         </div>
  //       );
  //     }
  //     return null;
  //   }
  //   return null;
  // }

  render() {
    return (
      <div className="container-fluid p-2">
        <div className="App">
          <TombHelper />
        </div>
      </div>
    );
  }
}

export default App;
