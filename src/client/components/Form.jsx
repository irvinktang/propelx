import React, { Component } from 'react';
import TextInput from './presentational/TextInput.jsx';
import Expertise from './presentational/Expertise.jsx';

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
        this.handleTags = this.handleTags.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value});
    }

    handleTags(tags) {
        this.setState({expertise: tags})
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('/', {
            method: "POST",
            headers: {
                Accept: "application.json",
                'Content-Type': "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .catch(err => {
            console.log("Error", err);
        })
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
                <TextInput 
                    Name="Role"
                    Placeholder="Ex. CEO of Startup"
                    Type="text"
                    Value={this.state.role}
                    OnChange={this.handleChange}
                />
                <TextInput 
                    Name="Bio"
                    Placeholder="Tell us about yourself!"
                    Type="textarea"
                    Value={this.state.bio}
                    OnChange={this.handleChange}
                />
                <Expertise 
                    Name="Areas of Expertise"
                    Value={this.state.expertise}
                    OnChange={this.handleTags}
                />
                <TextInput
                    Name="LinkedIn"
                    Type="text"
                    Value={this.state.linkedin}
                    OnChange={this.handleChange}
                />
                <TextInput
                    Name="Twitter"
                    Type="text"
                    Value={this.state.twitter}
                    OnChange={this.handleChange}
                />
                <TextInput
                    Name="Website"
                    Type="text"
                    Value={this.state.website}
                    OnChange={this.handleChange}
                />
                <input
                    type="submit"
                    value="Save Profile"
                />
            </form>
        )
    }
}

export default Form;