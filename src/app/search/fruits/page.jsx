import React from 'react'
import styles from '../styles.css'
import Link from 'next/link'
import Image from 'next/image'
import apple from '../../assets/images/fruits/apple.jpeg'
import strawberry from '../../assets/images/fruits/strawberry.jpeg'
import papaya from '../../assets/images/fruits/papaya.jpeg'
import grapes from '../../assets/images/fruits/greengrapes.jpeg'
import blackgrapes from '../../assets/images/fruits/blackgrapes.jpeg'
import banana from '../../assets/images/fruits/banana.jpeg'
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
          <div className='heading' style={{ color: '#009432' }}>Fruits</div>
          <div className='heading' style={{ color: '#009432' }}>పండ్లు</div>
          <div className='' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{  }}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={apple} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Apple</div>యాపిల్<div></div></div>
                      <div className='rating'>Rating:⭐⭐⭐⭐⭐</div>
                      <div className='cost'>Price:₹130/kg</div>
                  </div>
              </div>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{  }}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={strawberry} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Strawberry</div>స్ట్రాబెర్రీలు<div></div></div>
                      <div className='rating'>Rating:⭐⭐</div>
                      <div className='cost'>Price:₹410/kg</div>
                  </div>
              </div>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{  }}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={papaya} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Papaya</div>బొప్పాయి<div></div></div>
                      <div className='rating'>Rating:⭐⭐⭐</div>
                      <div className='cost'>Price:₹80/kg</div>
                  </div>
              </div>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{}}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={grapes} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Grapes</div>ద్రాక్ష<div></div></div>
                      <div className='rating'>Rating:⭐⭐⭐</div>
                      <div className='cost'>Price:₹140/kg</div>
                  </div>
              </div>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{  }}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={blackgrapes} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>BlackGrapes</div>నల్ల ద్రాక్ష<div></div></div>
                      <div className='rating'>Rating:⭐⭐⭐⭐</div>
                      <div className='cost'>Price:₹280/kg</div>
                  </div>
              </div>
              <div className="vegecomponent" style={{ margin: '20px', width: '30%' }}>
                  {/* This div represents the background */}
                  <div className="vegebackground" style={{  }}></div>
                  {/* This div represents the content */}
                  <div className="vegecontent">
                      <Image src={banana} style={{ padding: '20px', borderRadius: '30px', width: '200px', height: '200px' }} />
                      <div className='head' style={{ padding: '10px', display: 'flex', flexDirection: 'column' }}><div>Banana</div>అరటిపండు<div></div></div>
                      <div className='rating'>Rating:⭐⭐⭐</div>
                      <div className='cost'>Price:₹45/12pc</div>
                  </div>
              </div>

          </div>
      </div>
  )
}

export default page
