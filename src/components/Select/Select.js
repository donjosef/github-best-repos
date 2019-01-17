import React from 'react'

const Select = (props) => {
    const { value, optValues, onSelect, label, className } = props;
    const options = optValues.map(val => (
        <option key={val} value={val}>{val}</option>
    ));

    if (label) {
        return (
            <label className='controls-wrapper__label'>
                <span>{label}</span>
                <select className={className} value={value} onChange={onSelect}>
                    {options}
                </select>
            </label>
        );
    } else {
        return (
            <select className={className} value={value} onChange={onSelect}>
                {options}
            </select>
        );
    }
}

export default Select;
