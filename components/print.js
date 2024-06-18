export const printReceipt = (content) => {
  const printWindow = window.open('', '', 'width=800,height=600');
  printWindow.document.write(`
      <html>
        <head>
          <title>Receipt</title>
          <style>
            /* Add any custom styles here */
            body {
              font-family: Arial, sans-serif;
            }
            .receipt {
              margin: 20px;
            }
          </style>
        </head>
        <body>
          <div class="receipt">
          
            ${content}
          </div>
        </body>
      </html>
    `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
};
