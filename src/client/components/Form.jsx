import React, { Component } from 'react';
import TextInput from './presentational/TextInput.jsx';


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            role: '',
            bio: '',
            expertise: [],
            linkedin: '',
            twitter: '',
            website: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Something was submitted' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name: </label>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <input 
                    type="submit"
                    value="Save"
                />
            </form>
        );
    }
}

export default Form;