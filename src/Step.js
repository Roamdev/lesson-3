import React, {PureComponent} from 'react';

class Step extends PureComponent {
  state = { step: 1 };
  handleClick() {

  }

  render () {
    return(
      // <div className='hui' onClick={() => this.props.onClick()}>lol</div>
      <div className='step'>
        {this.props.isSelected === true && (
          <div className='step-selected'>hui</div>
        )}
        {this.props.isClickable === true && (
          <div>pisda</div>
        )}
        <div className='step__number'>{this.props.number}</div>
        <div className='step__title'></div>

      </div>
    )

  }
  
};


export default Step;