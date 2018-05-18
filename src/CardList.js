import React from 'react';
import Card  from './Card';

const CardList = ({robots}) => {
    // Map to loop through the robots.json
    const cardArray = robots.map((user,i) => {
        // When doing loop remember to add unique key
        return (<Card 
                key= {i} 
                id={robots[i].id} 
                name={robots[i].name} 
                email={robots[i].email} 
               />
        );
    })
    
    return (
        <div>
            {cardArray}      
        </div>
    );
}

export default CardList;