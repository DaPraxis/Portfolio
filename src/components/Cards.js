import React, { useState } from 'react';

import CardInfo from '../components/CardInfo';

import { useSpring, animated as a } from 'react-spring';
function Card(props) {

    return(
        <div className="g-card" onClick={(e) => props.click(props.item)}>
            <div class="hovereffect2">
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} />
                <div class="overlay">
                    <h2>{props.item.title}</h2>
                    <p class="icon-links">
                        <a href="#">
                            <span class="fa fa-twitter"></span>
                        </a>
                        <a href="#">
                            <span class="fa fa-facebook"></span>
                        </a>
                        <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                            <i class="fas fa-code-branch"></i>
                        </a>
                    </p>
                </div>
            </div>
            { props.item.selected && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} /> }
        </div>
    );

}

export default Card;


