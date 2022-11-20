import { Link } from "react-router-dom";

function LivroCard({ livro }) {

    return (

        <div className="livro-card">
            <div>
                <Link key={livro._id} to={`/livro/${livro._id}`}>
                    <img src={livro.imagemCapa} alt={livro.titulo} />
                </Link>
            </div>
            <div className="livro-card-titulo">
                {livro.titulo}
            </div>

        </div>
    );
}

export default LivroCard;

