import React from 'react';

const Added = ({ data }) => {
  return ( 
    <div className="sub-contain">
      <span className="flex-title">Added (disabled)</span>
      <div className="item">
        <ul>
          {data.map(item =>
            item.added ? 
            <li key={item.key}>
              <button style={{color:'lightgray'}} className="item-button">{item.option}</button>
              <i style={{color:'lightgray'}} className="fa fa-check"></i>
            </li> 
            :
            <li key={item.key}>
              <button disabled className="item-button">{item.option}</button>
              <i className="fa fa-plus"></i> 
            </li>        
          )}
        </ul>
      </div>
    </div>
   );
}
 
export default Added;