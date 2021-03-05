import React from 'react';

const Hovering = ({ data, handleClick }) => {
  return (
    <div className="sub-contain">
      <span className="flex-title">Hovering</span>
      <div className="item">
        <ul>
          {data.map(item =>
            <li key={item.key} className="item-hover">
                <button onClick={handleClick} className="item-button item-hover">{item.option}</button>
                <i className="fa fa-plus"></i>
            </li> 
          )}
        </ul>
      </div>
    </div>
  );
}

export default Hovering;