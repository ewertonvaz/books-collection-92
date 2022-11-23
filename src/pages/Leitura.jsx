import BookPdf from "../components/BookPdf";
import BookEpub from "../components/BookEpub";
import { useState } from "react";

function Leitura({ caminho, tipo, ultPagLida }) {
  const [showLeitor, setShowLeitor] = useState(false);
  console.log(caminho);
  console.log(tipo);
  console.log(ultPagLida);
  return (
    <div className="livro-lista">
      <div>
        <button
          onClick={() => {
            setShowLeitor(!showLeitor);
          }}
        >
          Epub
        </button>
      </div>
      {!showLeitor && (
        <BookPdf tipo={caminho} ultPagLida={ultPagLida} caminho={tipo} />
      )}
      {showLeitor && (
        <BookEpub tipo={caminho} ultPagLida={ultPagLida} caminho={tipo} />
      )}
    </div>
  );
}

export default Leitura;
