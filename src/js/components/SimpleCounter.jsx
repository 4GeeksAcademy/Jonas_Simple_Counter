import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types"; 

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="fas fa-clock"></i>
      </div>
      <div className="four">{props.digitFour}</div>
      <div className="three">{props.digitThree}</div>
      <div className="two">{props.digitTwo}</div>
      <div className="one">{props.digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number, 
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function(){
  const four = Math.floor(counter / 1000) % 10;
  const three = Math.floor(counter / 100) % 10;
  const two = Math.floor(counter / 10) % 10;
  const one = counter % 10;

  ReactDOM.render(
    <SimpleCounter 
      digitFour={four}
      digitThree={three}
      digitTwo={two}
      digitOne={one}
    />,
    document.querySelector("#root") 
  );

  counter++;
}, 1000);

export default SimpleCounter;
