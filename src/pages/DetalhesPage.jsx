import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import coverPlaceHolder from '../assets/book-cover-placeholder.png';
import Rating from "../components/shared/Rating";
import { formatDateBR } from "../util/date.util";
import api from "../api/api";

function DetalhesPage() {
  const { livroID } = useParams();

  const [livro, setLivro] = useState({});

  const [progressoLeitura, setProgressoLeitura] = useState(0);

  useEffect(() => {
    async function fetchLivro() {
      const response = await api.get(
        '/books/' + livroID
      );

      const livroApi = {...response.data };
      // Converte as datas recebidas da API
      const { dataInicio, dataConclusao } = livroApi;
      if ( dataInicio ) {
        livroApi.dataInicio = formatDateBR(dataInicio);
      }
      
      if(dataConclusao) {
        livroApi.dataConclusao = formatDateBR(dataConclusao);
      }
      //
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
    <div>
      <div className="row">
        <h1>Detalhes do Livro</h1>
      </div>
      <div className="row">
        <div className="col-3 p-3">
          <div className="text-center mt-3 mb-5 livro-detalhe-imagem">
            <img className="img-fluid" src={livro.imagemCapa || coverPlaceHolder} alt={livro.titulo} />
          </div>

          <div className="text-center">
            <Link to={`/livro/${livro._id}/editar`} className="btn btn-secondary">
              Editar
            </Link>
            <Link
              state={{ livro }}
              to={`/livro/leitura/${livro._id}`}
              className={`btn btn-secondary ms-1 ${livro.caminho ? '' : 'disabled'}`}
            >
              Ler
            </Link>

            <Link to={`/`} className="btn btn-secondary ms-1">
              Voltar
            </Link>
          </div>
        </div>

        <div className="col p-3 bg-light">
          <div className="row mb-3">
            <div className="col">
              <div className="fw-bold">T??tulo:</div>
              <p className="text-muted">{livro.titulo}</p>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="fw-bold">Subt??tulo:</div>
              <p className="text-muted">
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
              <div className="fw-bold">Rating:</div>
                <Rating showRate={false} width="120px" color="#0d6efd">{livro.ranking}</Rating>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="fw-bold">N??mero de p??ginas:</div>
              <p className="text-muted"> {livro.qtdPaginas}</p>
            </div>
            <div className="col">
              <div className="fw-bold">??ltima p??gina lida:</div>
              <p className="text-muted"> {livro.ultPagLida}</p>
            </div>
            <div className="col"></div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <div className="fw-bold">Data in??cio leitura:</div>
              <p className="text-muted"> {livro.dataInicio}</p>
            </div>
            <div className="col">
              <div className="fw-bold">Data conclus??o leitura:</div>
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
              <div className="fw-bold mb-2">Anota????es:</div>
              <div className="text-muted">{livro.anotacoes}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetalhesPage;
