import { useRouter } from 'next/router'
import {getAuthors} from '../../lib/api'

const Post = (props) => {
  console.log(props)
  const router = useRouter()
  const { autor } = router.query

return <p>Post: {autor}</p>
}

export const getStaticProps = () => {
  return {
    props: {
      slugs: 'MACONHA', // files.map(filename => filename)
    }
  }
}

export default Post