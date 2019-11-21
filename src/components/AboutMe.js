import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import {Tab, Nav, ListGroup} from 'react-bootstrap'
import Card from './Card';




function AboutMe(props) {
    let createTabs = (skills) =>{

        let tabs=[]
        let tabPlanes=[]
        let skill_counter = 0
        skills.forEach(function(skill){
            skill_counter+=1
            tabs.push(<Nav.Item><Nav.Link className="NavTab Nav" eventKey={'nav '+skill_counter.toString()} key={"Nav Tab"+skill_counter.toString()}>{skill.Category}</Nav.Link></Nav.Item>)
            let lines = []
            skill.Content.forEach(function(c){
                lines.push(
                <li><h3 className="lead font-weight-normal hero-text">{c}</h3></li>
                )
            })
            // tabPlanes.push(<Tab.Pane className = "TabPlane Nav" eventKey={"nav "+skill_counter.toString()} key={"Nav "+skill_counter.toString()}><ListGroup>{lines}</ListGroup></Tab.Pane>)
            tabPlanes.push(<Tab.Pane className = "TabPlane Nav" eventKey={"nav "+skill_counter.toString()} key={"Nav "+skill_counter.toString()}><ul className="list">{lines}</ul></Tab.Pane>)
        })
        let row = []
        row.push(
            <Col key='tabBars' sm={3}>
                <Nav variant="pills" className="flex-column">
                    {tabs}
                </Nav>
            </Col>)
        row.push(
            <Col key='tabPlanes' sm={9}>
                <Tab.Content>
                    {tabPlanes}
                </Tab.Content>
            </Col>
        )
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="nav 1" className='Nav'>
            <Row className="justify-content-center py-0">
                {row}
            </Row>
        </Tab.Container>)
    }



props.about.skills.forEach(item=>{
        console.log(item.Category)
        console.log(item.Content)
    })


    return(
            <Row className="justify-content-center py-0">
                <Col md={7} sm={7} className = "justify-content">
                    <Hero subTitle={props.about.title} text2={props.about.text2} text={props.about.text}/>  
                </Col>
                <Col>
                    
                </Col>
                <div className='justify-content-center skills'>
                        {createTabs(props.about.skills)}
                    </div>
            </Row>
    );

}


export default AboutMe;