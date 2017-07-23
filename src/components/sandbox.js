import React, { Component } from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Notification from './notification';

class Sandbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNotification: true
        }
        this.onNotificationClose = this.onNotificationClose.bind(this);
    }

    onNotificationClose() {
        console.log('notification closed!');
        let clonedState = Object.assign({}, this.state);
        clonedState.showNotification = false;
        let showNotification = clonedState.showNotification;
        this.setState({
            showNotification
        })
    }

    render() {
        const notificationIconUrl = 'http://findicons.com/files/icons/2192/flavour_extended/48/check.png';
        const notificationMessage = 'some message here!';
        const notificationBgColor = '#ff9900';
        return (
            <div>
                <Notification bgColor={notificationBgColor} icon={notificationIconUrl} showNotification={this.state.showNotification} msg={notificationMessage} onCloseClick={this.onNotificationClose}/>
                <div>SANDBOX CONTENT</div>
            </div>
        );
    }
}

export default Sandbox;