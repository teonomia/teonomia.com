
import React from 'react'
import mainTemplate from '../../../template'


// export sync function RETIRAR (req, res){
//   const {author} = req.query
//   const archive = await getDir(`${author}/pt`)

//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ archive }))
// }

export default function ({autores}) {
  console.log(autores)
  return MainTemplate((

    <div className="container autores">
      <h2>Lista de Autores</h2>
      <ul>
        {autores.map(autor=>(<li>{autor}</li>))}
      </ul>
    </div>
  ))
}


export async function getStaticProps (context) {
  const {getDir} = require( '../getFileSistem')
  const autores = await getDir()
  return {
    props:
    { autores }
  }
}