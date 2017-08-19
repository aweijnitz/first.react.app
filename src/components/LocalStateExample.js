import React, { Component } from 'react';

class LocalStateExample extends Component {

    constructor(props) {
        super(props);
        this.state = {counter: 0 };
//        this.increase = this.increase.bind(this); only needed of declaring increaes as normal function

    }

    increase = ()  => {
        console.log('CLICK');
        this.setState(prevState => {
            counter: prevState.counter++
        });
    };

    render() {
        console.log(this.state);

        return (
            <div>
                <h3>LocalStateExample instance</h3>
                <p>Hello <b>{this.props.greetName}</b></p>
                <p>{this.state.counter}</p>
                <button onClick={ this.increase }>CLICK</button>
            </div>
        );
    };
}

export default LocalStateExample;
