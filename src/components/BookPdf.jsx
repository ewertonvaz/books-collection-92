import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./../components/BookPdf.css";
import pdf from "./../assets/pdfs/auto.pdf";

/*ESSA VARIÁVEL DE URL USA UM OUTRO LINK ANTES PARA
EVITAR UM ERRO DE CORS 
const urllivro =
  "https://repositorio.usp.br/directbitstream/4cd7f9b7-7144-40f4-bfd0-7a1d9a6bd748/nd_72.pdf";
const url = `https://cors-anywhere.herokuapp.com/${urllivro}`;
*/
function BookPdf({ ultPagLida }) {
  /* PARA USAR A BIBLIOTECA PRECISA DE UM pdf.worker.js,
  IMPORTARMOS ELE DE OUTRO SITE PARA EVITAR PROBLEMAS NA BUILD E DEPLOY */
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(parseInt(ultPagLida));
  /* EVITAR CLIQUE COM O BOTÃO DIREITO NA TELA
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
*/

  /*Quando o documento é carregado com sucesso*/
  function onDocumentLoadSuccess({ numPages, options }) {
    setNumPages(numPages);
    setPageNumber(parseInt(ultPagLida));
  }

  function mudarPagina(offset) {
    setPageNumber((paginaAnterior) => paginaAnterior + offset);
  }

  function pagAnterior() {
    mudarPagina(-1);
  }

  function proxPagina() {
    mudarPagina(1);
  }
  return (
    <>
      <div className="main">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <div className="pagec">
            Página {pageNumber || (numPages ? 1 : "--")} de {numPages || "--"}
          </div>
          <div className="buttonc">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={pagAnterior}
              className="Pre"
            >
              Anterior
            </button>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={proxPagina}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookPdf;
