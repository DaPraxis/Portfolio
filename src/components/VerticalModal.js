import {Modal, Button, ButtonToolbar} from "react-bootstrap"
import React, {useState} from 'react';
import SimpleImageSlider from "react-simple-image-slider";
function MyVerticallyCenteredModal(props) {
    
    return (
        <Modal{...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.item.category}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.item.title}</h4>
                <div className='imgContainer' style={{display: 'flex', justifyContent: 'center'}}>
                    {/* <img src={props.item.imgSrc} style={{width:'100%'}}/> */}
                    <SimpleImageSlider
                    width={400}
                    height={300}
                    images={props.item.images}
                />
                </div>
                <p>
                    {props.item.subTitle}
                </p>
                <p>
                    technology: {props.item.technology}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;