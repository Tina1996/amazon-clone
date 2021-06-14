import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
           <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id={1222324} 
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg" 
                        rating={5}
                    />
                    <Product
                        id={34335}
                        title="OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage)| 5000 mAh | 18W Fast Charge | 90Hz Super Amoled Display" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71R3hxVbj8S._SL1500_.jpg" 
                        rating={4}
                    />
                </div>  

                <div className="home__row">
                    <Product 
                        id={343333353}
                        title="Lenovo HX03W Cardio Plus Smart Band (Black)" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61SqIpIckPL._SL1500_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id={343351}
                        title="Lenovo HX03W Cardio Plus Smart Band (Black)" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61SqIpIckPL._SL1500_.jpg" 
                        rating={4}
                    />
                    <Product 
                        id={343253}
                        title="Lenovo HX03W Cardio Plus Smart Band (Black)" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61SqIpIckPL._SL1500_.jpg" 
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id={3433335}
                        title="OPPO A74 5G (Fluid Black, 6GB RAM, 128GB Storage)| 5000 mAh | 18W Fast Charge | 90Hz Super Amoled Display" 
                        price={29.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71R3hxVbj8S._SL1500_.jpg" 
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
