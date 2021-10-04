import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const Friend = (props) => {
    const {id, name, address, phone, website} = props.friend;
    const history = useHistory();
    const friendStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        borderRadius: '10px',
        marginBottom:'5px'
    }
    const handleFrndClick = () =>{
        history.push(`/friend/${id}`);
    }
    return (
        <div style={friendStyle}>
            <h2>I am {name}, {id}</h2>
            <h5>Call me : {phone}</h5>
            <p>Visit me: {address.city}</p>
            <p>Website : {website}</p>
            <Link to={`/friend/${id}`}>Visit Me</Link>
            <br/>
            <Link to={`/friend/${id}`}>
                <button>Visit BTN</button>
            </Link>
            <br/>
            <button onClick={handleFrndClick}>Visit Me2</button>
        </div>
    );
};

export default Friend;