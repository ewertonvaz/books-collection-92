import { useRef } from "react";
import { ReactEpubViewer } from "react-epub-viewer";
import teste from "./../assets/epubs/teste.epub";
import "./../components/BookEpub.css";

const BookEpub = () => {
  const viewerRef = useRef(null);

  return (
    <div className="epub" style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer url={teste} ref={viewerRef} />
    </div>
  );
};

export default BookEpub;
