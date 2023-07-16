import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//<img alt='imagem1' src={im} import im from '../imagem/img1.png';
import axios from 'axios';

function Table(){
  const navegacao = useNavigate();
    const[coluna, setColuna]= useState([])
    const[records, setRecords]= useState([])
useEffect(()=>{
    axios.get('http://localhost:8080/pessoas')
    .then(resposta=>{
setColuna(Object.keys(resposta.data[0]))
setRecords(resposta.data)
    })

},[]);

return(
    <div className='container mt-5'>
    <h1 class="text-center">Listagem</h1>
    <div className='text-end'><Link to="/Cadastro" className="btn btn-primary"  style={{borderRadius:'2rem', padding:'0.4rem 1.3rem 0.5rem', fontSize:'2rem'}}>+</Link></div>
    <table class="table">
   
      <thead>
        <tr>
         {coluna.map((c,i)=>(
            <th key={i}>{c}</th>))}
        <th>Opções</th>
        </tr>
      
      </thead>
      <tbody>
       {
        records.map((d,i)=>(
            <tr key={i}>
          <th scope="row">{d.id}</th>
          <td>{d.nome}</td>
          <td>{d.idade}</td>
          <td>{d.password}</td>
          <td>{d.endereco}:{rua}</td>
          <td><Link to="/Editar"class="btn btn-outline-success">Editar</Link> 
          <Link to="/Home" class="btn ms-2 btn-danger" onClick={e=>excluir(d.id)}>Excluir</Link></td>
           </tr>
        ))
       }
       
      </tbody>
    </table>
    </div>);
    function excluir(id){
      
      axios.delete('http://localhost:8080/pessoas/'+id).then(resposta => {
   
     navegacao("/Home"); 
    })
    
    }
    
}
export default Table;