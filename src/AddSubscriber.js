import React, {Component} from 'react';
import Header from './Header';
import './Addsubscriber.css'

class AddSubscriber extends Component {
    render() {
        return(
            <div>
                <Header heading='Add Subscriber'/>
                <div className='component-body-container'>
                    <button className='custom-btn'>Back</button>
                    <form className='subscriber-info-form'>
                        <label htmlFor='subcriber-name' className='input-label subcriber-name'>Name: </label><br/>
                        <input className='subscriber-input subscriber-name-input' type='text' id='subcriber-name'/><br/><br/>
                        <label htmlFor='subscriber-phone' className='input-label subscriber-phone'>Phone: </label><br/>
                        <input className='subscriber-input subscriber-phone-input' id='subscriber-phone' type='text'></input>
                    </form>
                    <div className='subscriber-info-container'>
                        <span className='details'>Subscriber to be added: </span><br/>
                        <span className='details'>Name: </span><br/>
                        <span className='details'>Phone: </span><br/><br/>
                        <button className='add-btn custom-btn'>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddSubscriber;