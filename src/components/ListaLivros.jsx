import LivroCard from "./LivroCard";

function ListaLivros({ livros }) {


    return (
        <div className="livro-lista">
                {livros.map((livro) => {
                    return (
                        <LivroCard key={livro._id} livro={livro} />
                    );
                })}
        </div>
    )
}

export default ListaLivros;

