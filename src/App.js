import './App.css';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import EditarPage from './pages/EditarPage';
import GoogleBooksPage from './pages/GoogleBooksPage';

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path="/editar" element={<EditarPage />} />
        <Route path="/pesquisar" element={<GoogleBooksPage />} />
      </Routes>
    </div>
  );
}

export default App;
