import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Fade from 'react-reveal/Fade';
import {Tab, Nav, Container} from 'react-bootstrap'
import Cards from '../components/Cards';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import devgrub from '../assets/images/devgrub.png';
import youtube from '../assets/images/youtube.png';
import evverest from '../assets/images/evverest.png';
import avatar from '../assets/images/morty.gif';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: avatar,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: avatar,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
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

    makeItems = (items) => {
        return items.map(item => {
            return <Col xs={6} md={4}><Cards item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} /></Col>
        })
    }

    render() {
        return(
        <Row className="justify-content" style={{ paddingLeft: '10%', paddingRight: '10%' }}>{this.makeItems(this.state.items)}</Row>
            )
    }
}

export default Project;