import React from 'react'
import mainTemplate from '../template'
import Row from '../template/matComponents/row'

const Artigos = function () {
  return Row({InnerH:()=>(
  <div className="Artigos row left-align">
    <h1>first</h1>
    <h3>R. J. Rushdoony</h3>
  <p><strong>Fonte:</strong> <em>Revolt Against Maturity</em>, Rousas John Rushdoony, p. 17-21.</p>
  <p><strong>Traduzido</strong> por: Felipe Sabino de Araújo Neto –&nbsp;24 de maio de 2009</p>
</div>)})
}

export default () => mainTemplate(<div className="home">
<Artigos/>
</div>)