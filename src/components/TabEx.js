import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Fade from 'react-reveal/Fade';
// import {Tab, Nav, Tabs, TabPanel, Tabs, TabList} from 'react-bootstrap'
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

function TabEx(props){
    let createTabs = (skills) =>{
        let tabs = []
        let tabPanels=[]
        let tabLists=[]
        let skill_counter = 0
        skills.forEach(function(skill){
            skill_counter+=1
            let idName = 'nav '+skill_counter.toString()
            tabLists.push(<Tab className="tab" tabFor={idName}>{skill.Category}</Tab>)
            let panel=[]
            panel.push(<div><h3 className="display-5 font-weight-bolder Ex title">{skill.Title}</h3></div>)
            panel.push(<div><a href = {skill.Link} className="lead font-weight-normal Ex location">{skill.Location}</a></div>)
            panel.push(<div><h3 className="lead font-weight-normal Ex time">{skill.Time}</h3></div>)
            let line = []
            skill.Content.forEach(function(c){
                line.push(<li className="Ex content">{c}</li>)
            })
            panel.push(<ul>{line}</ul>)
            tabPanels.push(<TabPanel tabId={idName} className = "TabPanel">{panel}</TabPanel>)
        })
        tabs.push(<Tabs defaultTab="nav 1" vertical className="vertical-tabs"><TabList>{tabLists}</TabList>{tabPanels}</Tabs>)
        
    return (
        tabs
    )
    }


    return(
        <div className='justify-content-center skills'>
            <Row className="justify-content-center">
                <Col md={{ span: 7, offset: 0 }}>
                    {createTabs(props.tabEx.skills)}
                </Col>
            </Row>
        </div>
        );
}

export default TabEx;