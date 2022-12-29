import React from 'react'

function TableRow12(props) {
    return (
        <tr class="bg-white border-black border-b">
            <td scope="col" class="text-xs w120  text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
            </td>
            <td scope="col" class=" text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
            </td>
            <td scope="col" class="text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
            </td>
            <td scope="col" class="text-xs w120 text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
            </td>
            <table className='flex height65 w720'>
                <th scope="col" class="text-xs border text-gray-900 height65 flex w360 height65  border-black p-5">
                    <span className='tc'>{props.desc}</span>
                </th>
                <th scope="col" class="text-xs text-gray-900 height65 flex w360 height65  border-black">
                    <tr className='w120 h-full border p-2 border-black height65'><span className='align-middle tc'>{props.prsum}</span></tr>
                    <tr className='w120 h-full border p-2 border-black height65'><span className='align-middle tc'>{props.thsum}</span></tr>
                    <tr className='w120 h-full p-2 border-black border height65'><span className='align-middle tc'>{props.cumsum}</span></tr>
                </th>
            </table>
            <td class="text-xs w120 text-gray-900 text-center">

            </td>
        </tr>
    )
}

export default TableRow12