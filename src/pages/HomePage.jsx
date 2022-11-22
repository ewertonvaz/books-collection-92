import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LivroCard from "../components/LivroCard";
import { useEffect, useState } from 'react';
// import axios from 'axios';

// TODO: Substituir pela busca na API da aplicação
import livrosJSON from '../books.json';
import { Link } from 'react-router-dom';


const TIPOS_STATUS = {
    LENDO: "lendo",
    LER: "ler",
    LIDO: "lido"
};


function HomePage() {

    const [livrosApiPorStatus, setLivrosApiPorStatus] = useState([]);

    const [livrosComPesquisa, setLivrosComPesquisa] = useState([]);


    const [status, setStatus] = useState('lido');

    const [pesquisar, setPesquisar] = useState('');


    function handleTabChange(e) {
        setStatus(e.target.dataset.status);
    }

    function handlePesquisarChange(e) {
        setPesquisar(e.target.value);
    }

    /**
     * Buscar dados na API
     */
    useEffect(() => {

        async function fetchLivrosApiPorStatus() {

            // TODO: Substituir por busca na API

            const response = {
                data: livrosJSON.filter(livro => livro.status === status)
            };

            // const response = await axios.get(
            //     `https://ironrest.herokuapp.com/findAll/books-collection-92?status=${status}`
            // );

            setLivrosApiPorStatus(response.data);

            setLivrosComPesquisa(response.data);

        }

        fetchLivrosApiPorStatus();

    }, [status]);

    /**
     * Realizar a pesquisa
     */
    useEffect(() => {

        if (!pesquisar) {
            setLivrosComPesquisa(livrosApiPorStatus);
        }
        else {

            const lst = livrosApiPorStatus.filter((livro) => livro.titulo.toLowerCase().includes(pesquisar.toLowerCase()));

            setLivrosComPesquisa(lst);

        }


    }, [livrosApiPorStatus, pesquisar]);


    return (
        <div className="container pt-3">
            <div className="px-4">
                <div className="row justify-content-between">

                    <div className="col-4">
                        <form className="form-inline">
                            <div className="input-group">
                                <input className="form-control form-control-sm" type="text" placeholder="Buscar" name="pesquisar" id="pesquisar" onChange={handlePesquisarChange} />
                                <button className="btn btn-outline-secondary btn-sm" type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>

                        </form>
                    </div>
                    <div className="col">
                        <form className="form-inline">
                            <div className="text-end">
                                <Link className="btn btn-outline-secondary btn-sm" to="/livro/cadastro">Novo livro
                                </Link>
                                <Link className="btn btn-outline-primary btn-sm ms-3" to="/livro/google">Google Livros
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row pt-5">
                    <div className="col">
                        <ul className="nav nav-tabs" id="tabStatus">
                            <li className="nav-item">
                                <button className={`nav-link ${status === TIPOS_STATUS.LENDO ? 'active fw-bold' : ''}`} id="tab-lendo" data-status={TIPOS_STATUS.LENDO} type="button" onClick={handleTabChange}>Lendo</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${status === TIPOS_STATUS.LER ? 'active fw-bold' : ''}`} id="tab-ler" data-status={TIPOS_STATUS.LER} type="button" onClick={handleTabChange}>Quero ler</button>
                            </li>
                            <li className="nav-item">
                                <button className={`nav-link ${status === TIPOS_STATUS.LIDO ? 'active fw-bold' : ''}`} id="tab-lido" data-status={TIPOS_STATUS.LIDO} type="button" onClick={handleTabChange}>Lidos</button>
                            </li>

                        </ul>

                        <div className="livro-lista">
                            {livrosComPesquisa.map((livro) => {
                                return (
                                    <LivroCard key={livro._id} livro={livro} />
                                );
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default HomePage;
