import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';

export default ({bgColor, icon, showNotification, msg, onCloseClick}) => {
    let showComponent = {
        'display': 'none',
        'backgroundColor': bgColor
    }
    if(showNotification) {
        showComponent = {
            'display': '',
            'backgroundColor': bgColor
        }
    } 

    return (
        <Panel style={showComponent}>
            <Container fluid={true}>            
                <Row>
                    <Col md="3">
                        <div className="mui--text-left">
                            {<img src={icon} />}
                        </div>
                    </Col>
                    <Col md="6">
                        <div className="mui--text-center">
                            {msg}
                        </div>
                    </Col>
                    <Col md="3">
                        <div className="mui--text-right">
                            <button onClick={onCloseClick} className="btn btn-primary btn-sm">X</button>
                        </div>
                    </Col>
                </Row>      
            </Container>  
        </Panel>
    );
}
