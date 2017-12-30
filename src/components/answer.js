import React from 'react';

export const Answer = (props) => {
  let { name, CBMI } = props;
  let leftMargin = CBMI/50 * 100 - 2;
  if (leftMargin < 0) leftMargin = -2;
  else if (leftMargin > 100) leftMargin = 98;
  return (
    <div id="cbmi-answer">
      { name ? <span>{`${name} `}</span> : 'Your cat ' }
      { `has a CBMI of : ${CBMI}` }
      <p>
        CBMI or Cat Body Mass Index is a good indicator of your cat's health.
        It should ideally be a figure between 12 and 30.
      </p>
      <br />
      <img src={ require('../images/icon.png') } style={{ marginLeft: `${leftMargin}%`, width: '30px'}} />
      <br />
      <div id="too" className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
      >
        Too
      </div>
      <div id="skinny" className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
      >
        Skinny
      </div>
      <div id="healthy" className="progress-bar progress-bar-success progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
      >
        Healthy
      </div>
      <div id="overweight" className="progress-bar progress-bar-warning progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
      >
        Overweight
      </div>
      <div id="obese" className="progress-bar progress-bar-danger progress-bar-striped" role="progressbar"
        aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
      >
        Obese
      </div>
      <br />
      <br />
      <div id="test">

      </div>
    </div>
  );
}
