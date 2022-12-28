import React from 'react'

function TableRow1(props) {
    return (
        <tr class="bg-white font-bold border-black border-b">
            <td scope="col" class="text-xs w120  text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                {props.val}
            </td>
            <td scope="col" class=" text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                {props.desc}
            </td>
            <td scope="col" class="text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                {props.unit}
            </td>
            <td scope="col" class="text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">

            </td>
            <table className='flex height65 w720'>
                <th scope="col" class="text-xs text-gray-900 height65 flex w60 height65  border-black">
                    {/* <tr class="text-xs text-gray-900  w-full border-b border-r p-2  border-black">Amount</tr> */}
                    {/* <tr class="text-xs text-gray-900  w-full flex "> */}
                    <tr className='w120 h-full border-r p-2 border-black height65'><span className='align-middle tc'></span></tr>
                    <tr className='w120 h-full border-r p-2 border-black height65'><span className='align-middle tc'></span></tr>
                    <tr className='w120 h-full p-2 border-black border-r height65'><span className='align-middle tc'></span></tr>
                    {/* </tr> */}
                </th>
                <th scope="col" class="text-xs text-gray-900 height65 flex w360 height65  border-black">
                    {/* <tr class="text-xs text-gray-900  w-full border-b border-r p-2  border-black">Amount</tr> */}
                    {/* <tr class="text-xs text-gray-900  w-full flex "> */}
                    <tr className='w120 h-full border-r p-2 border-black height65'><span className='align-middle tc'></span></tr>
                    <tr className='w120 h-full border-r p-2 border-black height65'><span className='align-middle tc'></span></tr>
                    <tr className='w120 h-full p-2 border-black border-r height65'><span className='align-middle tc'></span></tr>
                    {/* </tr> */}
                </th>
            </table>
            <td class="text-xs w120 text-gray-900 text-center">

            </td>
        </tr>
    )
}

export default TableRow1