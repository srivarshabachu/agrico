import React from 'react'
import Link from 'next/link'
const page = () => {
    return (
        <div><header className="flex items-center justify-between background-color: linear-gradient(white, green)" style={{
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
            <div>
                This is cart page
            </div></div>
    )
}

export default page
