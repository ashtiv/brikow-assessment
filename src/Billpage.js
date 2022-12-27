import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePDF = () => {

    html2canvas(document.getElementById('my-element'), {
    }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        // const doc = new jsPDF({
        //     orientation: 'p',
        //     unit: 'px',
        //     hotfixes: ['px_scaling'],
        // });
        var doc = new jsPDF("l", "px", [200, 600]);

        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        // doc.addImage(img, "PNG", 0, 0, 600, 200);
        doc.addImage(img, 'JPEG', 0, 0, width, height);
        doc.save("p&lstatement.pdf");
    })
}

const DownloadButton = () => {
    return (
        <button onClick={generatePDF}>Download PDF</button>
    );
}

const Billpage = () => {
    return (
        <div>

            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
            <h2>Responsive Table with RWD-Table-Patterns</h2>

            <div id='my-element' class="container p-10" style={{ height: "400px", width: "1200px" }}>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                            <div class="overflow-hidden">
                                <table class="min-w-full border text-center border-solid border-2 border-black">
                                    <thead class="border-b font-bold border-solid border-2 border-black">
                                        <tr>
                                            <th scope="col" class="text-sm text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Serial No.
                                            </th>
                                            <th scope="col" class="text-sm text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Description
                                            </th>
                                            <th scope="col" class="text-sm text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Unit
                                            </th>
                                            <th scope="col" class="text-sm text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Rate
                                            </th>
                                            <table className='flex'>
                                                <th scope="col" class="text-sm text-gray-900 border-r flex flex-col w-1/2  border-black">
                                                    <tr class="text-sm text-gray-900  w-full border-b p-2  border-black">Quantity</tr>
                                                    <tr class="text-sm text-gray-900  w-full flex ">
                                                        <tr className='w-1/3 h-full border-r p-2 border-black'>Previous</tr>
                                                        <tr className='w-1/3 h-full border-r p-2 border-black'>This</tr>
                                                        <tr className='w-1/3 h-full p-2 border-black'>Cumulative</tr>
                                                    </tr>
                                                </th>
                                                <th scope="col" class="text-sm text-gray-900 border-r flex flex-col w-1/2  border-black">
                                                    <tr class="text-sm text-gray-900  w-full border-b p-2  border-black">Amount</tr>
                                                    <tr class="text-sm text-gray-900  w-full flex">
                                                        <tr className='w-1/3 h-full border-r p-2  border-black'>Previous</tr>
                                                        <tr className='w-1/3 h-full border-r p-2  border-black'>This</tr>
                                                        <tr className='w-1/3 h-full p-2  border-black'>Cumulative</tr>
                                                    </tr>
                                                </th>
                                            </table>
                                            <th class="text-sm text-gray-900 text-center">
                                                Remarks
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">A</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Mark
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Otto
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                @mdo
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">1</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Jacob
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                                                Thornton
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                @fat
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">2</td>
                                            <td colspan="2" class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border-r">
                                                Larry the Bird
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                @twitter
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownloadButton />
        </div >
    );
}

export default Billpage;