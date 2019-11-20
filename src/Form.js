import React, { Component } from 'react';


class Form extends Component {

    constructor(props) {
        super(props);//to use 'this' and access parent properties

        this.initialState = {
            name: '',
            city: ''
        };
        //Set the initial state
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        //Change the state from the default
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }

    handleSubmit = () => {
        //console.log('submitted');
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)//Clears the form fields
    }

    render() {
        return (
            <div className="card mt-4">
                <h5 className="card-header bg-dark text-white">Add User</h5>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Enter Name"
                                className="form-control" value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <input type="text" name="city" placeholder="Enter City"
                                className="form-control" value={this.state.city} onChange={this.handleChange} />
                        </div>
                        <button type="button" className="btn btn-sm btn-outline-dark" onClick={this.handleSubmit} >
                            Create
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;