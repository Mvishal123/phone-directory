import React, {Component} from 'react';
import Header from './Header';
import './Addsubscriber.css'

class AddSubscriber extends Component {
    constructor(){
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        console.log(state);
    }
    render() {
        const {name, phone} = this.state;
        return(
            <div>
                <Header heading='Add Subscriber'/>
                <div className='component-body-container'>
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-info-form'>
                        <label htmlFor='subcriber-name' className='input-label subcriber-name'>Name: </label><br/>
                        <input className='subscriber-input subscriber-name-input' type='text' id='subcriber-name' name='name' onChange={this.inputChangedHandler}/><br/><br/>
                        <label htmlFor='subscriber-phone' className='input-label subscriber-phone'>Phone: </label><br/>
                        <input className='subscriber-input subscriber-phone-input' id='subscriber-phone' type='text' name='phone' onChange={this.inputChangedHandler}/>
                    </form>
                    <div className='subscriber-info-container'>
                        <span className='details main-detail'><b>Subscriber to be added: </b></span><br/>
                        <span className='details'>Name: {name}</span><br/>
                        <span className='details'>Phone: {phone}</span><br/><br/>
                        <button className='add-btn custom-btn'>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubscriber;