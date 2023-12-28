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

// Create a document definition
const docDefinition = {
  content: [
    { text: 'My First PDF with PDFMake', fontSize: 16, bold: true },
    {
      text: 'This is a simple example of PDF generation with Node.js and PDFMake.',
    },
  ],
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
      resolve('Async PDF generated successfully!')
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