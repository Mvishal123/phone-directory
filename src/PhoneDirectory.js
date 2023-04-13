import React, {Component} from 'react';
import ShowSubscribers from './ShowSubscribers';



class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state = {
            newSubscriberList: [{
                id: 1,
                name: "Vishal",
                phone: "1111111111"
            },
            {
                id :2,
                name: "Vaibhav",
                phone: "2222222222"
            }
        ]
        }
    }
    addSubscriberHandler = (newSubscriber) => {
        let subscribersList = this.state.newSubscriberList;
        if(subscribersList.length > 0){
            newSubscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else{
            newSubscriber.id = 1;
        }
        subscribersList.push(newSubscriber);
        this.setState({newSubscribersList : subscribersList});
        console.log("Phone Directory");
        console.log(this.state.newSubscriberList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subscribersList={this.state.newSubscriberList}/>
        );
    }
}

export default PhoneDirectory;

