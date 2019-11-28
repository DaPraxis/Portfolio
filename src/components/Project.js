import React, { Children } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Hero from './Hero';
import Fade from 'react-reveal/Fade';
import {Tab, Nav, Container} from 'react-bootstrap'
import Cards from '../components/Cards';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import avatar from '../assets/images/morty.gif';
import active from '../assets/images/giphy.gif';

class Project extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: avatar,
                    activeImg: active,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: avatar,
                    activeImg: active,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    activeImg: active,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    activeImg: active,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: avatar,
                    activeImg: active,
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