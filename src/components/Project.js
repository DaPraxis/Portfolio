import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Fade from 'react-reveal/Fade';
import {Tab, Nav, Container} from 'react-bootstrap'
import Cards from '../components/Cards';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import avatar from '../assets/images/morty2.jpg';
import active from '../assets/images/giphy.gif';
import neural from '../assets/images/neural2.png';
import android from '../assets/images/android2.jpg';
import div_sim from '../assets/images/driving_sim2.png';
import react from '../assets/images/react2.png';
import NOT from '../assets/images/NOT2.png'
import rein from '../assets/images/rein2.png'

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            items: [
                {
                    id: 0,
                    title: 'Neural Network',
                    subTitle: 'Using Neural Network learning facial expression, Python, Scikitlearn, Numpy',
                    imgSrc: neural,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Logistic_Regression-Neural_Networks/tree/master/q3_materials',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Android Game Center App',
                    subTitle: 'Game Center, with sliding-tile, 2048, minesweeper; Build on Android/Java, SQLite',
                    imgSrc: android,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Android_Game_Center',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Personal Portfolio',
                    subTitle: 'Web page of my own; React.js, JavaScript, HTML, CSS',
                    imgSrc: react,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Portfolio',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Driving Simulator',
                    subTitle: 'Driving Simulation Game for Elder People; Babylon.js, MongoDB, Blender',
                    imgSrc: div_sim,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/CarSim',
                    selected: false
                },
                {
                    id: 4,
                    title: 'NOT-NOT',
                    subTitle: 'NOT-NOT game with Finite State Machine on FPGA, verilog',
                    imgSrc: NOT,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/NOT_NOT_GAME-.v-',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Reinforcement Learning Puzzle',
                    subTitle: 'Using reinforcement learning mode train program to solve random puzzle; Python, Numpy, Scikitlearn, Scipy, Jupyter Notebook',
                    imgSrc: rein,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Reinforcement_Learning_Puzzle',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    toggleHover = () => {
        this.setState({hover: !this.state.hover})
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Col xs={6} md={4}><Cards item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Col>
        })
    }

    render() {
        var linkStyle = {paddingLeft: '10%', paddingRight: '10%',}
        return(
            <Row className="justify-content" style={linkStyle} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>{this.makeItems(this.state.items)}</Row>
        
        // <Row className="justify-content" style={linkStyle}>{this.makeItems(this.state.items)}</Row>
            )
    }
}

export default Project;