import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ Name, Placeholder, Type, Value, OnChange }) => (
    <div>
        <label>{Name}</label>
        <input 
            name={Name}
            placeholder={Placeholder}
            type={Type}
            defaultValue={Value}
            onChange={OnChange}
        />
    </div>
);

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default TextInput;