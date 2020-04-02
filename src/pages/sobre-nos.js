import React from 'react'
import mainTemplate from '../template'
import Row from '../template/matComponents/row'

const Artigos = function () {
  return Row({InnerH:()=>(
  <div className="Artigos row left-align">
    <h1>Sobre Nós</h1>
  <p>Nós momento, significa apenas eu, Alvaro Separovich, que mantenho todo o conteúdo deste site.</p>
  <p>Graças a Deus, todos os conteúdos aqui disponibilizados, são publicados pelos seus produtores originais com liscença para distribuição.</p>
  <p>Assim meu único papel é (talvez) traduzir e deixar este conteúdo disponível</p>
  <p>  </p>

  <p>Gostou do projeto? você também pode contribuir.</p>
  <p>Entre em contato para saber como</p>

</div>)})
}

export default () => mainTemplate(<div className="home">
<Artigos/>
</div>)