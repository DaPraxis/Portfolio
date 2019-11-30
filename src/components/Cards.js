import React, { useState } from 'react';

import CardInfo from '../components/CardInfo';
import { faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpring, animated as a } from 'react-spring';
import github from '../assets/images/github.svg'
function Card(props) {

    return(
        <div className="g-card">
            <div class="hovereffect2">
                <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} onClick={(e) => props.click(props.item)}/>
                <div class="overlay">
                    <h2>{props.item.title}</h2>
                    <p class="icon-links">
                    </p>
                </div>
            </div>
            { props.item.selected && <CardInfo item ={props.item} title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} gif={props.item.gif}/> }
        </div>
    );

}

export default Card;


