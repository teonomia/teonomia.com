import React from 'react'
import MainTemplate from '../template'

export default function ({autores}) {
  return MainTemplate((
    <div className="container autores">
      <h2>Lista de Autores</h2>
      <ul>
        {autores.map((autor, index)=>(<li key={index}>{autor}</li>))}
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