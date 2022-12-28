import React, { useState } from 'react'
import TableRow1 from './TableRow1'
import TableRow12 from './TableRow12'
import TableRow1Input from './TableRow1Input'
import TableRow2 from './TableRow2'
import TableRowLessAdvInput from './TableRowLessAdvInput'
import Thead from './Thead'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function BillpageInput() {
    const [pr1, setpr1] = useState(0);
    const [pr2, setpr2] = useState(0);
    const [pr3, setpr3] = useState(0);
    const [pr4, setpr4] = useState(0);
    const [pr5, setpr5] = useState(0);
    const [pr6, setpr6] = useState(0);
    const [pr7, setpr7] = useState(0);
    const [pr8, setpr8] = useState(0);
    const [pr9, setpr9] = useState(0);
    const [pr10, setpr10] = useState(0);
    const [pr11, setpr11] = useState(0);
    const [prevsum, setprevsum] = useState(0);
    const handlepr1 = (event) => {
        // console.log(event, " eeevvvvvvvvv")
        if (isNaN(event) == false) {
            setpr1(event);
            console.log(event, " evvvvvvvvvvvvvvvvvv")
            console.log(pr1, pr2, "pppppppppp1111111");
            setprevsum(pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11);
        }

    };
    const handlepr2 = (event) => {
        setpr2(Number(event));
        setprevsum(pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11);
        console.log(pr1, pr2, "pppppppppp2222222");
    };
    const generatePDF = () => {

        html2canvas(document.getElementById('my-element'), {
        }).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            var doc = new jsPDF("l", "px", [500, 660]);

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
    return (
        <div>

            <h1 class="text-3xl font-bold underline">
                Hello world!
            </h1>
            <h2>Responsive Table with RWD-Table-Patterns</h2>

            <div id='my-element' class="container p-10 text-xs" >
                <div class="flex flex-col">
                    <div class="">
                        <div class="py-2 inline-block">
                            <div class="">
                                <table class="border text-center border-solid border-2 border-black">
                                    <Thead />
                                    <tbody>
                                        <TableRow1 val="A" desc="Grante Work" unit="" />
                                        <TableRow1Input val="1" desc="Grante Flooring" unit="SFT" valpr={pr1} dothis={handlepr1} />
                                        <TableRow1Input val="2" desc="Grante Patti" unit="RFT" valpr={pr2} dothis={handlepr2} />
                                        <TableRow1Input val="3" desc="Grante Half Moulding" unit="RFT" />
                                        <TableRow1 val="" desc="" unit="" />
                                        <TableRow1 val="B" desc="Tiles Work" unit="" />
                                        <TableRow1Input val="1" desc="Wall Tiles" unit="SFT" />
                                        <TableRow1Input val="2" desc="Floor Tiles" unit="SFT" />
                                        <TableRow1Input val="" desc="Table Top" unit="no-1" />
                                        <TableRow1Input val="" desc="" unit="no-2" />
                                        <TableRow1Input val="" desc="" unit="no-3" />
                                        <TableRow1Input val="" desc="" unit="no-4" />
                                        <TableRow1Input val="" desc="Vertical Table Top" unit="no-2" />
                                        <TableRow1Input val="" desc="" unit="no-3" />
                                        <TableRow1 val="" desc="" unit="" />
                                        <TableRow12 val="" desc="TOTAL AMOUNT" unit="" prsum={prevsum} />
                                    </tbody>
                                </table>
                                <TableRow2 desc="HOLD FOR DLP @5%" />
                                <TableRowLessAdvInput desc="Less Advance" />
                                <TableRow2 desc="BALANCE TO BE PAID IN BG LINK" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DownloadButton />
        </div >
    )
}

export default BillpageInput