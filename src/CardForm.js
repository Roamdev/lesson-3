import React, {PureComponent} from 'react';

class CardForm extends PureComponent {
    componentWillUnmount() {

    };

    componentDidMount(){
        
    };

    handleChangeForm = (event) => {
        const value = event.target.value;
    };

    render() {
        return(
            <div className='card-form'>
                <input 
                    name='cardNumber'
                    onChange={this.handleChangeForm}
                    >
                </input>
                <button onClick={() =>  { console.log(localStorage.lol)}}>click</button>
                <div className='left-time'></div>
            </div>
        )
    };
}

export default CardForm;