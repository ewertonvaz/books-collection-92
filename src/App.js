import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import CadastroPage from "./pages/CadastroPage";
import EditarPage from "./pages/EditarPage";
import GoogleBooksPage from "./pages/GoogleBooksPage";
import DetalhesPage from "./pages/DetalhesPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Leitura from "./pages/Leitura";

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Toaster />
      <NavBar />

      <div className="container pb-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/livro/cadastro" element={<CadastroPage />} />
          <Route path="/livro/:livroID" element={<DetalhesPage />} />
          <Route path="/livro/:livroID/editar" element={<EditarPage />} />
          <Route path="/livro/google" element={<GoogleBooksPage />} />
          <Route path="/livro/leitura/:livroID" element={<Leitura />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
