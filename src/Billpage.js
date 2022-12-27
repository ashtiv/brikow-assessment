import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePDF = () => {
    const doc = new jsPDF({
        orientation: 'p',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling'],
    });
    html2canvas(document.getElementById('my-element'), {
        width: 800,
        height: 1600
    }).then((canvas) => {
        const img = canvas.toDataURL("image/png");
        doc.addImage(img, "PNG", 0, 0, 800, 1600);
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
            <table id='my-element' style={{ height: '400px', width: '800px', padding: '20px' }}>
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

export default Billpage;