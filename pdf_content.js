exports.getComplexData = () => {
    const arrRows = [
        [{ "text": "SGI Job# ", "style": "tableHeader", "alignment": "center" }, { "text": "Description", "style": "tableHeader" }, { "text": "Qty", "style": "tableHeader", "alignment": "center" }, { "text": "PO#", "style": "tableHeader", "alignment": "center" }],
        [{ "text": "100227", "alignment": "center" }, { "text": "Job Name: 77813 MAR  16 x 13.5 x 2.25   ol ", "style": "tableCellHeader" }, { "text": 5, "alignment": "center" }, { "text": "77813", "alignment": "center" }],
        [{ "text": "" }, { "text": "Ink Coverage" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "CUT Mask Size  " }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "Plate Size  42.125 x 34.625 (Cut Mask)     " }, { "text": 3, "alignment": "center" }, { "text": "" }],
        [{ "text": "100257", "alignment": "center" }, { "text": "Job Name: 77813 MAR 16 x 13.5 x 2.25 ol", "style": "tableCellHeader" }, { "text": 5, "alignment": "center" }, { "text": "77813", "alignment": "center" }],
        [{ "text": "" }, { "text": "Ink Coverage" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "CUT Mask Size   42.13 x 34.63   " }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "43.25x34.5781" }, { "text": 3, "alignment": "center" }, { "text": "" }],
        [{ "text": "104040", "alignment": "center" }, { "text": "Job Name: MINI PRETZELS  .5 oz    7.9375x4.555\nRef: Stellar Snacks: Stellar Snacks ", "style": "tableCellHeader" }, { "text": 10, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "Media-Rite" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "UPC  7 60295 00075 7      Barwidth reduction 0.004" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "Plate Size  @ 18.25   KODAK" }, { "text": 7, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "7.9375 X 4.555" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104042", "alignment": "center" }, { "text": "Job Name: STICK PRETZELS  .5 oz    7.9375x4.555\nRef: Stellar Snacks: Stellar Snacks ", "style": "tableCellHeader" }, { "text": 2, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "Media-Rite" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "7.9375 X 4.555" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104269", "alignment": "center" }, { "text": "Job Name: 96069 WEIS 6ct Donut", "style": "tableCellHeader" }, { "text": 1, "alignment": "center" }, { "text": "96069", "alignment": "center" }],
        [{ "text": "" }, { "text": "Flexo NX  0.067" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104432", "alignment": "center" }, { "text": "Job Name: CUT GREEN BEANS  32oz  16.25x12  6-C\nRef: Cambridge Farms: URBAN MEADOW", "style": "tableCellHeader" }, { "text": 9, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "BMG file" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "Plate Size  @16.25 X 24" }, { "text": 6, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "UPC   0 73296 07047 7    Barwidth reduction 0.004" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "File size 16.25 x 12" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104815", "alignment": "center" }, { "text": "Job Name: Milk Chocolate Baking Chips  7 oz.\nRef: Lily's Sweets", "style": "tableCellHeader" }, { "text": 6, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "Plate Size 15.75 X 24.5  Kodak " }, { "text": 5, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": " File size  15.75 X 6" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104816", "alignment": "center" }, { "text": "Job Name: Dark Chocolate Baking Chips  7 oz.\nRef: Lily's Sweets", "style": "tableCellHeader" }, { "text": 7, "alignment": "center" }, { "text": "027184", "alignment": "center" }],
        [{ "text": "" }, { "text": "Send one 4 Cast proof to Sierra" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": " File size  15.75 X 6" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "Plate Size 15.75 X 24.5  Kodak " }, { "text": 5, "alignment": "center" }, { "text": "" }],
        [{ "text": "104818", "alignment": "center" }, { "text": "Job Name: Mango Chunks 16oz\nRef: Frozen Food Develop: Market Basket", "style": "tableCellHeader" }, { "text": 1, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "1-up" }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "104965", "alignment": "center" }, { "text": "Job Name: MILK CHOC BAKING CHIPS  9oz\nRef: Lily's Sweets LLC:  LILY'S ", "style": "tableCellHeader" }, { "text": 9, "alignment": "center" }, { "text": null, "alignment": "center" }],
        [{ "text": "" }, { "text": "File size  10.25 X 9.25 " }, { "text": 1, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "Plate Size 30.75 X 18.5  Kodak " }, { "text": 7, "alignment": "center" }, { "text": "" }],
        [{ "text": "" }, { "text": "4-Cast" }, { "text": 1, "alignment": "center" }, { "text": "" }]
    ];
    return [
        { text: 'This is to certify that the below named materials are properly classified, described, packaged, marked and labeled, and are in proper condition for transportation according to the applicable regulations of the department of Transportation.', fontSize: 5 },
        '\n',
        {
            columns: [
                { text: 'SHIP TO', style: 'subheader', background: '#000', color: '#fff' },
                { text: 'SOLD TO', style: 'subheader', background: '#000', color: '#fff' },
                { text: 'PACKING SLIP', style: 'subheader', background: '#000', color: '#fff', fontSize: 15, alignment: 'right' }
            ]
        },
        {
            columns: [
                { text: `Appgambit`, style: 'shipToAddress', bold: true },
                { text: `Reliance`, style: 'shipToAddress', bold: true },
                { text: '', }
            ]
        },
        {
            columns: [
                { text: `SNS Platina, \nVesu Surat, GJ, \nIN 395007`, style: 'shipToAddress' },
                { text: `SNS Atria Opp. Jolly Party Plot, Vesu, Surat, Gujarat 395007`, style: 'shipToAddress' },
                { text: '', }
            ]
        },
        '\n',
        {
            table: {
                // widths: [45,'*','*','*','*','*','*','*','*',],
                widths: [45, 'auto', 70, 'auto', 45, 'auto', 180, 'auto', 150],
                body: [
                    [
                        { text: `Rate Class:`, border: [false, false, false, false], },
                        { text: '', },
                        { text: `70 (Plates, Proof)`, border: [false, false, false, false], },
                        { text: '', },
                        { text: `100 (Film)`, border: [false, false, false, false], },
                        { text: '', },
                        {  text: `NMFC 161700 Class 55 (Printed Material)`, border: [false, false, false, false],  },
                        { text: '', },
                        { text: `77.5 (Corrugated Material)`, border: [false, false, false, false],  },
                    ],
                ],
                headerRows: 1,
            },
            fontSize: 8,
            lineHeight: 0.5,
            layout: {
                paddingTop: function (i, node) { return i % 2 == 0 ? -0.5 : 5; },
                paddingLeft: function (i, node) { return i % 2 == 0 ? 5 : 2; },
            },
        },
        {
            canvas: [
                {
                    type: 'line',
                    x1: 0, y1: 10,
                    x2: 790, y2: 10,
                    lineWidth: 1,
                },
            ]
        },
        {
            columns: [
                { width: '*', text: '' },
                {
                    width: 'auto',
                    table: {
                        body: [
                            [{ text: 'Shipment No', style: 'tableHeader' }, { text: 'Shipped Date', style: 'tableHeader' }, { text: 'Ship Via', style: 'tableHeader' }],
                            [{ text: `0001`, style: 'shipToAddress' }, { text: `2023-12-28`, style: 'shipToAddress' }, { text: `Ship Via`, style: 'shipToAddress' }]
                        ]
                    },
                    layout: {
                        fillColor: function (rowIndex, node, columnIndex) {
                            return (rowIndex === 0) ? '#CCCCCC' : null;
                        },
                        hLineColor: function (i, node) {
                            return '#696969'
                        },
                        vLineColor: function (i, node) {
                            return '#696969'
                        },
                    },
                    margin: [0, 5]
                },
            ],
        },
        {
            style: 'tableStyle',
            table: {
                widths: [50, '*', 20, 50],
                headerRows: 1,
                // dontBreakRows: true,
                body: arrRows,
            },
            layout: {
                fillColor: function (rowIndex, node, columnIndex) {
                    return (rowIndex === 0) ? '#CCCCCC' : null;
                },
                hLineColor: function (i, node) {
                    return '#696969'//(i === 0 || i === node.table.body.length) ? 'red' : 'blue';
                },
                vLineColor: function (i, node) {
                    return '#696969'//(i === 0 || i === node.table.widths.length) ? 'red' : 'blue';
                },
            },
            margin: [0, 5]
        },
    ];
} 

exports.getHeader = (currentPage, pageCount, pageSize) => {
    return [{
        columns: [
            {
                // auto-sized columns have their widths based on their content
                width: '25%',
                stack: [
                    // second column consists of paragraphs
                    'SNS Platina, Vesu',
                    'Surat, GJ, IN 395007',
                ],
                fontSize: 7,
                color: '#8b4513',
                italics: true,
                bold: true
            },
            {
                // fixed width
                //   width: 100,
                width: '50%',
                text: 'APPGAMBIT',
                alignment: 'center',
                style: 'header',
                color: '#8b4513',
            },
            {
                width: '25%',
                fontSize: 7,
                color: '#8b4513',
                italics: true,
                bold: true,
                alignment: 'right',
                stack: [
                    // second column consists of paragraphs
                    'Phone : xxx xxx xxxx',
                    'Fax :  xxx xxx xxx',
                ],
            }
        ],
        // optional space between columns
        columnGap: 10,
        margin: [20, 12, 20, -5]
    }, {
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 10,
                x2: 790, y2: 10,
                lineWidth: 1,
            },
        ]
    }]
}

exports.getFooter = (currentPage, pageCount) => {
    return [{
        canvas: [
            {
                type: 'line',
                x1: 0, y1: 2,
                x2: 610, y2: 2,
                lineWidth: 1,
            },
        ]
    }, {
        columns: [
            { text: `Col 1` },
            { text: `Col 2` },
            { text: `Col 3` },
            { text: `Page ${currentPage.toString()} of ${pageCount}`, alignment: 'right', italics: true }
        ],
        margin: [20, 5],
        fontSize: 8
    },
    {
        table: {
            widths: ['*', '*', '*', '*'], //[100, 100, '*', 120],
            body: [
                ['REMIT \nC.O.D. TO:', 'C.O.D. \nAMT:', ' C.O.D. FEE: $ ______________\n PREPAID        ______________\n COLLECT       ______________\n', 'TOTAL CHARGES:\n$'],
            ],
            headerRows: 1,
        },
        layout: {
            hLineWidth: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? 1 : 0;
            },
            paddingTop: function (i, node) { return 5; },
        },
        margin: [5, 4],
        fontSize: 7
    },
    {
        table: {
            widths: ['*',], //[100, 100, '*', 120],
            body: [
                [
                    `RECEIVED, Subject to the classifications and lawfully filed tariffs in effect on the date of the issue of receipt by the carrier of the property described in the Original Bill of Lading, the property described above in apparent good order, except as noted (contents and condition of contents of packages unknown), marked, consigned, and destined as indicated above, which said carrier (the word carrier being understood throughout this contract as meaning any person or corporation in possession of the property under contract) agrees to carry to its usual place of delivery at said destination, if on its route, otherwise to deliver to another carrier on the route to said destination. It is mutually agreed as to each carrier of all or any of, said property over all or any portion of said route to destination and as to each party at any time interested in all or any of said property, that every service to be performed hereunder shall be subject to all the terms and conditions of the Uniform Domestic Straight Bill of Lading set forth (1) in Uniform Freight Classifications in effect on the date hereof, if this is a rail or a rail-water shipment, or (2) in the applicable motor carrier classification or tariff if this is a motor carrier shipment.\n  Shipper hereby certifies that he is familiar with all the terms and conditions of the said bill of lading, set forth in the classification or tariff which governs the transportation of this shipment, and the said terms and conditions are hereby agreed to by the shipper and accepted for himself and his assigns. \n "This is to certify that the above named materials are properly classified, described, packaged, marked and labeled, and are in proper condition for transportation, according to the applicable regulations of the Department of Transportation."`],
            ],
            headerRows: 1,
        },
        layout: {
            hLineWidth: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? 1 : 0;
            },
            paddingTop: function (i, node) { return 5; },
        },
        margin: [5, 0],
        fontSize: 6
    },
    {
        table: {
            widths: ['*', '*', '*', '*'],
            body: [
                [
                    { text: `*If the shipment moves between two ports by a carrier by water,  the law requires that the bill of lading shall state whether it is carrier's or shipper's weight`, rowSpan: 2 },
                    {
                        text: `NOTE: Where the rate is dependent on value, shippers are required to state specifically in writing the agreed or declared value of the property.
The agreed or declared value of the property is hereby specifically stated by the shipper to be not exceeding`}
                    ,
                    ` Subject to Section 7 of conditions, if this shipment is to be delivered to the consignee without recourse on the consignor, the consignor shall sign the following statement:
 The carrier shall not make delivery of this shipment without payment of freight and all other charges.`,
                    { text: `Freight Charges\nCheck Appropriate Box:\nFreight Prepaid _X__\nCollect  ___`, rowSpan: 2 }
                ],
                ['', { text: `$________________per__________________` }, { text: ` _________________________________________\n(Signature of Consignor)`, alignment: 'center' }, '']
            ],
            headerRows: 1,
        },
        layout: {
            hLineWidth: function (i, node) {
                return (i === 0 || i === node.table.body.length) ? 1 : 0;
            },
            paddingTop: function (i, node) { return 5; }
        },
        margin: [5, 4],
        fontSize: 6
    },
    { text: `____________________Shipper, Per_________________  _________________________ Agent, Per__________________`, fontSize: 9, margin: [5, 8, 5, 0], },
    {
        style: 'tableExample',
        table: {
            body: [
                [
                    { text: 'Permanent post office address of shipper   ', border: [false, false, false, false] },
                    { text: `+Mark with "x" to designate Hazardous Material as defined in Title 49 of Federal Regulations. For futher details on Transporting Hazardous Materials see Federal regulations 49 CFR, Part 172`, border: [false, false, false, false] },
                ],
            ]
        },
        margin: [5, 0],
        fontSize: 7
    }]
}