import React, { Component } from 'react';

class Code extends Component {
    constructor(props) {
        super(props);
        debugger;
    }

    componentDidMount() {
        debugger;
        console.log('component did mount');
        console.log('param code value is:', this.props.location.search.split('=')[1]);
    }

    render() {
        return (
            <div>
                <div>CODE PAGE: {this.props.location.search.split('=')[1]}</div>
            </div>
        );
    }
}

export default Code;