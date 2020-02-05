import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import avatar from '../assets/images/face.jpg';

function AboutMe(props) {
    return(
            <Row className="justify-content-center py-0">
                <Col md={{ span: 6, offset: 1 }} className = "justify-content">
                    <Hero subTitle={props.about.title} text2={props.about.text2} text={props.about.text}/>  
                </Col>
                <Col >
                    <div className="ava-grid">
                        <img className="avatar" src={avatar} alt={avatar} />
                        <div className="overlay">
                            <p>
                                MAX
                            </p>
                        </div>
                    </div>
                </Col>
                {/* <div className='justify-content-center skills'>
                        {createTabs(props.about.skills)}
                    </div> */}
            </Row>
    );

}


export default AboutMe;