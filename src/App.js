import React, { useReducer, useState } from 'react';
import './App.css';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function App() {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [formData2, setFormData2] = useReducer(formReducer, {});
  const [formData3, setFormData3] = useReducer(formReducer, {});
  const [formData4, setFormData4] = useReducer(formReducer, {});
  const [formData5, setFormData5] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 20000);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange2 = event => {
    setFormData2({
      name: event.target.name,
      value: event.target.value,
    });

  }

  const handleChange3 = event => {
    setFormData3({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange4 = event => {
    setFormData4({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const handleChange5 = event => {
    setFormData5({
      name: event.target.name,
      value: event.target.value,
    });
  }
  return(
    <div className="estilo">
      <h1>Registro de Proveedores</h1>
      {submitting &&
       <div>
         Informacion de proveedor registrada:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>Razon Social</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData2).map(([name, value]) => (
             <li key={name}><strong>Nombre comercial</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData3).map(([name, value]) => (
             <li key={name}><strong>RUC</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData4).map(([name, value]) => (
             <li key={name}><strong>Nombre de contacto</strong>: {value.toString()}</li>
           ))}
         </ul>
         <ul>
           {Object.entries(formData5).map(([name, value]) => (
             <li key={name}><strong>Telefono/celular</strong>: {value.toString()}</li>
           ))}
         </ul>
       </div>
      }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Razon Social</p>
            <input name="rc" onChange={handleChange}/>
          </label>
          <label>
            <p>Nombre comercial</p>
            <input name="nc" onChange={handleChange2}/>
          </label>
          <label>
            <p>RUC</p>
            <input name="ruc" onChange={handleChange3}/>
          </label>
          <label>
            <p>Nombre de contacto</p>
            <input name="ndc" onChange={handleChange4}/>
          </label>
          <label>
            <p>Telefono/celular</p>
            <input name="tel" onChange={handleChange5}/>
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}



export default App;
