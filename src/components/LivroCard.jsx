import { Link } from "react-router-dom";

function LivroCard({ livro }) {

    return (

        <div className="livro-card">
            <div className="livro-card-imagem">
                <Link to={`/livro/${livro._id}`}>
                    <img className="img-fluid" src={livro.imagemCapa} alt={livro.titulo} />
                </Link>
            </div>
            <div className="livro-card-titulo">
                {livro.titulo.length <= 50 ? livro.titulo : livro.titulo.substr(0, 46) + ' ...'}
            </div>

        </div>
    );
}

export default LivroCard;

