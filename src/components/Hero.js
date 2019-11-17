import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero(props) {

    return(
        // <Jumbotron className="jumbotron-fluid p-0 hero-jumbo">
        //     <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={6}>
                        { props.intro && <h3 className="display-5 font-weight-bolder hero-intro">{props.intro}</h3> }
                        { props.title && <h1 className="display-1 font-weight-bolder hero-title">{props.title}</h1> }
                        { props.title2 && <h1 className="display-4 font-weight-bolder hero-title2">{props.title2}</h1> }
                        { props.subTitle && <h3 className="display-5 font-weight-bolder hero-subTitle">{props.subTitle}</h3> }
                        { props.text && <h3 className="lead font-weight-normal hero-text">{props.text}</h3> }
                        { props.text2 && <h3 className="lead font-weight-normal hero-text">{props.text2}</h3> }
                    </Col>
                </Row>
        //     </Container>
        // </Jumbotron>
    );

}


export default Hero;