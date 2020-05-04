import React, {useEffect} from 'react'
import Link from 'next/link'
import $ from 'jquery';

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}

const Header = ()=>{
  useEffect(() => {
    $('.sidenav')
    .sidenav()
    .on('click tap', 'li a', () => {
        $('.sidenav').sidenav('close');
    });
    $('.collapsible').collapsible();
  })

  return (
<div>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js" />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
  <nav>
    <div className="nav-wrapper grey darken-3 white-text">
      <a href="/" className="brand-logo center">Teonomia</a>
      <a href="#" data-target="slide-out" className="sidenav-trigger show-on-medium-and-up"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link href='/about'>
            <a>About</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>


  <ul id="slide-out" className="sidenav">
    <li><div className="user-view">
      <h5>Menu</h5>
    </div></li>
    <li><Link href='/'><a><i className="material-icons">home</i>Início</a></Link></li>
    <li><Link href='/autor/[author]' as='/autor/r.j.rushdoony'><a><i className="material-icons">folder</i>Artigos Traduzidos</a></Link></li>
    <li><Link href='/autores'><a><i className="material-icons">person</i>Autores</a></Link></li>
    <li><a href="#!"><i className="material-icons">local_cafe</i>Nosso Blog</a></li>
    <li><a href="#!"><i className="material-icons">thumb_up</i>Recomendamos</a></li>
    <li><div className="divider"></div></li>
    <li><a className="subheader">Sobre nós</a></li>
    <li><a className="waves-effect" href="#!">Quem somos</a></li>
    <li><a className="waves-effect" href="#!">Como Contribuir</a></li>
  </ul>



</div>
)}

export default Header
