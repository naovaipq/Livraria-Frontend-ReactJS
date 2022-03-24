import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CriarLivro = () => {

  const [codLivro, setCodLivro] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [tipo, setTipo] = useState('');
  const [codISBN, setCodISBN] = useState('');
  const [valor, setValor] = useState(0);

  const endpoint = 'http://127.0.0.1:8000/api'

  const navigate = useNavigate();


  const armazenar = async (e) => {
    e.preventDefault();

    const dados = {
      codLivro: codLivro,
      titulo: titulo,
      autor: autor,
      sinopse: sinopse,
      tipo: tipo,
      codISBN: codISBN,
      valor: valor
    }

    //console.log(dados)

    await axios.post(`${endpoint}/livros`, dados)

    navigate('/');
  }

  return (

    <div className='container' >


      <form onSubmit={armazenar} className="mt-5">
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Código do livro"
            value={codLivro}
            onChange={(e) => setCodLivro(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="mb-3">
              <input
                className="form-control"
                id="titulo"
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>
          </div>

          <div className='col-md-6 col-sm-12'>
            <input
              className="form-control"
              id="autor"
              type="text"
              placeholder="Autor"
              value={autor}
              onChange={(e) => setAutor(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-3">
          <input
            className="form-control"
            id="sinopse"
            type="text"
            placeholder="Sinopse"
            value={sinopse}
            onChange={(e) => setSinopse(e.target.value)}
          />
        </div>

        <div className='row'>
          <div className='col-md-6 col-sm-12'>
            <select
              className="form-select mt-3"
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option>Selecione o tipo de capa do livro</option>
              <option value="Capa Dura">Capa Dura</option>
              <option value="Capa Cartonada">Capa Cartonada</option>
            </select>
          </div>

          <div className='col-md-6 col-sm-12'>
            <div className="mt-3">
              <input
                className="form-control"
                id="codISBN" type="text"
                placeholder="Código ISBN"
                value={codISBN}
                onChange={(e) => setCodISBN(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="mt-3">
          <input
            className="form-control"
            id="valor" type="text"
            placeholder="Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>

        <div className='d-grid gap-2 col-6 mx-auto'>
          <button type="submit" className="btn btn-outline-success mt-3 ">Salvar</button>
        </div>


      </form>
    </div>
  )
}

export default CriarLivro;