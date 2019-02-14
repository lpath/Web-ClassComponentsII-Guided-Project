import React from 'react';
import Friend from './Friend';


export default function Friends({ friends, deleteFriend, setCurrentFriendId }) {
  return (
    <div className="sub-container">
      <h3>These are my friends:</h3>
      {
        !friends.length && <h5>Sad!</h5>
      }
      {
        friends.map(friend => (
          <Friend
            key={friend.id}
            friend={friend}
            deleteFriend={deleteFriend}
            setCurrentFriendId={setCurrentFriendId}
          />
        ))
      }
    </div>
  );
}
