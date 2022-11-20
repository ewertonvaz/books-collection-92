import ListaLivros from "../components/ListaLivros";
import livros from '../books.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function HomePage() {

    return (
        <div className="container">
            <div className="px-4">
                <div className="row justify-content-between">
                    <div className="col-5">
                        <form className="form-inline">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="" name="pesquisar" />
                                <button className="btn btn-outline-secondary" type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-2">
                        <form className="form-inline">
                            <div className="input-group">
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
        </div>
    );
}

export default HomePage;