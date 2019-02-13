import React from 'react';


const initialState = {
  nameValue: '',
  ageValue: '',
};

export class FriendAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.currentFriend
      ? {
        nameValue: props.currentFriend.name,
        ageValue: props.currentFriend.age,
      }
      : initialState;
  }

  clearInputs = () => {
    this.setState(initialState);
  }

  onNameChange = event => {
    this.setState({
      nameValue: event.target.value,
    });
  }

  onAgeChange = event => {
    if (Number(event.target.value)) {
      this.setState({
        ageValue: event.target.value,
      });
    }
  }

  onFriendAdd = () => {
    if (this.state.nameValue && this.state.ageValue) {
      this.props.addFriend(this.state.nameValue, this.state.ageValue);
      this.clearInputs();
    }
  }

  onFriendUpdate = () => {
    if (this.state.nameValue && this.state.ageValue) {
      this.props.updateFriend(
        this.props.currentFriend.id,
        this.state.nameValue,
        this.state.ageValue,
      );
      this.clearInputs();
      this.props.setCurrentFriendId(null);
    }
  }

  render() {
    const isEditing = this.props.currentFriend;

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
          value={this.state.nameValue}
          onChange={this.onNameChange}
        />

        age:
        <input
          type="text"
          value={this.state.ageValue}
          onChange={this.onAgeChange}
        />

        {
          isEditing
            ? <button onClick={this.onFriendUpdate}>Update Friend!</button>
            : <button onClick={this.onFriendAdd}>Add Friend!</button>
        }
      </div>
    );
  }
}

export default FriendAdder;
