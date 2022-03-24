import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai'
import { MdEdit, MdDelete } from 'react-icons/md'

const endpoint = 'http://127.0.0.1:8000/api'

const ListaLivros = () => {

    const [livros, setLivros] = useState([]);

    useEffect(() => {
        getAllLivros();
    }, [])

    const getAllLivros = async () => {
        const response = await axios.get(`${endpoint}/livros`)
        setLivros(response.data)

        //eslint-disable-next-line react-hooks/exhaustive-deps
    }

    const DeleteLivro = async (id) => {
        await axios.delete(`${endpoint}/livros/${id}`)

        getAllLivros();
    }

    return (

        <div className='container'>
            <div className='mt-5 d-grid gap-2 col-6 mx-auto'>
                <Link to="/criar" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Novo Livro <AiOutlinePlus /></Link>
            </div>

            <div className='mt-5'>
                <div className='row'>
                    {livros.map((livro) => (
                        <div key={livro.id} className='col-sm-12 col-md-6'>
                            <div className="card mb-2 shadow-sm bg-secondary bg-opacity-10">
                                <div className="card-body">
                                    <div className="head">
                                        <h4 className="card-title"> {livro.titulo} </h4>
                                        <h6><strong>Código do livro:</strong> {livro.codLivro} </h6>
                                    </div>
                                    <p className="card-text">
                                        <br />
                                        <strong>Sinopse:</strong> {livro.sinopse}
                                        <br />
                                        <strong>Tipo:</strong> {livro.tipo}
                                        <br />
                                        <strong>Código ISBN:</strong> {livro.codISBN}
                                        <br />
                                        <strong>R$</strong> {livro.valor}
                                    </p>
                                    <div className="d-flex justify-content-end border-top pt-2 m-0">
                                        <Link to={`/editar/${livro.id}`} className="btn btn-sm btn-outline-warning me-2">Editar <MdEdit /></Link>
                                        <button onClick={() => DeleteLivro(livro.id)} className="btn btn-sm btn-outline-danger">Excluir <MdDelete /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ListaLivros;