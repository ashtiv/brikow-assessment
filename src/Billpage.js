import React from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const generatePDF = () => {
    // Select the element that you want to convert to a PDF
    const element = document.getElementById('my-element');

    // Use html2canvas to convert the element to a canvas
    html2canvas(element).then(canvas => {
        // Get the canvas data as a data URL
        const dataURL = canvas.toDataURL();

        // Create a new PDF document
        const pdf = new jsPDF();

        // Add the canvas data as an image to the PDF document
        pdf.addImage(dataURL, 'JPEG', 0, 0);

        // Save the PDF document
        pdf.save('my-document.pdf');
    });
}
const DownloadButton = () => {
    return (
        <button onClick={generatePDF}>Download PDF</button>
    );
}
const Billpage = () => {
    return (
        <div>
            <table id='my-element' style={{ width: '600px' }}>
                <caption>The Three Most Popular JavaScript Libraries</caption>
                <thead>
                    <tr>
                        <th>Library</th>
                        <th>jQuery</th>
                        <th>Bootstrap</th>
                        <th>Modernizr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Market Share</td>
                        <td>96.1%</td>
                        <td>17.0%</td>
                        <td>14.3%</td>
                    </tr>
                    <tr>
                        <td>Absolute Usage</td>
                        <td>70.4%</td>
                        <td>12.4%</td>
                        <td>10.5%</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4"><em>Market Share</em> refers to the percentage of sites using any JavaScript library that use the specified library. <em>Absolute Usage</em> is the percent of websites surveyed, including those that use no JavaScript libraries, that use the specified library. All data comes from <a href="https://w3techs.com/technologies/overview/javascript_library/all" target="_blank">W3Techs</a> and was accurate in June of 2016.</td>
                    </tr>
                </tfoot>
            </table>
            <DownloadButton />
        </div>
    );
}
export default Billpage