import React from 'react';


export default function Friend({ friend, deleteFriend, setCurrentFriendId }) {
  const onDelete = () => deleteFriend(friend.id);
  const onSetCurrentFriendId = () => setCurrentFriendId(friend.id);

  return (
    <div>
      <span>{friend.name} is {friend.age}</span>

      <button onClick={onSetCurrentFriendId} className='small'>Edit Friend</button>
      <button onClick={onDelete} className='small danger'>Delete Friend</button>
    </div>
  );
}
