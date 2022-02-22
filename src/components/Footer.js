import React from 'react';
//import { Link } from "react-router-dom";
import './footer.css';
import Logo1800 from '../assets/images/1800.png'
import Logo1010 from '../assets/images/1010.png'
import LogoFyecaCom from '../assets/images/fybecacom.png'
import LogoDescarga from '../assets/images/descarga.png'
import Logo from '../assets/images/logo2.png'
import Pidele from '../assets/images/pidele.png'
import Facebook from '../assets/images/facebook.png'
import Twitter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'
import Siete from '../assets/images/siete.png'
import Seis from '../assets/images/seis.png'

const anio = new Date().getFullYear();

class Footer extends React.Component{
    render(){
        return(

            <footer>
                <div className="bg-white px-3 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="text-center">
                                <img className="img-fluid" src={ Siete } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-verde px-3 py-3">
                    <div className="container">
                        <div className="row">
                            <div className="text-center">
                                <img className="img-fluid" src={ Seis } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue px-3 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-white text-center">
                                <p className="mb-0">
                                    *Promoción válida para clientes VitalCard. Canje de productos y emisión de stickers hasta el 15 de septiembre de { anio } o hasta agotar stock. Productos disponibles 35.000. Una vez facturados los productos Percutti Legno no se aceptan devoluciones. Tacoma no incluye los cuchillos. Conoce más en www.fybeca.com. Aplican restricciones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-celeste px-3 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-white text-center">
                                <p>
                                    Síguenos en nuestras redes sociales porque tendremos grandes sorpresas.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <a className="mx-1" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <img src={ Facebook } alt="Fybeca"/>
                                    </a>
                                    <a className="mx-1" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                        <img src={ Twitter } alt="Fybeca"/>
                                    </a>
                                    <a className="mx-1" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <img src={ Instagram } alt="Fybeca"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue px-3 py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 d-inline-flex justify-content-md-start justify-content-center">
                                <img className="img-fluid pidele" src={ Pidele } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 text-white text-center">
                               <img className="img-fluid py-3" src={ Logo1800 } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-md-4 col-lg-2 text-white text-center">
                                <img className="img-fluid py-3" src={ Logo1010 } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-md-4 col-lg-3 text-white text-center">
                                <img className="img-fluid py-3" src={ LogoFyecaCom } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 text-white text-center">
                                <img className="img-fluid py-3" src={ LogoDescarga } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-md-6 col-lg-2 text-white text-center">
                                <img className="img-fluid py-3" src={ Logo } alt="Fybeca" />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;