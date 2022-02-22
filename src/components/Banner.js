import React from 'react';
import Banner1 from '../assets/images/main-banner1.jpg';
import Banner2 from '../assets/images/main-banner2.jpg';
import Banner3 from '../assets/images/main-banner3.png';
import Banner4 from '../assets/images/main-banner4.png';

class Banner extends React.Component{
    render(){
        return(
            <div>

                <div id="carouselExampleControls" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={ Banner1 } className="d-block w-100" alt="Fybeca"/>
                        </div>
                        <div className="carousel-item">
                        <img src={ Banner2 } className="d-block w-100" alt="Fybeca"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div id="carouselExampleControls2" className="carousel slide d-block d-lg-none" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src={ Banner3 } className="d-block w-100" alt="Fybeca"/>
                        </div>
                        <div className="carousel-item">
                        <img src={ Banner4 } className="d-block w-100" alt="Fybeca"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        )
    }
}
export default Banner;