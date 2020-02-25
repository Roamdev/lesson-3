import React, {PureComponent} from 'react';

class PersonalForm extends PureComponent {

  handleChangeForm = (event) => {
    const { value, name } = event.target
    this.props.onChangeForm(name, value);
};
  render() {
    return (
      <>
        <div className='personal-form'></div>
        <input
          className='personal-form'
          name="firstName"
          onChange={this.props.handleChangeForm}
        />
        <input
          className='personal-form'
          name="lastName"
          onChange={this.props.handleChangeForm}
        />
        <input
          className='personal-form'
          name="email"
          onChange={this.props.handleChangeForm}
        />
      </>
    )}
}


export default PersonalForm;
