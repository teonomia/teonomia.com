
import React from 'react'
import MainTemplate from '../../../template'
import get from '../../../geter'
import PoJson from 'pojson'
import Link from 'next/link'

export default function (params) {
  // console.log(params)
  return MainTemplate((
    <div className="container article">
      <style jsx>{`
        h5 {
          margin-top: 0px;
        }
        .no-bottom-margin {
          margin-bottom: 0px;
        }
        .intro{
          padding:5px;
        }
        .article{
          margin-bottom:5em;
        }
      `}</style>

  <h1 className='grey-text text-darken-2'>{params.title}</h1>

  <div className="col s12 m2">
      <p className="intro grey-text ">Artigo de
      <b className="black-text"> R. J. Rushdoony </b>
        - retirado de
        <a href="https://chalcedon.edu/resources/articles/4-steps-to-biblical-prayer"> Chalcedon Foundation</a>
      </p>
    </div>

      <div className='grey-text text-darken-3' dangerouslySetInnerHTML={ {__html: PoJson.fromPo(params.content).translatedHtml} }
      />
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