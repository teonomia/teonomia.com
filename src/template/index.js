import Footer from './footer'
import Header from './Header'


const mainTamplate = (html)=>(
<div>
  <Header/>
  <div className="main">
  {html}
  </div>
  <Footer/>
</div>
)

export default mainTamplate
