import React, { useState, useEffect } from 'react'
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
    const [this1, setthis1] = useState(0);
    const [this2, setthis2] = useState(0);
    const [this3, setthis3] = useState(0);
    const [this4, setthis4] = useState(0);
    const [this5, setthis5] = useState(0);
    const [this6, setthis6] = useState(0);
    const [this7, setthis7] = useState(0);
    const [this8, setthis8] = useState(0);
    const [this9, setthis9] = useState(0);
    const [this10, setthis10] = useState(0);
    const [this11, setthis11] = useState(0);
    const [thissum, setthissum] = useState(0);
    const [cum1, setcum1] = useState(0);
    const [cum2, setcum2] = useState(0);
    const [cum3, setcum3] = useState(0);
    const [cum4, setcum4] = useState(0);
    const [cum5, setcum5] = useState(0);
    const [cum6, setcum6] = useState(0);
    const [cum7, setcum7] = useState(0);
    const [cum8, setcum8] = useState(0);
    const [cum9, setcum9] = useState(0);
    const [cum10, setcum10] = useState(0);
    const [cum11, setcum11] = useState(0);
    const [cumsum, setcumsum] = useState(0);
    const [prless, setprless] = useState(0);
    const [thisless, setthisless] = useState(0);
    const [cumless, setcumless] = useState(0);
    const [prlessbtp, setprlessbtp] = useState(0);
    const [thislessbtp, setthislessbtp] = useState(0);
    const [cumlessbtp, setcumlessbtp] = useState(0);

    const handlecum1 = (event) => {
        if (isNaN(event) == false) {
            setcum1(Number(event));
        }
    };
    const handlecum2 = (event) => {
        if (isNaN(event) == false) {
            setcum2(Number(event));
        }
    };
    const handlecum3 = (event) => {
        if (isNaN(event) == false) {
            setcum3(Number(event));
        }
    };
    const handlecum4 = (event) => {
        if (isNaN(event) == false) {
            setcum4(Number(event));
        }
    };
    const handlecum5 = (event) => {
        if (isNaN(event) == false) {
            setcum5(Number(event));
        }
    };
    const handlecum6 = (event) => {
        if (isNaN(event) == false) {
            setcum6(Number(event));
        }
    };
    const handlecum7 = (event) => {
        if (isNaN(event) == false) {
            setcum7(Number(event));
        }
    };
    const handlecum8 = (event) => {
        if (isNaN(event) == false) {
            setcum8(Number(event));
        }
    };
    const handlecum9 = (event) => {
        if (isNaN(event) == false) {
            setcum9(Number(event));
        }
    };
    const handlecum10 = (event) => {
        if (isNaN(event) == false) {
            setcum10(Number(event));
        }
    };
    const handlecum11 = (event) => {
        if (isNaN(event) == false) {
            setcum11(Number(event));
        }
    };
    const handlepr1 = (event) => {
        if (isNaN(event) == false) {
            setpr1(Number(event));
        }
    };
    const handlepr2 = (event) => {
        if (isNaN(event) == false) {
            setpr2(Number(event));
        }
    };
    const handlepr3 = (event) => {
        if (isNaN(event) == false) {
            setpr4(Number(event));
        }
    };
    const handlepr4 = (event) => {
        if (isNaN(event) == false) {
            setpr4(Number(event));
        }
    };
    const handlepr5 = (event) => {
        if (isNaN(event) == false) {
            setpr5(Number(event));
        }
    };
    const handlepr6 = (event) => {
        if (isNaN(event) == false) {
            setpr6(Number(event));
        }
    };
    const handlepr7 = (event) => {
        if (isNaN(event) == false) {
            setpr7(Number(event));
        }
    };
    const handlepr8 = (event) => {
        if (isNaN(event) == false) {
            setpr8(Number(event));
        }
    };
    const handlepr9 = (event) => {
        if (isNaN(event) == false) {
            setpr9(Number(event));
        }
    };
    const handlepr10 = (event) => {
        if (isNaN(event) == false) {
            setpr10(Number(event));
        }
    };
    const handlepr11 = (event) => {
        if (isNaN(event) == false) {
            setpr11(Number(event));
        }
    };
    const handlethis1 = (event) => {
        if (isNaN(event) == false) {
            setthis1(Number(event));
        }
    };
    const handlethis2 = (event) => {
        if (isNaN(event) == false) {
            setthis2(Number(event));
        }
    };
    const handlethis3 = (event) => {
        if (isNaN(event) == false) {
            setthis4(Number(event));
        }
    };
    const handlethis4 = (event) => {
        if (isNaN(event) == false) {
            setthis4(Number(event));
        }
    };
    const handlethis5 = (event) => {
        if (isNaN(event) == false) {
            setthis5(Number(event));
        }
    };
    const handlethis6 = (event) => {
        if (isNaN(event) == false) {
            setthis6(Number(event));
        }
    };
    const handlethis7 = (event) => {
        if (isNaN(event) == false) {
            setthis7(Number(event));
        }
    };
    const handlethis8 = (event) => {
        if (isNaN(event) == false) {
            setthis8(Number(event));
        }
    };
    const handlethis9 = (event) => {
        if (isNaN(event) == false) {
            setthis9(Number(event));
        }
    };
    const handlethis10 = (event) => {
        if (isNaN(event) == false) {
            setthis10(Number(event));
        }
    };
    const handlethis11 = (event) => {
        if (isNaN(event) == false) {
            setthis11(Number(event));
        }
    };
    const handleprless = (event) => {
        if (isNaN(event) == false) {
            setprless(Number(event));
        }
    };
    const handlethisless = (event) => {
        if (isNaN(event) == false) {
            setthisless(Number(event));
        }
    };
    const handlecumless = (event) => {
        if (isNaN(event) == false) {
            setcumless(Number(event));
        }
    };
    useEffect(() => {
        setprevsum(pr1 + pr2 + pr3 + pr4 + pr5 + pr6 + pr7 + pr8 + pr9 + pr10 + pr11);
    }, [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, prevsum])
    useEffect(() => {
        setthissum(this1 + this2 + this3 + this4 + this5 + this6 + this7 + this8 + this9 + this10 + this11);
    }, [this1, this2, this3, this4, this5, this6, this7, this8, this9, this10, this11, thissum])
    useEffect(() => {
        setcumsum(cum1 + cum2 + cum3 + cum4 + cum5 + cum6 + cum7 + cum8 + cum9 + cum10 + cum11);
    }, [cum1, cum2, cum3, cum4, cum5, cum6, cum7, cum8, cum9, cum10, cum11, cumsum])
    useEffect(() => {
        setprlessbtp(prevsum - prless)
        setthislessbtp(thissum - thisless)
        setcumlessbtp(cumsum - cumless)
    }, [prless, cumless, thisless, prevsum, thissum, cumsum])

    const generatePDF = () => {

        html2canvas(document.getElementById('my-element'), {
        }).then((canvas) => {
            const img = canvas.toDataURL("image/png");
            var doc = new jsPDF("1.2", "px", [1500, 1600]);

            var width = doc.internal.pageSize.getWidth();
            var height = doc.internal.pageSize.getHeight();
            doc.addImage(img, 'JPEG', 0, 0, width, height);
            doc.save("tiles&stone_bill.pdf");
        })
    }

    const DownloadButton = () => {
        return (
            <button onClick={generatePDF} className=" border-green-600 border-8 p-5 rounded-3xl m-5">Download PDF</button>
        );
    }
    return (
        <div>

            <div id='my-element' class="container  text-xs" >
                <h1 class="text-3xl font-bold borderb30 border-black w-1/4 ml200 mt-5 p-5">
                    Tiles & Stone work
                </h1>
                <div class="flex flex-col">
                    <div class="">
                        <div class="py-2 inline-block">
                            <div class="">
                                <table class="border text-center border-solid border-2 border-black">
                                    <Thead />
                                    <tbody>
                                        <TableRow1 val="A" desc="Grante Work" unit="" />
                                        <TableRow1Input val="1" desc="Grante Flooring" unit="SFT" valpr={pr1} dothis={handlepr1} valthis={this1} dothis2={handlethis1} dothis3={handlecum1} valcum={cum1} />
                                        <TableRow1Input val="2" desc="Grante Patti" unit="RFT" valpr={pr2} dothis={handlepr2} valthis={this2} dothis2={handlethis2} dothis3={handlecum2} valcum={cum2} />
                                        <TableRow1Input val="3" desc="Grante Half Moulding" unit="RFT" dothis={handlepr3} valthis={this3} dothis2={handlethis3} dothis3={handlecum3} valcum={cum3} />
                                        <TableRow1 val="" desc="" unit="" />
                                        <TableRow1 val="B" desc="Tiles Work" unit="" />
                                        <TableRow1Input val="1" desc="Wall Tiles" unit="SFT" dothis={handlepr4} valthis={this4} dothis2={handlethis4} dothis3={handlecum4} valcum={cum4} />
                                        <TableRow1Input val="2" desc="Floor Tiles" unit="SFT" dothis={handlepr5} valthis={this5} dothis2={handlethis5} dothis3={handlecum5} valcum={cum5} />
                                        <TableRow1Input val="" desc="Table Top" unit="no-1" dothis={handlepr6} valthis={this6} dothis2={handlethis6} dothis3={handlecum6} valcum={cum6} />
                                        <TableRow1Input val="" desc="" unit="no-2" dothis={handlepr7} valthis={this7} dothis2={handlethis7} dothis3={handlecum7} valcum={cum7} />
                                        <TableRow1Input val="" desc="" unit="no-3" dothis={handlepr8} valthis={this8} dothis2={handlethis8} dothis3={handlecum8} valcum={cum8} />
                                        <TableRow1Input val="" desc="" unit="no-4" dothis={handlepr9} valthis={this9} dothis2={handlethis9} dothis3={handlecum9} valcum={cum9} />
                                        <TableRow1Input val="" desc="Vertical Table Top" unit="no-2" dothis={handlepr10} valthis={this10} dothis2={handlethis10} dothis3={handlecum10} valcum={cum10} />
                                        <TableRow1Input val="" desc="" unit="no-3" dothis={handlepr11} valthis={this11} dothis2={handlethis11} dothis3={handlecum11} valcum={cum11} />
                                        <TableRow1 val="" desc="" unit="" />
                                        <TableRow12 val="" desc="TOTAL AMOUNT" unit="" prsum={prevsum} thsum={thissum} cumsum={cumsum} />
                                    </tbody>
                                </table>
                                <TableRow2 desc="HOLD FOR DLP @5%" />
                                <TableRowLessAdvInput desc="Less Advance" valpr={prless} dothis={handleprless} valthis={thisless} dothis2={handlethisless} dothis3={handlecumless} valcum={cumless} />
                                <TableRow2 desc="BALANCE TO BE PAID IN BG LINK" valpr={prlessbtp} valthis={thislessbtp} valcum={cumlessbtp} />
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