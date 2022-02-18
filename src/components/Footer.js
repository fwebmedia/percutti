import React from 'react';
import './footer.css';
import Logo1800 from '../assets/images/1800.png'
import Logo1010 from '../assets/images/1010.png'
import LogoFyecaCom from '../assets/images/fybecacom.png'
import LogoDescarga from '../assets/images/descarga.png'
import Logo from '../assets/images/logo2.png';

const anio = new Date().getFullYear();

class Footer extends React.Component{
    render(){
        return(

            <footer>
                <div className="bg-blue px-3 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-white text-center">
                                <p>
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
                                <div href="#" className="bg-light rounded-circle d-inline py-2 px-2 mx-1">
                                    H
                                </div>
                                <div href="#" className="bg-dark rounded-circle d-inline py-2 px-2 mx-1">
                                </div>
                                <div href="#" className="bg-dark rounded-circle d-inline py-2 px-2 mx-1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-blue px-3 py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-lg-3 text-white text-center">
                               <img className="img-fluid py-3" src={ Logo1800 } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-lg-2 text-white text-center">
                                <img className="img-fluid py-3" src={ Logo1010 } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-lg-3 text-white text-center">
                                <img className="img-fluid py-3" src={ LogoFyecaCom } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-lg-2 text-white text-center">
                                <img className="img-fluid py-3" src={ LogoDescarga } alt="Fybeca" />
                            </div>
                            <div className="col-12 col-lg-2 text-white text-center">
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