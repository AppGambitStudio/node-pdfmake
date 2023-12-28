var fonts = {
  Roboto: {
    normal: 'fonts/Roboto-Regular.ttf',
    bold: 'fonts/Roboto-Medium.ttf',
    italics: 'fonts/Roboto-Italic.ttf',
    bolditalics: 'fonts/Roboto-MediumItalic.ttf'
  }, 
  Courier: {
    normal: 'fonts/Courier Regular.ttf',
  }
};

var PdfPrinter = require('pdfmake');
var printer = new PdfPrinter(fonts);
var fs = require('fs');

// Create a document definition
const docDefinition = {
  content: [
    { text: 'Styling Your PDF', fontSize: 16, bold: true },
    { text: 'This text is in blue color.', color: 'blue' },
    { text: 'This text is aligned to the center.', alignment: 'center' },
    { text: 'This text uses a custom font.', font: 'Courier' },
  ],
}


var options = {
  // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('myFirstPDF.pdf'));
pdfDoc.end();