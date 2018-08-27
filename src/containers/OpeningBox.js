import React from 'react';
import OpeningList from '../components/OpeningList';

class OpeningBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      films: [
        {title: 'Saving Private Ryan', date: '10/20/1976', id: 123},
        {title: 'SAW', date: '12/23/1984', id: 456},
      ]
    };
  }

  render() {
    return (
      <div className="opening-box">
        <OpeningList openings={this.state.films}/>
      </div>
    );
  }
}

export default OpeningBox;
