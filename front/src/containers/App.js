import React, { Component } from 'react'
import From from '../components/From'


class App extends Component {// component stateful
  render() {
    return (<>
      <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h2">Color Aleatorio</span>
  </div>
</nav>
      <div className='container'>
        <div className='row justify-content-center'>
        <div className='col-auto'>
        
        <p>Obtenga colores aleatorios</p>
        </div>
        </div>
        <From />
      
      </div>
      </>
    )
  }
}

export default App


