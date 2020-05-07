
import React from 'react'
import MainTemplate from '../../../template'
import { articleAuthors, authorArticles } from '../../../geter'
import Link from 'next/link'

export default function ({articles, author}) {

  return MainTemplate((

    <div className="container articles">
      <h6>Lista de Artigos de</h6>
      <h2> {author} </h2>
      <ul>
        {articles.map((article, i)=>(
          <li key={i}>
            <Link href="/autor/[author]/[article]" as={`/autor/${author}/${article.name}`}>
              <a>{article.name}</a>
            </Link>
          </li>))}
      </ul>
    </div>
  ))
}


export async function getStaticProps ({ params }) {
    const articles = await authorArticles(params.author)
  return {
    props:
    { author: params.author, articles }
  }
}

export async function getStaticPaths() {
  const authors = await articleAuthors()
  return {
    paths: authors.map(author => { return {params: { author }} }),
    fallback: false // or false // See the "fallback" section below
  };
}