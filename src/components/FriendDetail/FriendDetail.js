import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friendDetail, setFriendDetail] = useState({});
    const history = useHistory();
    const goFriendLstBtn = () =>{
        history.push('/friends')
    }
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res => res.json())
        .then(data => setFriendDetail(data))
    },[])
    return (
        <div>
            <h2>Friend details of {friendDetail.name}</h2>
            <p>Phone: {friendDetail.phone}</p>
            <button onClick={goFriendLstBtn}>Go to Friends</button>
        </div>
    );
};

export default FriendDetail;