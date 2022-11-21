import { Link, useParams } from 'react-router-dom';


// TODO: Substituir pela busca na API da aplicação
import livros from '../books.json';



function DetalhesPage() {

    const { livroID } = useParams();

    // TODO: Substituir pela busca na API da aplicação
    const livro = livros.find((livro) => livro._id === livroID);

    const progressoLeitura = Math.floor(livro.ultPagLida / livro.qtdPaginas * 100);

    return (

        <div className="row" style={{ border: "solid 1px red" }}>

            <div className="col-5 p-3" style={{ border: "solid 1px blue" }}>

                <div className="text-center pb-5">
                    <img src={livro.imagemCapa} alt={livro.titulo} />
                </div>

                <div className="text-center">
                    <Link to={`/livro/${livro._id}/editar`} className="btn btn-secondary">Editar livro</Link>
                </div>
            </div>

            <div className="col-7 p-3" style={{ border: "solid 1px green" }}>

                <div className="row mb-3">
                    <div className="col">
                        <div className="fw-bold">Título:</div>
                        <p className="text-muted">{livro.titulo}</p>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <div className="fw-bold">Subtítulo:</div>
                        <p className="text-muted"> {livro.subtitulo ? livro.subtitulo : '-'}</p>
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
                    <div className="col">
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="fw-bold mb-2">Progresso da leitura:</div>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{ width: `${progressoLeitura}%` }} aria-valuenow={progressoLeitura} aria-valuemin={0} aria-valuemax={100}>{progressoLeitura}%</div>
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="fw-bold mb-2">Anotações:</div>
                        <div className="text-muted">{livro.anotacoes}</div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DetalhesPage;
