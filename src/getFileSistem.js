import {readdir,readFile} from 'fs'
import util from 'util'

export const Rdir = util.promisify(readdir)
export const Rfile = util.promisify(readFile)

const cwd = process.cwd()
export const getDir = (path='') => Rdir(`${cwd}/content/${path}`).catch(e=>{
  if(e.errno === -2){
    return { erro: 'Nothing Found', code:404}
  }
})
export const getFile = path => Rfile(`${cwd}/content/${path}`,{encoding:'utf-8'}).catch(e=>{
  if(e.errno === -2){
    return { erro: 'Nothing Found', code:404}
  }
})