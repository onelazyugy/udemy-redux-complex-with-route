import React, { Component } from 'react';

class Auth extends Component {
    constructor(props) {
        super(props);
        debugger;
    }

    componentDidMount() {
        debugger;
        console.log('component did mount');
        console.log('param code value is:', this.props.match.params.code.split('=')[1]);
    }

    render() {
        return (
            <div>
                <div>AUTH PAGE: {this.props.match.params.code.split('=')[1]}</div>
            </div>
        );
    }
}

export default Auth;