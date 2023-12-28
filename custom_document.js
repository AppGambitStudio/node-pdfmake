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
    { text: 'Customizing Page Size and Orientation', fontSize: 16, bold: true },
    { text: 'This PDF has custom page size and orientation.' },
  ],
  pageOrientation: 'landscape', // 'portrait' is the default
  pageSize: 'A4', // 'A4' is the default
}


var options = {
  // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('myFirstPDF.pdf'));
pdfDoc.end();