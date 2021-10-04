import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
      const [friends, sefriends] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => sefriends(data))
  },[])
    return (
        <div>
            <h2>users : {friends.length}</h2>
            <div className="friend-container">
                {
                friends.map(fr => <Friend friend={fr} key={fr.id}/>)
                }
            </div>
        </div>
    );
};

export default Friends;