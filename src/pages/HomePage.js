import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutMe from "../components/AboutMe";
import Fade from 'react-reveal/Fade';

function HomePage(props) {
    return(
        <Fade>
            <div>
                <Jumbotron className="jumbotron-fluid p-0 m-0 homePage-jumbo" id="Intro">
                    <Container fluid={true} className="intro-contain">
                        <Hero prop={props.home} title={props.home.title} title2={props.home.title2} subTitle={props.home.subTitle} text={props.home.text} intro={props.home.intro} text2={props.home.text2}/>
                        <Row className="justify-content-center">
                            <Col md={8} sm={12}>
                            <button class="button button-home">
                                Get In Touch
                            </button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
            <div>   
                <Jumbotron className="jumbotron-fluid p-0 m-0 homePage-jumbo" id="AboutMe">
                    <Container fluid={true} className="intro-contain">
                        {/* <Hero subTitle={props.home.about.title} text={props.home.about.text} text2={props.home.about.text2}/> */}
                        <AboutMe about = {props.home.about}/>   
                    </Container>
                </Jumbotron>
            </div>
            <div>  
                <Jumbotron className="jumbotron-fluid p-0 m-0 homePage-jumbo" id="Experience">
                    <Container fluid={true} className="intro-contain">
                        <Hero subTitle={props.home.experience.title}/>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Jumbotron className="jumbotron-fluid p-0 m-0 homePage-jumbo" id="Project">
                    <Container fluid={true} className="intro-contain">
                        <Hero subTitle={props.home.project.title}/>
                    </Container>
                </Jumbotron>
            </div>
            <div>
                <Jumbotron className="jumbotron-fluid p-0 m-0 homePage-jumbo" id="ContactMe">
                    <Container fluid={true} className="intro-contain">
                        <Hero subTitle={props.home.contact.title}/>
                    </Container>
                </Jumbotron>
            </div>
        </Fade>
    );

}

export default HomePage;