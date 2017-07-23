import React from 'react';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

export default ({bgColor, icon, showNotification, msg, onCloseClick}) => {
    let showComponent = {
        'display': 'none'
    }
    if(showNotification) {
        showComponent = {
            'display': ''
        }
    } 

    return (
        <div style={showComponent}>
            <div style={{backgroundColor: bgColor}}>
                <Row>
                    <Col md="3">
                        {<img src={icon} />}
                    </Col>
                    <Col md="6">
                        {msg}
                    </Col>
                    <Col md="3">
                        <button onClick={onCloseClick} className="btn btn-primary btn-sm">X</button>
                    </Col>
                </Row> 
            </div>
        </div>
    );
}
