import React from 'react';
import Logo from '../assets/images/logo2.png';

class Header extends React.Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor:`rgb(26 59 100)`}}>
                    <div className="container-fluid">
                        <a className="navbar-brand mx-auto" href="index.html">
                            <img src={Logo} alt="Fybeca" className="d-inline-block align-text-top"/>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;