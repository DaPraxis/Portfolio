import React, { Children } from 'react';
import TabEx from './TabEx'

function Experience(props){
    return(
        <TabEx tabEx = {props.experience}/>
    );
}

export default Experience;