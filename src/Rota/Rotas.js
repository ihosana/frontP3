import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';

import Table from '../Componentes/Table';
import Cadastro from '../Componentes/Cadastro';
import Editar from '../Componentes/Editar';
import Token from '../Componentes/Token';
function Rotas(){
return(
<>
<BrowserRouter>

<Routes>
  <Route path="/" exact element={<Token/>}/>
  <Route path="/Home" exact element={<Table/>}/>
  <Route path="/Cadastro" element={<Cadastro/>}/>
  <Route path="/Editar" element={<Editar/>}/>
</Routes>
</BrowserRouter>
</>
)
}

export default Rotas;