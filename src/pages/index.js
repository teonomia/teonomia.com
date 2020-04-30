import React from 'react'
import mainTemplate from '../template'
const Artigos = function () {
  return (
    <div className="container">

      <div className="Artigos row left-align">
        <h1>O site de tradução colaborativa para a glória de Deus</h1>
        <h3>Criado por Alvaro Separovich</h3>
    </div>
  </div>)
}

export default () => mainTemplate(<div className="home">
<Artigos/>
</div>)