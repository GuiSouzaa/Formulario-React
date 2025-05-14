import html2pdf from 'html2pdf.js';

export function gerarPDF() {
  const conteudo = document.getElementById('conteudo-pdf');
  const nomeColaborador = document.getElementById('Colaborador').value.trim(); /* Esse "trim" tira os espacos em brancos se o colaborador colocar */
  let nomeArquivo;
  if(nomeColaborador){
    nomeArquivo = nomeColaborador + '-RAT';
  }
  else{
    nomeArquivo = 'RAT';
  }


  const options = {
    margin: [10, 10, 10, 10],
    filename: nomeArquivo,
    html2canvas: {
      scale: 2, 
      scrollY: 0,
      logging: false,
    },
    jsPDF: {
      unit: 'mm',
      format: [210, conteudo.offsetHeight * 0.4], /* Defino a escala da pagina, esse valor é padrão. Não depende do tamanho da tela para ser impresso */
      orientation: 'portrait',
    },
    pagebreak: { mode: 'avoid-all' },
  };

  html2pdf().from(conteudo).set(options).save();
}
