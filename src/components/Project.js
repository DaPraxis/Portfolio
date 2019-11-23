import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import {Tab, Nav, Container} from 'react-bootstrap'

function Project(props){
    let createTabs = (skills) =>{
        let tabs=[]
        let tabPlanes=[]
        let skill_counter = 0
        skills.forEach(function(skill){
            skill_counter+=1
            tabs.push(<Nav.Item key={skill_counter}><Nav.Link className="NavTab Nav" eventKey={'nav '+skill_counter.toString()} key={"Nav Tab"+skill_counter.toString()}>{skill.Category}</Nav.Link></Nav.Item>)
            var lines = []
            var line_items = 3
            var line_counter = 0
            var line = []
            var row_counter = 0
            console.log(skill)
            skill.Content.forEach(function(c){
                if (line_counter==line_items){
                    line_counter=0
                    row_counter+=1
                    lines.push(<Row key={row_counter}>{line}</Row>)
                    line=[]
                }
                else{
                    line_counter+=1
                    line.push(<Col key={row_counter*10+line_counter} xs={{ order: line_counter }}>{c}</Col>)
                }
                console.log(c)
                console.log(line)
                // lines.push(
                // <li><a className="lead font-weight-normal hero-text">{c}</a></li>
                // )
            })
            lines.push(<Row key={row_counter}>{line}</Row>)
            tabPlanes.push(<Tab.Pane className = "TabPlane Nav" eventKey={"nav "+skill_counter.toString()} key={"Nav "+skill_counter.toString()}><Container className="list">{lines}</Container></Tab.Pane>)
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
            <Row>
                {row}
            </Row>
        </Tab.Container>)
    }


    return(
        <div className='justify-content-center skills'>
            <Row className="justify-content-center">
                <Col md={{ span: 7, offset: 0 }}>
                    {createTabs(props.project.skills)}
                </Col>
            </Row>
        </div>);
}

export default Project;