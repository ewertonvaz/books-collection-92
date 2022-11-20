import ListaLivros from "../components/ListaLivros";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// TODO: Substituir pela busca na API da aplicação
import livros from '../books.json';


function HomePage() {

    return (
        <div className="container">
            <div className="px-4">
                <div className="row justify-content-between">
                    <div className="col-5">
                        <form className="form-inline">
                            <div className="input-group justify-content-start">
                                <input className="form-control" type="text" placeholder="" name="pesquisar" />
                                <button className="btn btn-outline-secondary" type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-5">
                        <form className="form-inline">
                            <div className="input-group justify-content-end">
                                <button className="btn btn-dark" type="submit">Adicionar livro
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row gx-5">
                    <div className="col">
                        <div className="p-3 livros-lista-container">
                            <div className="row p-2">
                                <h2>Quero Ler</h2>
                                <hr />
                            </div>

                            <div className="row">
                                <ListaLivros livros={livros} />
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="p-3 livros-lista-container">
                            <div className="row p-2">
                                <h2>Lidos</h2>
                                <hr />
                            </div>

                            <div className="row">
                                <ListaLivros livros={livros} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer col-md-12 text-center">
                    <hr />
                    <p>Desenvolvido por Ewerton, Priscila, Roberto e Rodrigo. <br /> Turma ENAP WDFT-92/2022</p>
                </div>
            </footer>
        </div>
    );
}

export default HomePage;