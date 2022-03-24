import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import ListaLivros from './components/ListaLivros';
import CriarLivro from './components/CriarLivro';
import EditarLivro from './components/EditarLivro';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ListaLivros />} />
          <Route path='/criar' element={<CriarLivro />} />
          <Route path='/editar/:id' element={<EditarLivro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
