import React from "react";
import Card from './Card'
import expertList from "./expertList";
import './Card.css'

const CardList = () =>
{
    return (
        <div className='cards'>
            {expertList.map( (expert) =>
            <Card 
                key = {expert.key}
                avatar = {expert.avatar}
                name = {expert.name}
                description = {expert.description}
                star = {expert.star}
            />)}
        </div>
    )
}

export default CardList