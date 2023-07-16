import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Cadastro() {
  const [inserirDado, setInserirDado] = useState({nome:'', idade:'', password:'',id_endereco:'' })
  const [inserirEndereco, setInserirEndereco] = useState({rua:'', cidade:'' })

  const navegacao = useNavigate();
  function enviar(e) {
    e.preventDefault();
    axios.post('http://localhost:8080/pessoas', inserirDado, inserirEndereco).then(resposta => {
        alert("Sucessoo");
        navegacao("/Home");
      }).catch(err => console.log(err));
   

  }



  return (
    
      <div className='w-60 vh-60 d-flex justify-content-center align-items-center p-lg-5'>
        <div className='w-5 border bg-light p-5'>
          <form >
            <h1 className='text-center'>Cadastro</h1>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Nome</label>
              <input type="text" class="form-control " placeholder='Digite o nome' onChange={e=>setInserirDado({...inserirDado,nome:e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" />
                
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Idade</label>
              <input type="text" placeholder='Digite a idade' class="form-control" onChange={a=>setInserirDado({...inserirDado,idade:a.target.value})} style={{ width: '20rem' }} id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Senha</label>
              <input type="password" placeholder='Digite a senha' class="form-control" onChange={b=>setInserirDado({...inserirDado,password:b.target.value})} style={{ width: '20rem' }} id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Rua</label>
              <input type="text" placeholder='Digite a rua' class="form-control" onChange={c=>setInserirEndereco({...inserirDado,rua:c.target.value})} style={{ width: '20rem' }} id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Cidade</label>
              <input type="password" placeholder='Digite a cidade' class="form-control" onChange={d=>setInserirEndereco({...inserirDado,cidade:d.target.value})} style={{ width: '20rem' }} id="exampleInputPassword1" />
            </div>
           
            <div onClick={enviar} class="text-center"><Link to="/Home" class="btn btn-primary">Enviar</Link></div>
          </form>
        </div>
      </div>
    
  )
}
export default Cadastro;