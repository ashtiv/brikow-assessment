import React from 'react'

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
                    {/* <tr class="text-xs text-gray-900  w-full border-b border-r p-2  border-black">Amount</tr> */}
                    {/* <tr class="text-xs text-gray-900  w-full flex "> */}
                    <tr className='w120 h-full border p-2 border-black height65'><input className='align-middle tc'></input></tr>
                    <tr className='w120 h-full border p-2 border-black height65'><input className='align-middle tc'></input></tr>
                    <tr className='w120 h-full p-2 border-black border height65'><input className='align-middle tc'></input></tr>
                    {/* </tr> */}
                </th>
            </table>
            <td class="text-xs w120 text-gray-900 text-center">

            </td>
        </tr>
    )
}

export default TableRowLessAdvInput