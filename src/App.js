
import "./App.css";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CadastroPage from "./pages/CadastroPage";
import EditarPage from "./pages/EditarPage";
import GoogleBooksPage from "./pages/GoogleBooksPage";
import DetalhesPage from "./pages/DetalhesPage";
import NavBar from "./components/NavBar";
import UltimaPag from "./pages/UltimaPag";


function App() {
  return (
    <div className="App">
      <Toaster />
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livro/cadastro" element={<CadastroPage />} />
          <Route path="/livro/:livroID" element={<DetalhesPage />} />
          <Route path="/livro/:livroID/editar" element={<EditarPage />} />
          <Route path="/pesquisar" element={<GoogleBooksPage />} />
          <Route path="/livro/ultimapag/xx" element={<UltimaPag />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
