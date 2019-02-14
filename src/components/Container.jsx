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
    this.setState(lastState => ({
      friends: lastState.friends.concat({ id: uuid(), name, age }),
    }));
  }

  updateFriend = (id, name, age) => {
    this.setState(lastState => ({
      friends: lastState.friends.map(friend => {
        if (friend.id === id) {
          return { id, name, age };
        }
        return friend;
      }),
    }));
  }

  deleteFriend = id => {
    this.setState(prevState => ({
      friends: prevState.friends.filter(fr => fr.id !== id),
    }));
  }

  setCurrentFriendId = id => {
    this.setState(
      { currentFriendId: null },
      () => this.setState({ currentFriendId: id }),
    );
  }

  render() {
    const currentFriend = this.state.friends.find(
      friend => this.state.currentFriendId === friend.id,
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
