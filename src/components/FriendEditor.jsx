import React from 'react';


export default function FriendEditor({
  form,
  currentFriend,
  onInputChange,
  addFriend,
  updateFriend,
}) {
  const isEditing = currentFriend;

  return (
    <div className='sub-container'>
      {
        isEditing
          ? <h3>Edit Friend</h3>
          : <h3>Add a friend!</h3>
      }

      name:
      <input
        type="text"
        value={form.nameValue}
        onChange={evt => onInputChange('nameValue', evt.target.value)}
      />

      age:
      <input
        type="text"
        value={form.ageValue}
        onChange={evt => onInputChange('ageValue', evt.target.value)}
      />

      {
        isEditing
          ? <button onClick={updateFriend}>Update Friend!</button>
          : <button onClick={addFriend}>Add Friend!</button>
      }
    </div>
  );
}
