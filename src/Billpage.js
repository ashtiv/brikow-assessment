import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import TableRow1 from './TableRow1';

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

            <div id='my-element' class="container p-10 text-xs" >
                <div class="flex flex-col">
                    <div class="">
                        <div class="py-2 inline-block min-w-full">
                            <div class="">
                                <table class="min-w-full border text-center border-solid border-2 border-black hewi">
                                    <thead class="border-b font-bold border-solid border-2 border-black">
                                        <tr>
                                            <th scope="col" class="text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Serial No.
                                            </th>
                                            <th scope="col" class="text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Description
                                            </th>
                                            <th scope="col" class="text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Unit
                                            </th>
                                            <th scope="col" class="text-xs text-gray-900 px-6 py-4 border-r border-solid border-2 border-black">
                                                Rate
                                            </th>
                                            <th className='flex h-full'>
                                                <th scope="col" class="text-xs text-gray-900 flex flex-col w-1/2 h-full border-black">
                                                    <th class="text-xs text-gray-900  w-full border-b border-r p-2  border-black">Quantity</th>
                                                    <tr class="text-xs text-gray-900  w-full flex ">
                                                        <th className='w-1/3 h-full border-r p-2 border-black'>Previous</th>
                                                        <th className='w-1/3 h-full border-r p-2 border-black'>This</th>
                                                        <th className='w-1/3 h-full p-2 border-black border-r border-collapse'>Cumulative</th>
                                                    </tr>
                                                </th>
                                                <th scope="col" class="text-xs text-gray-900 flex flex-col w-1/2 h-full  border-black">
                                                    <th class="text-xs text-gray-900  w-full border-b border-r p-2  border-black">Amount</th>
                                                    <tr class="text-xs text-gray-900  w-full flex ">
                                                        <th className='w-1/3 h-full border-r p-2 border-black'>Previous</th>
                                                        <th className='w-1/3 h-full border-r p-2 border-black'>This</th>
                                                        <th className='w-1/3 h-full p-2 border-black border-r border-collapse'>Cumulative</th>
                                                    </tr>
                                                </th>
                                            </th>
                                            <th class="text-xs text-gray-900 text-center">
                                                Remarks
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <TableRow1 val="A" />
                                        <TableRow1 val="1" />
                                        <TableRow1 val="2" />
                                        <TableRow1 val="3" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="B" />
                                        <TableRow1 val="1" />
                                        <TableRow1 val="2" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
                                        <TableRow1 val="" />
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