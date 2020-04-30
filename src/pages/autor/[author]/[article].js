
import React from 'react'
import MainTemplate from '../../../template'
import get from '../../../geter'
import Link from 'next/link'

export default function (params) {
  console.log(params)
  return MainTemplate((
    <div className="container article">
      <h6>Artigos de</h6>
      <h3> {params.author} </h3>
  <h1>{params.title}</h1>
      <p>
        {params.content}
      </p>
    </div>
  ))
}

export async function getStaticProps ({ params }) {
    const article = await get.article(params.article, params.author)
  return {
    props:
    { author: params.author,
      title: params.article,
      content: article
    }
  }
}

export async function getStaticPaths() {
  const authors = await get.articleAuthors()

  const paths = await authors.reduce(async (accumulator, author) => {
    const articles = await get.authorArticles(author)
    // console.log(articles)
    return accumulator.concat(articles.map( article => {
      return { params: { author, article: article.name } }
    }))
  },[])

  return {
    paths,
    fallback: false // or false // See the "fallback" section below
  };
}