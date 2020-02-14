import React, {PureComponent} from 'react';

class Step extends PureComponent {
  state = { step: 1 }; 
  render () {
    return(
      <div className='hui' onClick={() => this.props.onClick()}>lol</div>
    )

  }
  
};


export default Step;