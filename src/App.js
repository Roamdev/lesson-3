import React, {PureComponent} from 'react';
import './App.css';
import CardForm from './CardForm';
import Steps from './Steps';
import Step from './Step';


class App extends PureComponent{
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
    isTimeOver: false
  }

  handleTabClick() {

  }

  handleChangeForm() {

  }

  handleClickNextForm() {

  }

  handleChangeTimeOver() {

  }

  isFormCommitable() {

  }

  renderForm() {

  }

  render() {
    
    return(
      <div className='App'>
        <div className="container">
          <div className="tab-panel"></div>
        </div>
        <div className="form-content"></div>
        <div className="button-panel">
          <button></button>
        </div>
        <>
        {this.state.step === 1 && (
          <>
            <Step
              key='Personal information'
              onClick={App.handleTabClick}
              isSelected=true
              number=1
              isClickable=false
            />
            <Step
              key='Card information'
              onClick={App.handleTabClick}
              isSelected=false
              number=2
              isClickable=false
            />
            <Step
              key='Finish'
              onClick={App.handleTabClick}
              isSelected=false
              number=3
              isClickable=false
            />
          </>
        )};
        {this.state.step === 2 && (
          <>
            <Step
              key='Personal information'
              onClick={App.handleTabClick}
              isSelected=false
              number=1
              isClickable=true
            />
            <Step
              key='Card information'
              onClick={App.handleTabClick}
              isSelected=false
              number=2
              isClickable=false
            />
            <Step
              key='Finish'
              onClick={App.handleTabClick}
              isSelected=false
              number=3
              isClickable=false
            />
          </>
        )};
        {this.state.step === 3 && (
          <>
            <Step
              key='Personal information'
              onClick={App.handleTabClick}
              isSelected=false
              number=1
              isClickable=true
            />
            <Step
              key='Card information'
              onClick={App.handleTabClick}
              isSelected=false
              number=2
              isClickable=false
            />
            <Step
              key='Finish'
              onClick={App.handleTabClick}
              isSelected=false
              number=3
              isClickable=false
            />
          </>
        )};
      </>
        <CardForm></CardForm>
      </div>
    )
  };
}

export default App;
