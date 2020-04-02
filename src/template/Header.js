import Link from 'next/link'

const Header = ()=>(
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  <nav>
    <div className="nav-wrapper black white-text">
      <a href="#" className="brand-logo center">Teonomia</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>

</div>
)

export default Header
