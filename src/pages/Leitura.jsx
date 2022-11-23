import BookPdf from "../components/BookPdf";
import BookEpub from "../components/BookEpub";
//import { useState } from "react";
import { useLocation } from "react-router-dom";

function Leitura() {
  //const [showLeitor, setShowLeitor] = useState(false);
  const parametro = useLocation();
  const { livro } = parametro.state;
  console.log(livro.tipo);
  //console.log(livro.ultPagLida);

  return (
    <div className="livro-lista">
      {livro.tipo === "PDF" && (
        <BookPdf
          tipo={livro.tipo}
          ultPagLida={livro.ultPagLida}
          caminho={livro.caminho}
        />
      )}
      {livro.tipo === "Epub" && (
        <BookEpub
          tipo={livro.tipo}
          ultPagLida={livro.ultPagLida}
          caminho={livro.caminho}
        />
      )}
    </div>
  );
}

export default Leitura;
