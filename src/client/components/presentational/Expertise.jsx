import React from 'react';
import PropTypes from 'prop-types';
import TagsInput from 'react-tagsinput';

const Expertise = ({ Name, Value, OnChange }) => (
    <div>
        <label>{Name}</label>
        <TagsInput
            value={Value}
            onChange={OnChange}
        />
    </div> 
)

Expertise.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired
}

export default Expertise;