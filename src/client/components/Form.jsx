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
                <TextInput 
                    Name="Name"
                    Placeholder="Your Name Here"
                    Type="text"
                    Value={this.state.name}
                    OnChange={this.handleChange}
                />
            </form>
        );
    }
}

export default Form;