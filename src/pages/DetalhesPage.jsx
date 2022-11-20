import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function EditarPage() {
  return (
    <div>
      <NavBar />
      <Link to={"/livro/ultimapag/xx"}>Teste Última Página</Link>

      <h1>Detalhes Page</h1>
    </div>
  );
}

export default EditarPage;
