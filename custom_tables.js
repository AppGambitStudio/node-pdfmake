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
    { text: 'Adding Images and Tables', fontSize: 16, bold: true },
    { text: 'This is an image:', margin: [0, 10] },
    { image: 'images/image.png', width: 200 },
    { text: 'This is a table:', margin: [0, 10] },
    {
      table: {
        widths: [100, '*', 200],
        body: [
          ['Column 1', 'Column 2', 'Column 3'],
          ['Row 1', 'Row 1 Data', 'Row 1 Data'],
          ['Row 2', 'Row 2 Data', 'Row 2 Data'],
        ],
      },
    },
  ],
}


var options = {
  // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('myFirstPDF.pdf'));
pdfDoc.end();