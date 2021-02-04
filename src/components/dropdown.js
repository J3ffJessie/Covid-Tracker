import React, {useState} from 'react';
import { render } from 'react-dom';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ApiCall from './covidApi';


const options = [

    {value: 'al', label: 'Alabama'},
    {value: 'ak', label: 'Alaska'},
    {value: 'az', label: 'Arizona'},
    {value: 'ar', label: 'Arkansas'},
    {value: 'ca', label: 'California'},
    {value: 'co', label: 'Colorado'},
    {value: 'ct', label: 'Connecticut'},
    {value: 'de', label: 'Deleware'},
    {value: 'fl', label: 'Florida'},
    {value: 'ga', label: 'Georgia'},
    {value: 'hi', label: 'Hawaii'},
    {value: 'id', label: 'Idaho'},
    {value: 'il', label: 'Illinois'},
    {value: 'in', label: 'Indiana'},
    {value: 'ia', label: 'Iowa'},
    {value: 'ks', label: 'Kansas'},
    {value: 'ky', label: 'Kentucky'},
    {value: 'la', label: 'Louisiana'},
    {value: 'me', label: 'Maine'},
    {value: 'md', label: 'Maryland'},
    {value: 'ma', label: 'Massachusetts'},
    {value: 'mi', label: 'Michigan'},
    {value: 'mn', label: 'Minnesota'},
    {value: 'ms', label: 'Mississippi'},
    {value: 'mo', label: 'Missouri'},
    {value: 'mt', label: 'Montana'},
    {value: 'ne', label: 'Nebraska'},
    {value: 'nv', label: 'Nevada'},
    {value: 'nh', label: 'New Hampshire'},
    {value: 'nj', label: 'New Jersey'},
    {value: 'nm', label: 'New Mexico'},
    {value: 'ny', label: 'New York'},
    {value: 'nc', label: 'North Carolina'},
    {value: 'nd', label: 'North Dakota'},
    {value: 'oh', label: 'Ohio'},
    {value: 'ok', label: 'Oklahoma'},
    {value: 'or', label: 'Oregon'},
    {value: 'pa', label: 'Pennsylvania'},
    {value: 'ri', label: 'Rhode Island'},
    {value: 'sc', label: 'South Carolina'},
    {value: 'sd', label: 'South Dakota'},
    {value: 'tn', label: 'Tennessee'},
    {value: 'tx', label: 'Texas'},
    {value: 'ut', label: 'Utah'},
    {value: 'vt', label: 'Vermont'},
    {value: 'va', label: 'Virginia'},
    {value: 'wa', label: 'Washington'},
    {value: 'wv', label: 'West Virginia'},
    {value: 'wi', label: 'Wisconsin'},
    {value: 'wy', label: 'Wyoming'}
];

const defaultOption = "Select your State";


function PickState(props) {
    const [value, setValue] = useState('');
    const handleSelect = (event) => {
        console.log(event);
        setValue(event)
    }

    return(
        <div className='dropdown-container'>
            <Dropdown
            options={options}
            onChange={handleSelect}
            value=''
            placeholder="Select your State"
            />
            <button onSubmit={handleClick()}>Submit</button>
        </div>
    )

}

export default PickState;