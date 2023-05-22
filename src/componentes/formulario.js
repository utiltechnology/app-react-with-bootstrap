import React from 'react';

const Formulario = () =>{

return (
<div class="col-lg-6 col-xxl-4 my-5 mx-auto">
  <div class="d-grid gap-2">
    <button class="btn btn-outline-secondary" type="button">Secondary action</button>
    <button class="btn btn-primary" type="button">Primary action</button>
  </div>

  <div class="d-flex gap-2 justify-content-center py-5">


    <span class="visually-hidden">Loading...</span>

  <button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</div>


</div>
 );
}
export default Formulario;