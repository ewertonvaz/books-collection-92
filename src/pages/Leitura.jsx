import BookPdf from "../components/BookPdf";
import BookEpub from "../components/BookEpub";
import { useState } from "react";
import { useLocation } from "react-router-dom";

function Leitura() {
  const [showLeitor, setShowLeitor] = useState(false);
  const parametro = useLocation();
  const { livro } = parametro.state;
  console.log(livro);
  console.log(livro.tipo);
  console.log(livro.ultPagLida);

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
      {livro.tipo === "PDF" && (
        <BookPdf
          tipo={livro.caminho}
          ultPagLida={livro.ultPagLida}
          caminho={livro.tipo}
        />
      )}
      {livro.tipo === "Epub" && (
        <BookEpub
          tipo={livro.caminho}
          ultPagLida={livro.ultPagLida}
          caminho={livro.tipo}
        />
      )}
    </div>
  );
}

export default Leitura;
