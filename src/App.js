import React, {PureComponent} from 'react';
import './App.css';
import CardForm from './CardForm';
import Step from './Step';


class App extends PureComponent{
  state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      cardNumber:'',
      isTimeOver: false
    }

  handleTabClick = (step) => {
    if (!step) return false
    this.setState({ step })
  }

  handleChangeForm = (key, value) => {
    if (!key && !value) return false
    this.setState({[key]: value})
  }

  handleClickNextForm() {
    this.setState({step: this.state.step + 1} )
  }

  handleChangeTimeOver = (isTimeOver) => {
    this.setState({isTimeOver})
  }

  isFormCommitable() {
    if (this.state.step === 1) {
      if (this.state.firstName === '') return false
      if (this.state.lastName === '') return false
      if (this.state.email === '') return false
      if (this.state.email.includes('@')) return false
      return true
      // if (
      //   this.state.firstName !== '' 
      //   && this.state.lastName !== '' 
      //   && this.state.email !== '' 
      //   && this.state.email.includes('@')
      // ) return true 
      
      // if (
      //   this.state.firstName === '' 
      //   && this.state.lastName !== '' 
      //   && this.state.email !== '' 
      //   && this.state.email.includes('@')
      //   ) return false
      // if (
      //   this.state.firstName !== '' 
      //   && this.state.lastName === '' 
      //   && this.state.email !== '' 
      //   && this.state.email.includes('@')
      //   ) return false
      // if (
      //   this.state.firstName !== '' 
      //   && this.state.lastName !== '' 
      //   && this.state.email === '' 
      //   && this.state.email.includes('@')
      // ) return false


    }
    if (this.state.step === 2) {
      return this.state.cardNumber.length === 16
    }
    if (this.state.step !== 1 | 2) {
      return false
    }
  }

  renderForm() {

  }

  render() {
    const personal = {
      key: 'Personal information',
      onClick: this.handleTabClick,
      number: 1,
    }
    const cardInf = {
      key: 'Card information',
      number: 2,
      onClick: this.handleTabClick
    }
    const finish = {
      key: 'Finish',
      number: 3,
      onClick: this.handleTabClick
    }
    console.log(this.state.email)
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
          1
            <Step
              isSelected={true}
              isClickable={false}
              {...personal}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...cardInf}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...finish}
            />
          </>
        )};
        {this.state.step === 2 && (
          <>
          2
            <Step
              isSelected={false}
              isClickable={true}
              {...personal}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...cardInf}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...finish}
            />
          </>
        )};
        {this.state.step === 3 && (
          <>
          3
            <Step
              isSelected={false}
              isClickable={true}
              {...personal}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...cardInf}
            />
            <Step
              isSelected={false}
              isClickable={false}
              {...finish}
            />
          </>
        )};
      </>
        <CardForm handleChangeForm={this.handleChangeForm}></CardForm>
      </div>
    )
  };
}

export default App;
