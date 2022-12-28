import React from 'react'

function Thead() {
    return (
        <thead class="border-b font-bold border-solid border-2 border-black">
            <tr>
                <th scope="col" class="w120 text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                    Serial No.
                </th>
                <th scope="col" class="w120 text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                    Description
                </th>
                <th scope="col" class="w120 text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                    Unit
                </th>
                <th scope="col" class="w120 text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                    Rate
                </th>
                <th className='flex h-full w720'>
                    <th scope="col" class="text-xs text-gray-900 flex flex-col w360 h-full border-black">
                        <th class="text-xs text-gray-900 border-b border-r p-2  border-black">Quantity</th>
                        <tr class="text-xs text-gray-900 flex ">
                            <th className='w120 h-full border-r p-2 border-black'>Previous</th>
                            <th className='w120 h-full border-r p-2 border-black'>This</th>
                            <th className='w120 h-full p-2 border-black border-r border-collapse'>Cumulative</th>
                        </tr>
                    </th>
                    <th scope="col" class="text-xs text-gray-900 flex flex-col w360 h-full  border-black">
                        <th class="text-xs text-gray-900 border-b border-r p-2  border-black">Amount</th>
                        <tr class="text-xs text-gray-900 flex ">
                            <th className='w120 h-full border-r p-2 border-black'>Previous</th>
                            <th className='w120 h-full border-r p-2 border-black'>This</th>
                            <th className='w120 h-full p-2 border-black border-r border-collapse'>Cumulative</th>
                        </tr>
                    </th>
                </th>
                <th class="text-xs w120 text-gray-900 text-center">
                    Remarks
                </th>
            </tr>
        </thead>
    )
}

export default Thead