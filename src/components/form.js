import React from 'react';

export const Form = (props) => {
  return (
    <div id="cbmi-form">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          Name of your beloved cat:&nbsp;&nbsp;
          <input
            type="text"
            placeholder={ 'Garfield' }
            value={ props.name }
            onChange={ event => props.changeName(event.target.value) }
          />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          Chest Circumference: &nbsp;&nbsp;
          <input
            type="text"
            placeholder={ '30' }
            size={ 3 }
            value={ props.chest }
            onChange={ event => props.changeChest(event.target.value) }
          />
          &nbsp;cm
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
          LIM:&nbsp;&nbsp;
          <input
            type="text"
            placeholder={ '30' }
            size={ 3 }
            value={ props.LIM }
            onChange={ event => props.changeLIM(event.target.value) }
          />
          &nbsp;cm
        </div>
      </div>
      <div className="row">
        <div id="submit-button-container" className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <button onClick={ props.calculateCBMI }>
            Calculate your cat's CBMI
          </button>
        </div>
      </div>
    </div>
  );
}
