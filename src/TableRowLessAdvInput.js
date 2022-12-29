import React, { useState } from 'react'


function InputElementpr(props) {
    const [inputValue, setInputValue] = useState(props.valpr || '');
    const [showInput, setShowInput] = useState(props.valpr ? false : true);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (showInput) {
                setShowInput(false);
                setInputValue(event.target.value);
                props.dothis(event.target.value);
            }
            else {
                setShowInput(true)
            }
        }
    };

    const handleTextClick = () => {
        setShowInput(true);
    };

    return showInput ? (
        <input
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleEnterKeyPress}
            className='align-middle tc'
        />
    ) : (
        <p onClick={handleTextClick} className='align-middle tc'>{inputValue}</p>
    );
}
function InputElementthis(props) {
    const [inputValue, setInputValue] = useState(props.valpr || '');
    const [showInput, setShowInput] = useState(props.valpr ? false : true);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (showInput) {
                setShowInput(false);
                setInputValue(event.target.value);
                props.dothis2(event.target.value);
            }
            else {
                setShowInput(true)
            }
        }
    };

    const handleTextClick = () => {
        setShowInput(true);
    };

    return showInput ? (
        <input
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleEnterKeyPress}
            className='align-middle tc'
        />
    ) : (
        <p onClick={handleTextClick} className='align-middle tc'>{inputValue}</p>
    );
}
function InputElementcum(props) {
    const [inputValue, setInputValue] = useState(props.valpr || '');
    const [showInput, setShowInput] = useState(props.valpr ? false : true);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (showInput) {
                setShowInput(false);
                setInputValue(event.target.value);
                props.dothis3(event.target.value);
            }
            else {
                setShowInput(true)
            }
        }
    };

    const handleTextClick = () => {
        setShowInput(true);
    };

    return showInput ? (
        <input
            value={inputValue}
            onChange={handleChange}
            onKeyDown={handleEnterKeyPress}
            className='align-middle tc'
        />
    ) : (
        <p onClick={handleTextClick} className='align-middle tc'>{inputValue}</p>
    );
}
function TableRowLessAdvInput(props) {
    return (
        <tr class="bg-white">
            <td scope="col" class="text-xs w120">
            </td>
            <td scope="col" class=" text-xs w120">

            </td>
            <td scope="col" class="text-xs w120">

            </td>
            <td scope="col" class="text-xs w120">

            </td>
            <table className='flex height65 w720'>
                <th scope="col" class="text-xs border text-gray-900 height65 flex w360 height65  border-black p-5">
                    <span className='tc'>{props.desc}</span>
                </th>
                <th scope="col" class="text-xs text-gray-900 height65 flex w360 height65  border-black">
                    <tr className='w120 h-full border p-2 border-black height65'><InputElementpr dothis={props.dothis} className='align-middle tc' /></tr>
                    <tr className='w120 h-full border p-2 border-black height65'><InputElementthis dothis2={props.dothis2} className='align-middle tc' /></tr>
                    <tr className='w120 h-full p-2 border-black border height65'><InputElementcum dothis3={props.dothis3} className='align-middle tc' /></tr>
                </th>
            </table>
            <td class="text-xs w120 text-gray-900 text-center">

            </td>
        </tr>
    )
}

export default TableRowLessAdvInput