import html2pdf from 'html2pdf.js';

export function gerarPDF() {
  const conteudo = document.getElementById('conteudo-pdf');
  const options = {
    margin: [10, 10, 10, 10],
    filename: 'RAT.pdf',
    html2canvas: {
      scale: 2,
      scrollY: 0,
      logging: true,
      letterRendering: true,
      willReadFrequently: true,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
    },
    pagebreak: { mode: ['css', 'legacy'] },
  };
  html2pdf().from(conteudo).set(options).save();
}
