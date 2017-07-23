import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import FontAwesome from 'react-fontawesome';

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
    const colorcheck = {
        'color': 'green'
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
                            <FontAwesome
                                className='fa fa-check'
                                name='fa-check'
                                size='2x'
                                style={colorcheck}
                            />
                            <FontAwesome
                                className='fa fa-thumbs-o-up'
                                name='fa-thumbs-o-up'
                                size='2x'
                                style={colorcheck}
                            />
                            
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
