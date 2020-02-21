import React, {PureComponent} from 'react';

class Step extends PureComponent {
  state = { step: 1 };
  handleClick() {
    if(this.props.isClickable) {
      return this.props.onClick(this.props.number)
    }
  }

  render () {
    return(
      // <div className='hui' onClick={() => this.props.onClick()}>lol</div>
      <div className='step'>
        {this.props.isSelected && (
          <div className='step-selected'>hui</div>
        )}
        {this.props.isClickable && (
          <div className='step step-clickable'>pisda</div>
        )}
        <div className='step__number'>{this.props.number}</div>
        <div className='step__title'>{this.props.children}</div>

      </div>
    )

  }
  
};


export default Step;