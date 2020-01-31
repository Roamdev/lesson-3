import React, {PureComponent} from 'react';
import './App.css';
import CardForm from './CardForm';

const data = [{
  name: '',
  value: ''
}]
class App extends PureComponent{
  state = {data}
  render() {

    
    return(
      <div className='App'>
        <CardForm {...this.state.data}></CardForm>
      </div>
    )
  };
}

export default App;
