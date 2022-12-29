import React, { useState } from 'react'

function InputElement(props) {
    const [inputValue, setInputValue] = useState(props.value || '');
    const [showInput, setShowInput] = useState(props.value ? false : true);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleEnterKeyPress = (event) => {
        if (event.key === 'Enter') {
            setShowInput(showInput == false ? true : false);
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

function TableRow1Input(props) {


    return (
        <tr class="bg-white font-bold border-black border-b">
            <td scope="col" class="text-xs w120  text-gray-900  border-r border-solid border-2 border-black">
                {props.val}
            </td>
            <td scope="col" class=" text-xs w120 text-gray-900  border-r border-solid border-2 border-black">
                {props.desc}
            </td>
            <td scope="col" class="text-xs w120 text-gray-900  border-r border-solid border-2 border-black">
                {props.unit}
            </td>
            <td scope="col" class="text-xs w120 text-gray-900 border-r border-solid border-2 border-black">
                <InputElement />
            </td>
            <table className='flex height65 w720'>
                <th scope="col" class="text-xs text-gray-900 height65 flex w60 height65  border-black">
                    <tr className='w120 h-full border-r  border-black height65'><InputElement className='align-middle tc' /></tr>
                    <tr className='w120 h-full border-r  border-black height65'><InputElement className='align-middle tc' /></tr>
                    <tr className='w120 h-full  border-black border-r height65'><InputElement className='align-middle tc' /></tr>
                </th>
                <th scope="col" class="text-xs text-gray-900 height65 flex w360 height65  border-black">
                    <tr className='w120 h-full border-r  border-black height65'><InputElementpr dothis={props.dothis} className='align-middle tc' /></tr>
                    <tr className='w120 h-full border-r  border-black height65'><InputElementthis dothis2={props.dothis2} className='align-middle tc' /></tr>
                    <tr className='w120 h-full  border-black border-r height65'><InputElementcum dothis3={props.dothis3} className='align-middle tc' /></tr>
                </th>
            </table>
            <td class="text-xs w120 text-gray-900 text-center">
                <InputElement />
            </td>
        </tr>
    )
}

export default TableRow1Input