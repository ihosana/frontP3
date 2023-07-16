import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Editar() {

    const [data, setData] = useState([]);
    const {id} = useParams();
    useEffect(() => {
      axios.get('http://localhost:3030/pessoas'+id)
        .then(resposta => setData(resposta.data)).catch(err => console.log(err))
   },[])

  return (
    <>
      <div className='w-60 vh-60 d-flex justify-content-center align-items-center p-lg-5'>
        <div className='w-5 border bg-light p-5'>
          <form >
            <h1 className='text-center'>Editar</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input type="text" class="form-control" style={{ width: '20rem' }} name='nome' value={data.nome} id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Idade</label>
              <input type="password" style={{ width: '20rem' }}  name='idade' value={data.idade} class="form-control" id="exampleInputPassword1" />
            </div>

            <div class="text-center"><Link to="/Home" class="btn btn-primary" >Enviar</Link></div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Editar;