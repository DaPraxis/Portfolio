import React, {useState} from 'react';
// import { useSpring, animated } from 'react-spring';
import Fade from 'react-reveal/Fade';
import { FaGithub } from 'react-icons/fa';
import {Modal, Button, ButtonToolbar} from "react-bootstrap"
import MyVerticallyCenteredModal from "./VerticalModal.js"

function CardInfo(props) {
    const [modalShow, setModalShow] = React.useState(false);

    // const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <div className="g-card-info">
            <Fade>
                <div className="icons">
                    {/* <FontAwesomeIcon icon={faCodeBranch}/> */}
                    <div className='icon'>
                        <a href={props.link} target="_blank" rel="noopener noreferrer">
                            <FaGithub size={32}/>
                        </a>
                    </div>
                    {/* <div className='icon'> */}
                        <ButtonToolbar>
                            <button className="button-home" onClick={() => setModalShow(true)}>
                                DEMO
                            </button>
                            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} item={props.item}/>
                        </ButtonToolbar>
                    {/* </div> */}
                </div>
                {/* <p className="g-card-title">{props.title}</p> */}
                <p className="g-card-sub-title">{props.subTitle}</p>
                {/* <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> */}
            </Fade>
        </div>
        
    );

}

export default CardInfo;