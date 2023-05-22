import React from 'react';
import Hero from './componentes/hero';
import Formulario from './componentes/formulario';
import Acordeon from './componentes/acordeon';

const App = () =>{
  return (
    <div className="Container">
<div className="row">
  <div className="col">
<Hero/>
<Formulario/>
<Acordeon/>
  </div>
</div>
    </div>
  );
}

export default App;
