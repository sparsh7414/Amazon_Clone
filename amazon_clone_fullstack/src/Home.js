import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div className="home__row">
                    <Product 
                        id="41244415"
                        title='PHILIPS BHS738/00 Kerashine Titanium Wide Plate Straightener With SilkProtect Technology, Teal'
                        price={2556}
                        image="https://images-eu.ssl-images-amazon.com/images/I/61ld6tdVq-S._AC_UL160_SR160,160_.jpg"
                        rating={4}
                    />
                    <Product
                        id="41244416"
                        title='BBLUNT Hot Shot - Heat Protection Hair Mist - 150ml, No Sulphate, No Paraben, No SLS, with Grapeseed Oil & Provitamin B5'
                        price={440}
                        image="https://m.media-amazon.com/images/I/51uuyrwmjGS._SL1500_.jpg"
                        rating={4}
                    /> 
                </div>
                <div className="home__row">
                    <Product
                        id="41244417"
                        title='Sony WI-XB400 Wireless Extra Bass in-Ear Headphones with 15 hrs Battery, Quick Charge'
                        price={2990}
                        image="https://m.media-amazon.com/images/I/71+GXwLe23L._AC_UL320_.jpg"
                        rating={3}
                    /> 
                    <Product
                        id="41244418"
                        title='Philips Audio SPA8140B/94 50W 4.1 Channel Multimedia Speaker System, Black'
                        price={3649}
                        image="https://m.media-amazon.com/images/I/81i77xf1XLS._AC_UL320_.jpg"
                        rating={4}
                    /> 
                    <Product
                        id="41244419"
                        title='Microsoft Surface Pro 7 PUV-00028 12.3" (31.24 cms) Touchscreen 2-in-1 Laptop'
                        price={89990}
                        image="https://m.media-amazon.com/images/I/51aLp3YL8lL._SL1200_.jpg"
                        rating={4}
                    /> 
                </div>
                <div className="home__row">
                    <Product
                        id="41244420"
                         title='Samsung LC49RG90SSUXEN 49" Curved LED Gaming Monitor - Dual WQHD 5120 x 1440, 120Hz, HDMI, Displayport, USB'
                         price={1094}
                         image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL1500_.jpg"
                         rating={4}
                    /> 
                </div>
                <div className="home__row">
                    <Product
                        id="41244421"
                         title='Redmi 9A (Sea Blue 2GB RAM 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery'
                         price={7299}
                         image="https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UL320_.jpg"
                         rating={4}
                    /> 
                    <Product
                        id="41244422"
                         title='Tecno Spark 7T(Jewel Blue, 4GB RAM, 64GB Storage) 6000 mAh Battery| 48 MP AI Dual Rear Camera'
                         price={8599}
                         image="https://m.media-amazon.com/images/I/81aWyRY67SS._AC_UL320_.jpg"
                         rating={4}
                    /> 
                    <Product
                        id="41244423"
                         title='PTron Bassbuds Duo Bluetooth Truly Wireless in Ear Earbuds with Mic (Black)'
                         price={799}
                         image="https://m.media-amazon.com/images/I/519uMzMXJVL._AC_UL320_.jpg"
                         rating={4}
                    /> 
                    <Product
                        id="41244424"
                         title='Sony Digital Vlog Camera ZV-1 Only (Compact, Video Eye AF, Flip Screen – Black'
                         price={59999}
                         image="https://m.media-amazon.com/images/I/71V-xgyy+3L._SL1500_.jpg"
                         rating={4}
                    /> 
                    
                </div>
            </div>
        </div>
    )
}

export default Home
