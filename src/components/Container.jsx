import React from 'react';
import uuid from 'uuid';
import Friends from './Friends';
import FriendEditor from './FriendEditor';


const initialState = {
  friends: [
    { id: uuid(), name: 'Tom', age: '35' },
    { id: uuid(), name: 'Luke', age: '27' },
    { id: uuid(), name: 'Josh', age: '34' },
  ],
  currentFriendId: null,
};

class Container extends React.Component {
  state = initialState

  addFriend = (name, age) => {
    // add a new friend object to `state.friends` using setState
  }

  updateFriend = (id, name, age) => {
    // update an existing friend (the `id` tells us which friend to update)
    // using setState
  }

  deleteFriend = id => {
    // 1- delete an existing friend (the `id` tells us which) using setState
    // 2- also set currentFriendId to null
  }

  setCurrentFriendId = id => {
    // set state.currentFriendId to be `id`
  }

  render() {
    const currentFriend = this.state.friends.find(
      Function.prototype,
      // find the friend object that has an id of `state.currentFriendId`
    );

    return (
      <div className='container'>
        <Friends
          friends={this.state.friends}
          deleteFriend={this.deleteFriend}
          setCurrentFriendId={this.setCurrentFriendId}
        />

        {
          !this.state.currentFriendId &&
          <FriendEditor
            addFriend={this.addFriend}
          />
        }
        {
          this.state.currentFriendId &&
          <FriendEditor
            currentFriend={currentFriend}
            updateFriend={this.updateFriend}
            setCurrentFriendId={this.setCurrentFriendId}
          />
        }
      </div>
    );
  }
}

export default Container;
