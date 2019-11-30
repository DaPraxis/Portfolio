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
import neural1 from '../assets/images/neural/anger1.png'
import neural2 from '../assets/images/neural/disgust1.png'
import neural3 from '../assets/images/neural/eps1.png'
import neural4 from '../assets/images/neural/eps_ce.png'


class Project extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            items: [
                {
                    id: 0,
                    title: 'Neural Network',
                    subTitle: 'Using Neural Network learning facial expression',
                    imgSrc: neural,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Logistic_Regression-Neural_Networks/tree/master/q3_materials',
                    selected: false,
                    technology: 'Python, Scikitlearn, Numpy',
                    category: 'Machine Learning',
                    images: [
                        { url: neural1 },
                        { url: neural2 },
                        { url: neural3 },
                        { url: neural4 },
                    ]
                },
                {
                    id: 1,
                    title: 'Personal Portfolio',
                    subTitle: 'Web page of my own',
                    technology: 'React.js, JavaScript, HTML, CSS',
                    imgSrc: react,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Portfolio',
                    selected: false,
                    category: "React js Front-End Development",
                    images: [

                    ]
                },
                {
                    id: 2,
                    title: 'Driving Simulator',
                    subTitle: 'Driving Simulation Game for Elder People',
                    imgSrc: div_sim,
                    technology: "Babylon.js, MongoDB, Blender",
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/CarSim',
                    selected: false,
                    category: 'Babylon.js Online Game Development',
                    images: [
                        
                    ]
                },
                {
                    id: 3,
                    title: 'Reinforcement Learning Puzzle',
                    subTitle: 'Using reinforcement learning mode train program to solve random puzzle',
                    technology: '; Python, Numpy, Scikitlearn, Scipy, Jupyter Notebook',
                    imgSrc: rein,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Reinforcement_Learning_Puzzle',
                    selected: false,
                    category: 'Machine Learning',
                    images: [
                        
                    ]
                },
                {
                    id: 4,
                    title: 'NOT-NOT',
                    subTitle: 'NOT-NOT game with Finite State Machine on FPGA',
                    technology: 'FPGA, Verilog',
                    imgSrc: NOT,
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/NOT_NOT_GAME-.v-',
                    selected: false,
                    category: 'FPGA Game Development',
                    images: [
                        
                    ]
                },
                {
                    id: 5,
                    title: 'Game Center Application',
                    subTitle: 'Game Center, with sliding-tile, 2048, minesweeper',
                    imgSrc: android,
                    technology: 'Build on Android/Java, SQLite',
                    activeImg: active,
                    link: 'https://github.com/DaPraxis/Android_Game_Center',
                    selected: false,
                    category: 'Android Application',
                    images: [
                        
                    ]
                },
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
            return <Col xs={6} md={4}><Fade><Cards item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Fade></Col>
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