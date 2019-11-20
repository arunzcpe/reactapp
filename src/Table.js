import React, { Component } from 'react';

//Functional Component 1
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>City</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}
//Functional Component 2
const TableBody = (props) => {
    //Declarative code
    const rows = props.usersDetails.map((user, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>
                    <button className="btn btn-sm btn-danger" onClick={() => props.removeUser(index)}>
                        Delete
                    </button>
                </td>
            </tr >
        );
    });
    //console.log(rows);
    return (
        <tbody>{rows}</tbody>
    );
}


class Table extends Component {
    render() {
        //const usersDetails = this.props.usersDetails;
        //const delUser = this.props.delUser;
        const { usersDetails, delUser } = this.props;

        return (
            <table className="table table-striped table-dark mt-3">
                <TableHeader />
                <TableBody usersDetails={usersDetails} removeUser={delUser} />
            </table>
        );
    }
}

export default Table;