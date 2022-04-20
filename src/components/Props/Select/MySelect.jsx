import React from 'react';

const MySelect = ({ options, defaultValue, onChange, value }) => {
    return (
        <select 
        className='form-select w-50'
        value={value}
        onChange={e => onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>
                    {opt.name}
                </option>
            ))}
            {/* <option value="val">Sorted by Job</option> */}

        </select>
    );
};

export default MySelect;