import React, { Component } from 'react';
import Header from './Header';
import Table from './Table';
import Form from './Form';

class App extends Component {
    //Initial State of the component
    state = {
        users: [],
    };

    removeUser = (index) => {
        //const users = this.state.users;
        const { users } = this.state;
        //Delete | Remove the user from the state
        this.setState({
            users: users.filter((user, i) => {
                return (i !== index);
            })
        });

    }
    //Create a new User
    addUser = (newUserObj) => {
        //Add User | add a user to the users array
        this.setState({
            users: [...this.state.users, newUserObj]
        });
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <Header siteName="UserApp" />
                <div className="container mt-4">
                    <Form handleSubmit={this.addUser} />
                    <Table usersDetails={this.state.users} delUser={this.removeUser} />
                </div>
            </div>
        );
    }
}

export default App;