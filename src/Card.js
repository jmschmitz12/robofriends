import React from "react";

const Card = ({name, id, email}) =>{
    return(
        <div className='bg-light-green dib br3 ma2 grow tc'>
            <img alt='robot' src={`https://robohash.org/${id}test?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;