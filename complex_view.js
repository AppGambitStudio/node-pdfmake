var fonts = {
    Roboto: {
        normal: 'fonts/Roboto-Regular.ttf',
        bold: 'fonts/Roboto-Medium.ttf',
        italics: 'fonts/Roboto-Italic.ttf',
        bolditalics: 'fonts/Roboto-MediumItalic.ttf'
    }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');
var pdfContent = require('./pdf_content')
// Create a document definition
const docDefinition = {
    styles: {
        header: {
            padding: 15,
            fontSize: 18,
            bold: true,
            margin: [10, 0, 0, 10]
        },
        padding: {
            padding: 15
        },
        shipToAddress: {
            fontSize: 10,
            color: 'black',
        },
    },
    pageSize: 'A4',
    pageMargins: [20, 60, 20, 270],
    header: pdfContent.getHeader,
    footer: pdfContent.getFooter,
    content: pdfContent.getComplexData()
}


var options = {
    // ...
}

// Create a Promise to generate the PDF
const generatePDF = () => {
    return new Promise((resolve, reject) => {

        var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
        const stream = pdfDoc.pipe(fs.createWriteStream('myFirstPDF.pdf'));
        pdfDoc.end();

        stream.on('finish', () => {
            resolve('Complex view generated successfully!')
        })
        stream.on('error', (error) => {
            reject(error)
        })
    })
}

// Usage
generatePDF()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error('Error generating PDF:', error)
    })