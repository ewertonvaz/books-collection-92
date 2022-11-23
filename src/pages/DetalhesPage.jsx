import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function DetalhesPage() {
  const { livroID } = useParams();

  const [livro, setLivro] = useState({});

  const [progressoLeitura, setProgressoLeitura] = useState(0);

  useEffect(() => {
    async function fetchLivro() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/books-collection-92/${livroID}`
      );

      const livroApi = response.data;

      setLivro(livroApi);

      setProgressoLeitura(
        livroApi.qtdPaginas
          ? Math.floor((livroApi.ultPagLida / livroApi.qtdPaginas) * 100)
          : 0
      );
    }

    fetchLivro();
  }, [livroID]);

  return (
    <div className="row">
      <div className="col-5 p-3">
        <div className="text-center pb-5">
          <img src={livro.imagemCapa} alt={livro.titulo} />
        </div>

        <div className="text-center">
          <Link to={`/livro/${livro._id}/editar`} className="btn btn-secondary">
            Editar livro
          </Link>
          {"   "}
          <Link
            state={{ livro }}
            to={`/livro/leitura/${livro._id}`}
            className="btn btn-secondary"
          >
            Ler
          </Link>
        </div>
      </div>

      <div className="col-7 p-3 bg-light">
        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold">Título:</div>
            <p className="text-muted">{livro.titulo}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold">Subtítulo:</div>
            <p className="text-muted">
              {" "}
              {livro.subtitulo ? livro.subtitulo : "-"}
            </p>
          </div>
          <div className="col">
            <div className="fw-bold">Autor:</div>
            <p className="text-muted"> {livro.autor}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold">Categoria:</div>
            <p className="text-muted"> {livro.categoria}</p>
          </div>
          <div className="col">
            <div className="fw-bold">Idioma:</div>
            <p className="text-muted"> {livro.idioma}</p>
          </div>
          <div className="col">
            <div className="fw-bold">Ranking:</div>
            <p className="text-muted"> {livro.ranking}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold">Número de páginas:</div>
            <p className="text-muted"> {livro.qtdPaginas}</p>
          </div>
          <div className="col">
            <div className="fw-bold">Última página lida:</div>
            <p className="text-muted"> {livro.ultPagLida}</p>
          </div>
          <div className="col"></div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold">Data início leitura:</div>
            <p className="text-muted"> {livro.dataInicio}</p>
          </div>
          <div className="col">
            <div className="fw-bold">Data conclusão leitura:</div>
            <p className="text-muted"> {livro.dataConclusao}</p>
          </div>

          <div className="col">
            <div className="fw-bold">Status:</div>
            <p className="text-muted"> {livro.status}</p>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="fw-bold mb-2">Progresso da leitura:</div>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${progressoLeitura}%` }}
                aria-valuenow={progressoLeitura}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                {progressoLeitura}%
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>

        <div className="row mb-3">
          <div className="col pt-2">
            <div className="fw-bold mb-2">Anotações:</div>
            <div className="text-muted">{livro.anotacoes}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesPage;
