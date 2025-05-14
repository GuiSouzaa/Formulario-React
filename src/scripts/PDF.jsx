// src/components/Pdf.js
import React from 'react';
import { jsPDF } from 'jspdf';

const Pdf = ({ contentRef }) => {
  const gerarPdf = () => {
    const doc = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4',
    });

    doc.html(contentRef.current, {
      callback: function (doc) {
        doc.save('documento.pdf'); 
      },
      x: 10, 
      y: 10, 
      html2canvas: {
        scale: 0.1,
      },
    });
  };

  return (
    <button onClick={gerarPdf}>Gerar PDF</button>
  );
};

export default Pdf;
