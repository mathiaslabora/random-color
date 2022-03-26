import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';

import Cuadro from './Cuadro';

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));

  };
  return <div className='col'>
    <form onSubmit={onSubmit}>
      <p>Presione el boton para generar color aleatorio:</p>
      <br />
      <Cuadro/>
      <br />
      <button type="submit" onClick={()=> {       
    setState( '#' +  Math.random().toString(16).substr(-6))
  }} 
  disabled={props.loading}>
        Enviar
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)
