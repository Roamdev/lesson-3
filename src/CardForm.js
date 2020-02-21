import React, {PureComponent} from 'react';

class CardForm extends PureComponent {
    state = {
        leftTime: 60
    }

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {

    };

    componentDidMount(){
       let timer = setInterval(() => {
            if (this.state.leftTime === 0) {
                clearInterval(timer)
           }
           this.setState({ leftTime: this.state.leftTime - 1 })
       }, 1000);
    };


    handleChangeForm = (event) => {
        const { value, name } = event.target
        this.props.onChangeForm(name, value);
    };

    render() {
        return(
            <div className='card-form'>
                <input 
                    name='cardNumber'
                    onChange={(e) => this.props.handleChangeForm('email', e.target.value)}
                    />
                <button onClick={() =>  { console.log(localStorage.lol)}}>click</button>
                <div className='left-time'>timer: {this.state.leftTime}</div>
            </div>
        )
    };
}

export default CardForm;