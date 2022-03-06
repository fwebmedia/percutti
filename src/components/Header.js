import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/images/logo2.png';

class Header extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark py-1" style={{backgroundColor:`rgb(26 59 100)`}}>

                    <div className="container px-3">

                        <Link className="navbar-brand mx-auto1" to="/">
                            <img src={Logo} alt="Fybeca" className="d-inline-block align-text-top" width="120" height="42"/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" exact to="/">Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="terminos">Términos</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link className="nav-link" to="registros">Registros</Link>
                                </li>
                            </ul>
                        </div>

                    </div>

                </nav>
            </div>
        )
    }
}
export default Header;