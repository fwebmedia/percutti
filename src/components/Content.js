import React from 'react';
import './content.css';
import Pelador from '../assets/images/pelador.png';
import Pelador1 from '../assets/images/pelador1.png';
import Multiusos from '../assets/images/multiusos.png';
import Multiusos1 from '../assets/images/multiusos1.png';
import Chef from '../assets/images/chef.png';
import Chef1 from '../assets/images/chef1.png';
import Santoku from '../assets/images/santoku.png';
import Santoku1 from '../assets/images/santoku1.png';
import Panadero from '../assets/images/panadero.png';
import Panadero1 from '../assets/images/panadero1.png';
import Tacoma from '../assets/images/tacoma.png';
import Tacoma1 from '../assets/images/tacoma1.png';
import Tabla from '../assets/images/tabla.png';
import Tabla1 from '../assets/images/tabla1.png';
import Afilador from '../assets/images/afilador.png';
import Afilador1 from '../assets/images/afilador1.png';

function Content (){
            return (
                <div className="texto-general">

                    {/* FILA 1 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse1 flex-lg-row text-center align-items-center g-0">
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Pelador } alt="Fybeca"/>
                            </div>
                            <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    PELADOR
                                </h2>
                                <img className="img-fluid" src={ Pelador1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                    La utilidad de este cuchillo es de pelar, tornear y limpiar productos.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 250</span> VitalPuntos<br/>
                                    + $5.99
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* FILA 2 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse flex-lg-row text-center align-items-center g-0">
                        <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    MULTIUSOS
                                </h2>
                                <img className="img-fluid" src={ Multiusos1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Cuchillo para pelar o hacer cortes básicos, se puede usar para cualquier tipo de alimento.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 250</span> VitalPuntos<br/>
                                    + $6.99
                                </h3>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Multiusos } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>
                    {/* FILA 3 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse1 flex-lg-row text-center align-items-center g-0">
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Chef } alt="Fybeca"/>
                            </div>
                            <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    CHEF
                                </h2>
                                <img className="img-fluid" src={ Chef1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                    El cuchillo de chef es utilizado para cortar, picar o rebanar todo tipo de carnes, vegetales, aves y pescados.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 250</span> VitalPuntos<br/>
                                    + $7.99
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* FILA 4 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse flex-lg-row text-center align-items-center g-0">
                        <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    SANTOKU
                                </h2>
                                <img className="img-fluid" src={ Santoku1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Cuchillo para carne, pescado y vegetales. Diseño japonés de hoja alveolada que ayuda a que los alimentos no queden adheridos.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 250</span> VitalPuntos<br/>
                                    + $7.99
                                </h3>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Santoku } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>
                    {/* FILA 5 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse1 flex-lg-row text-center align-items-center g-0">
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Panadero } alt="Fybeca"/>
                            </div>
                            <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    PANADERO
                                </h2>
                                <img className="img-fluid" src={ Panadero1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Cuchillo dentado diseñado para un corte ágil y preciso, sin afectar al pan.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 250</span> VitalPuntos<br/>
                                    + $6.99
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* FILA 6 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse flex-lg-row text-center align-items-center g-0">
                        <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    TACOMA
                                </h2>
                                <img className="img-fluid" src={ Tacoma1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Ideal para guardar tus cuchillos de forma segura y para que siempre los tengas a mano.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 300</span> VitalPuntos<br/>
                                    + $9.99
                                </h3>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Tacoma } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>
                    {/* FILA 7 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse1 flex-lg-row text-center align-items-center g-0">
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Tabla } alt="Fybeca"/>
                            </div>
                            <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    TABLA
                                </h2>
                                <img className="img-fluid" src={ Tabla1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Esta tabla de cortar con formato alargado es útil para realizar los cortes de carnes, vegetales y frutas.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 300</span> VitalPuntos<br/>
                                    + $9.99
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* FILA 8 */}
                    <div className="container-fluid bg-light px-0">
                        <div className="row d-flex flex-column-reverse flex-lg-row text-center align-items-center g-0">
                        <div className="col-12 col-lg-6 py-5 px-4">
                                <h2 className="titular mb-4">
                                    AFILADOR
                                </h2>
                                <img className="img-fluid" src={ Afilador1 } alt="Fybeca"/>
                                <p className="descripcion mb-4">
                                Mantén tus cuchillos en perfecto estado con este afilador, una herramienta muy útil con la que conseguirás un uso más seguro de los cuchillos, menos esfuerzo al utilizarlos y cortes mucho más precisos.
                                </p>
                                <h3 className="premios">
                                    25 Stickers<br/>
                                    <span className="puntos-verde">+ 300</span> VitalPuntos<br/>
                                    + $9.99
                                </h3>
                            </div>
                            <div className="col-12 col-lg-6">
                                <img className="img-fluid" src={ Afilador } alt="Fybeca"/>
                            </div>
                        </div>
                    </div>

                </div>
            );
}
export default Content;