import React from "react";
import './Card.css'
import { Icon } from "semantic-ui-react";

const Card = (props) =>
{
    return (
        <div className='column'>
            <img src={props.avatar} alt="expert" />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <div className='starLine'>
                <Icon name='star' />
                <p>{props.star}</p>
            </div>
            
        </div>
    )
}

export default Card