import React from 'react';
import avatar from '../assets/images/morty.gif';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Hero from '../components/Hero';
import Content from '../components/Content';
import Axios from 'axios';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return(
            <div>
                {/* <Hero title={this.props.title} /> */}

                <Content>
                    <Row>
                        <Col md={{span: 7, offset:2}}>
                            <h1 className="hero-title" style={{paddingBottom:"8%", fontSize:"200%"}}> 4. Contact Me ---------</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 5, offset: 3 }}>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group>
                                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                                    <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group>
                                    <Form.Label htmlFor="message">Message</Form.Label>
                                    <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                                </Form.Group>


                                <button className="button button-home" variant="primary" type="submit" disabled={this.state.disabled}>
                                    Send
                                </button>


                                {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                                {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                            </Form>
                        </Col>
                        {/* <Col md={{ span: 5, offset: 2 }}>
                            
                        </Col> */}
                    </Row>
                </Content>
            </div>
        );
    }

}

export default ContactPage;