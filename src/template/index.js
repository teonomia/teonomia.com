import Footer from './footer'
import Header from './Header'


const mainTamplate = (html)=>(
<div className='grey lighten-4'>
  <Header/>
  <div className="main">
  {html}
  </div>
  <Footer/>
</div>
)

export default mainTamplate
