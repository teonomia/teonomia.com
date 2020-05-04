import React from 'react'
import MainTemplate from '../template'
import { articleAuthors } from '../geter'
import Link from 'next/link'

export default function ({authors}) {
  return MainTemplate((
    <div className="container autores">
      <h2>Lista de Autores</h2>
      <ul>
        {authors.map((author, index)=>(
        <li key={index}>
          <Link href="/autor/[author]" as={`/autor/${author}`}>
            <a>
              {author}
            </a>
          </Link>
        </li>))}
      </ul>
    </div>
  ))
}


export async function getStaticProps (context) {
  const autores = await articleAuthors()
  return {
    props:
    { authors: autores }
  }
}