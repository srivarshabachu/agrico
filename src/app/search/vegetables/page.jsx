import React from 'react'
import styles from '../styles.css'
import Link from 'next/link'
import Image from 'next/image'
import ginger from '../../assets/images/vegetables/ginger.jpeg'
import bottleguard from '../../assets/images/vegetables/bottlegourd.jpeg'
import ridgegourd from '../../assets/images/vegetables/ridgegourd.jpeg'
import brinjal from '../../assets/images/vegetables/brinjal.jpeg'
import carrot from '../../assets/images/vegetables/carrot.jpg'
import potato from '../../assets/images/vegetables/potato.jpeg'
import tomato from '../../assets/images/vegetables/tomato.jpeg'
import bittergourd from '../../assets/images/vegetables/bittergourd.jpeg'
import garlic from '../../assets/images/vegetables/garlic.jpeg'
const page = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <header className="flex items-center justify-between background-color: linear-gradient(white, green)" style={{
                backgroundImage: 'linear-gradient(to right, white, green)',
                display: 'flex',
                width: '100%',
                padding: '10px'
            }} >

                <Link className="heading main 500 font-semibold text-2xl " style={{ color: 'green', fontFamily: 'sans-serif' }} href={''}>AgriCo</Link>
                <nav className="flex gap-7">
                    <Link href='/' className="bigger"><div style={{ display: 'flex', flexDirection: 'column' }}><div>Home</div><div>(హోమ్ పేజీ)</div></div></Link>
                    <Link className="bigger" href={'/search'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>🔍Search</div><div style={{ marginLeft: '15px' }}>(శోధన)</div></div></Link>
                    <Link className="bigger" href={'/cart'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>Cart</div><div>(కార్టు)</div></div></Link>
                    <Link className="bigger" href={'/addpro'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>Add product()</div><div></div></div></Link>
                    <Link className="bigger" href={'/help'}><div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ marginLeft: '30px' }}>Help</div><div>(సహాయం పేజీ)</div></div></Link>
                    <Link className="bigger" href={''}><div style={{ display: 'flex', flexDirection: 'column' }}><div>For Farmers</div><div>(రైతులకు)</div></div></Link>
                    <Link className="bigger" href={''}><div style={{ display: 'flex', flexDirection: 'column' }}><div>For Buyers</div>(వినియోగదారులకు)<div></div></div></Link>
                </nav>
            </header>
            <div className='heading' style={{ color: '#009432' }}>Vegetables</div>
            <div className='heading' style={{ color: '#009432' }}>కూరగాయలు</div>
            <div className='' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <div className="vegecomponent" style={{ margin: '20px', width:'30%' }}>
                        {/* This div represents the background */}
                        <div className="vegebackground" style={{}}></div>
                        {/* This div represents the content */}
                        <div className="vegecontent">
                            <Image src={ginger} style={{ padding: '20px', borderRadius: '30px', width:'200px', height:'200px' }} />
                            <div className='head' style={{ padding: '0px', display: 'flex', flexDirection: 'column' }}><div>Ginger</div>అల్లం<div></div></div>
                            <div className='rating'>Rating:⭐⭐⭐⭐</div>
                            <div className='cost'>Price:₹300</div>
                        </div>
                    </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                        {/* This div represents the background */}
                        <div className="vegebackground" style={{}}></div>
                        {/* This div represents the content */}
                        <div className="vegecontent">
                            <Image src={bottleguard} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                            <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>BottleGourd</div>సొరకాయ<div></div></div>
                            <div className='rating'>Rating:⭐⭐⭐</div>
                            <div className='cost'>Price:₹80</div>
                        </div>
                    </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                        {/* This div represents the background */}
                        <div className="vegebackground" style={{}}></div>
                        {/* This div represents the content */}
                        <div className="vegecontent">
                            <Image src={ridgegourd} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                            <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>RidgeGourd</div>బిరకాయ<div></div></div>
                            <div className='rating' style={{fontSize:'smaller'}}>Rating:⭐⭐1/2⭐</div>
                            <div className='cost'>Price:₹50</div>
                        </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px',width:'30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{ }}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={brinjal} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Brinjal</div>వంకాయ<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐</div>
                        <div className='cost'>Price:₹30/500g</div>
                    </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{  }}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={carrot} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Carrot</div>కారెట్<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐⭐</div>
                        <div className='cost'>Price:₹20/500g</div>
                    </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{ }}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={potato} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Potatoes</div>బంగాళాదుంప<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐⭐</div>
                        <div className='cost'>Price:₹20/500g</div>
                    </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{  }}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={tomato} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Tomatoes</div>టమాటో<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐⭐</div>
                        <div className='cost'>Price:₹20/500g</div>
                    </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{  }}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={bittergourd} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Bitter Gourd</div>కాకరకాయ<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐⭐</div>
                        <div className='cost'>Price:₹60</div>
                    </div>
                </div>
                <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                    {/* This div represents the background */}
                    <div className="vegebackground" style={{}}></div>
                    {/* This div represents the content */}
                    <div className="vegecontent">
                        <Image src={garlic} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                        <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Garlic</div>ఎల్లిగడ్డ<div></div></div>
                        <div className='rating'>Rating:⭐⭐⭐⭐</div>
                        <div className='cost'>Price:₹60</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
