import React from 'react';
import Opening from './Opening.js';

class OpeningList extends React.Component {

  render(){
    const openingComponents = this.props.openings.map( (opening) => {
      console.log(opening.date);
        return (
          <Opening title={opening.title} date={opening.date} key={opening.id}></Opening>
        );
    });

    return (
      <ul>
        {openingComponents}
      </ul>
    );
  }
}

export default OpeningList;
