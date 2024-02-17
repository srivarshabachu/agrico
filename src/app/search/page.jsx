import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import styles from '../../app/styles.css'
import grains from '../assets/images/search icons/grains.jpg'
import dairy from '../assets/images/search icons/dairy.jpg'
import herbs from '../assets/images/search icons/herbs.jpg'
import seafood from '../assets/images/search icons/seafood.jpg'
import fruits from '../assets/images/search icons/fruits.jpg'
import vegetable from '../assets/images/search icons/vegetables.jpg'
import seeds from '../assets/images/search icons/seeds.jpg'
import spices from '../assets/images/search icons/spices.jpg'
import legumes from '../assets/images/search icons/legumes.jpg'
const page = () => {
    return (
        <div>
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
            <div className='' style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={vegetable} style={{ padding: '0px', borderRadius: '20px' }} />
                        <Link href={'/search/vegetables'} className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Vegetables</div>కూరగాయలు→<div></div></Link>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={fruits} style={{ padding: '10px', borderRadius: '20px' }} />
                        <Link href={'/search/fruits'} className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Fruits</div>పండ్లు→<div></div></Link>
                    </div>
                </div>

                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={grains} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Grains</div>ధాన్యాలు→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={dairy} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Dairy products</div>పాల పదార్థాలు→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={herbs} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Leaf Vegetables</div>ఆకుకూరలు→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={seafood} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Sea Food</div>మత్స్యాహారం→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={seeds} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Seeds</div>విత్తనాలు→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground"></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={spices} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Spices</div>సుగంధ ద్రవ్యాలు→<div></div></div>
                    </div>
                </div>
                <div className="searchcomponent" style={{ margin: '20px', flex: '1 0 calc(33.33% - 10px)' }}>
                    {/* This div represents the background */}
                    <div className="searchbackground" style={{ width: '50%' }}></div>
                    {/* This div represents the content */}
                    <div className="searchcontent">
                        <Image src={legumes} style={{ padding: '10px', borderRadius: '20px' }} />
                        <div className='heading' style={{ padding: '30px', display: 'flex', flexDirection: 'column' }}><div>Legumes</div>పప్పులు→<div></div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
