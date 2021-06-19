import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll'}}>
            {props.childern}
        </div>
    );
}

export default Scroll;