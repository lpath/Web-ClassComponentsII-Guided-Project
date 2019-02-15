import React from 'react';
import uuid from 'uuid';
import Friends from './Friends';
import FriendEditor from './FriendEditor';


const form = {
  nameValue: '',
  ageValue: '',
};

const initialState = {
  friends: [
    { id: uuid(), name: 'Tom', age: '35' },
    { id: uuid(), name: 'Luke', age: '27' },
    { id: uuid(), name: 'Josh', age: '34' },
  ],
  currentFriendId: null,
  form,
};

class Container extends React.Component {
  state = initialState

  clearInputs = () => {
    this.setState({ form });
  }

  onInputChange = (field, value) => {
    this.setState(st => ({
      form: {
        ...st.form,
        [field]: value,
      },
    }));
  }

  addFriend = () => {
    this.setState(lastState => ({
      friends: lastState.friends.concat(
        {
          id: uuid(),
          name: lastState.form.nameValue,
          age: lastState.form.ageValue,
        },
      ),
      currentFriendId: null,
      form,
    }));
  }

  updateFriend = () => {
    this.setState(st => ({
      form,
      currentFriendId: null,
      friends: st.friends.map(friend => {
        if (friend.id === st.currentFriendId) {
          return {
            id: st.currentFriendId,
            name: st.form.nameValue,
            age: st.form.ageValue,
          };
        }
        return friend;
      }),
    }));
  }

  deleteFriend = id => {
    this.setState(prevState => ({
      friends: prevState.friends.filter(fr => fr.id !== id),
      currentFriendId: null,
      form,
    }));
  }

  setCurrentFriendId = id => {
    this.setState(st => {
      const currentFriend = st.friends.find(
        friend => id === friend.id,
      );

      return {
        currentFriendId: id,
        form: {
          nameValue: currentFriend.name,
          ageValue: currentFriend.age,
        },
      };
    });
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

        <FriendEditor
          form={this.state.form}
          isEditing={!!currentFriend}
          onInputChange={this.onInputChange}
          addFriend={this.addFriend}
          updateFriend={this.updateFriend}
        />
      </div>
    );
  }
}

export default Container;
