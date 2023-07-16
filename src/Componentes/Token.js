import React from 'react';
import { Link } from 'react-router-dom';


function Token(){

    return(
  <>
    <div className='w-60 vh-60 d-flex justify-content-center align-items-center p-lg-5'>
  <div className='w-5 border bg-light p-5'>
   <form class="text-center">
   <h1>Login</h1>
  <div class="mb-3"  style={{marginTop:'2rem'}}>
    <input type="text" placeholder='Insira o Token' class="form-control" style={{width:'20rem'}} id="exampleInputEmail1"  aria-describedby="emailHelp"/>
            </div>
 

  <div  style={{marginTop:'1rem'}}><Link to="/Home" class="btn btn-primary">Enviar</Link></div>
</form>
</div>
</div>
  </>
      )
}
export default Token;