import fetch from 'node-fetch'

// https://raw.githubusercontent.com/teonomia/solomon/master/repository/articles/authors/allAuthors-pt-br.json
const RAW_URL = 'https://raw.githubusercontent.com/teonomia/solomon/master/repository'
const RAW_ARTICLE_URL = 'https://raw.githubusercontent.com/teonomia/articles/master/authors'
// const RAW_ARTICLE_URL = 'https://raw.githubusercontent.com/teonomia/articles/master/authors/r.j.rushdoony/POs/pt-br/4-steps-to-biblical-prayer.po'

const cwd = process.cwd()

export async function articleAuthors (language='pt-br') {
  const allAuthorsRaw = await fetch(`${RAW_URL}/articles/authors/allAuthors-${language}.json`)
  const allAuthors = await allAuthorsRaw.json()
  return allAuthors
}
// /articles/authors/pt-br/r.j.rushdoony.json
export async function authorArticles (author, language='pt-br') {
  const articlesRaw = await fetch(`${RAW_URL}/articles/authors/${language}/${author}.json`)
  const articles = await articlesRaw.json()
  return articles
}

export async function article (articleName, author, language='pt-br') {
  console.log(`${RAW_ARTICLE_URL}/${language}/${author}/POs/${language}/${articleName}.po`)
  const articleRaw = await fetch(`${RAW_ARTICLE_URL}/${author}/POs/${language}/${articleName}.po`)
  const articleTxt = await articleRaw.text()
  return articleTxt
}

export default {articleAuthors, authorArticles, article}