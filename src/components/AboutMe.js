import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Card from './Card';
function AboutMe(props) {

    return(
            <Row className="justify-content-center py-5">
                <Col md={7} sm={7} className = "justify-content">
                    <Hero subTitle={props.about.title} text2={props.about.text2} text={props.about.text}/>  
                </Col>
                <Col>
                </Col>
            </Row>
    );

}


export default AboutMe;