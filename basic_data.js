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
const dynamicData = ['Item 1', 'Item 2', 'Item 3', 'Item 4']

const dynamicContent = dynamicData.map((item) => {
  return { text: item, margin: [0, 5] }
})

const docDefinition = {
  content: [
    { text: 'Dynamic Content', fontSize: 16, bold: true },
    ...dynamicContent,
  ],
}

var options = {
  // ...
}

var pdfDoc = printer.createPdfKitDocument(docDefinition, options);
pdfDoc.pipe(fs.createWriteStream('myFirstPDF.pdf'));
pdfDoc.end();