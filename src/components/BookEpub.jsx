import { useRef, useState } from "react";
import { ReactEpubViewer } from "react-epub-viewer";
import teste from "./../assets/epubs/teste.epub";
import "./../components/BookEpub.css";

const BookEpub = () => {
  const viewerRef = useRef(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(ReactEpubViewer.viewerOption);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () =>
    setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

  const goToNextPage = () =>
    setPageNumber(pageNumber + 1 >= numPages ? numPages : pageNumber + 1);
  return (
    <div className="epub" style={{ position: "relative", height: "100%" }}>
      <nav>
        <button onClick={goToPrevPage}>Anterior</button>
        <button onClick={goToNextPage}>Avançar</button>
        <p>
          Página {pageNumber} de {numPages}
        </p>
      </nav>
      <ReactEpubViewer
        url={teste}
        ref={viewerRef}
        onLoadSuccess={onDocumentLoadSuccess}
      />
    </div>
  );
};

export default BookEpub;
