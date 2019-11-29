import React from 'react';
// import { useSpring, animated } from 'react-spring';
import Fade from 'react-reveal/Fade';

function CardInfo(props) {

    // const style = useSpring({opacity: 1, from: {opacity: 0}});

    return(
        <div className="g-card-info">
            <Fade>
            {/* <p className="g-card-title">{props.title}</p> */}
            <p className="g-card-sub-title">{props.subTitle}</p>
            {/* <a href={props.link} target="_blank" rel="noopener noreferrer">View</a> */}
            </Fade>
        </div>
    );

}

export default CardInfo;