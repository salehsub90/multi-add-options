import React, { Component } from 'react';
import Added from './Added';
import Hovering from './Hovering';
import Text from './Text';

class Title extends Component {

  state = {
    data: [
      {option: "Budget", added: false, key: 1},
      {option: "Food allergies", added: false, key: 2},
      {option: "Number of people", added: false, key: 3},
      {option: "Special restrictions", added: false, key: 4}
    ]
  }

  handleClick = (e) => {    
    var added_elmnt = e.target.innerHTML;
    console.log(added_elmnt);
    const data = [...this.state.data];
    for (let i = 0; i < data.length; i++) {
      if (added_elmnt === data[i].option ) {
        data[i].added = true;
      }
    }
    this.setState({ data });
  }

  render() {

    const { data } = this.state; 
    return (
      <div className="container">
        <Text />
        <Hovering data={data} handleClick={this.handleClick} />        
        <Added data={data} />
      </div>
    );
  }
}

export default Title;