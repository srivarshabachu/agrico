import Image from "next/image";
import Link from "next/link";
import grains from "./assets/grains.png"
import styles from './styles.css'
import grainbag from "./assets/grainbag.png"
import p1 from './assets/p1.png'
import rama from './assets/rama.jpg'
import raju from './assets/raju.png'
export default function Home() {
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
          <Link href='/' className="bigger"><div style={{ display: 'flex', flexDirection:'column'}}><div>Home</div><div>(హోమ్ పేజీ)</div></div></Link>
          <Link className="bigger" href={'/search'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>🔍Search</div><div style={{marginLeft:'15px'}}>(శోధన)</div></div></Link>
          <Link className="bigger" href={'/cart'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>Cart</div><div>(కార్టు)</div></div></Link>
          <Link className="bigger" href={'/addpro'}><div style={{ display: 'flex', flexDirection: 'column' }}><div>Add product()</div><div></div></div></Link>
          <Link className="bigger" href={'/help'}><div style={{ display: 'flex', flexDirection: 'column' }}><div style={{ marginLeft: '30px' }}>Help</div><div>(సహాయం పేజీ)</div></div></Link>
          <Link className="bigger" href={''}><div style={{ display: 'flex', flexDirection: 'column' }}><div>For Farmers</div><div>(రైతులకు)</div></div></Link>
          <Link className="bigger" href={''}><div style={{ display: 'flex', flexDirection: 'column' }}><div>For Buyers</div>(వినియోగదారులకు)<div></div></div></Link>
        </nav>
      </header>
      <div className="homecontent">
        <Image className="imgc" style={{ opacity: '0.4' }} src={grains} fill={true} />
        <div className="bodymatter">
          <div className="leftbox">
            <div className="leftboxtext" style={{ margin: '20px' }}>
              Gone are the days of intermediaries dictating prices
              <br />
              <>TRADE IS MADE EASY, FAST AND TRANSPARENT!</><br />
              <>"Harvesting smiles: where farmer-friendly apps meet buyer needs."</>
            </div>
          </div>
          <div className="rightbox">
            <Image src={grainbag} />
          </div>
        </div>
        <div className="bottommatter" style={{ display: 'flex', flexDirection: 'colomn' }}>
          <div style={{ color: 'black', fontSize: '40px', paddingTop: '30px' }} className="heading">Success Stories</div>
          <div style={{ display: 'flex', flexDirection: 'colomn' }}>
            <div className="comp">

              <div className="component">
                {/* This div represents the background */}
                <div className="background"></div>
                {/* This div represents the content */}
                <div className="content">
                  <Image src={raju} style={{ padding: '10px' }} />
                  <div className="heading">Raju</div>
                  <div>Meet our Farmer of the Year, a true maestro of cultivation!  This year's triumph is nothing short of extraordinary – an astonishing 100 tons of tomatoes, each one bursting with flavor and exceptional quality. From field to feast, witness the artistry of agriculture reaching new heights. </div>
                </div>
              </div>
            </div>
            <div className="comp">
              <div className="component">
                {/* This div represents the background */}
                <div className="background"></div>
                {/* This div represents the content */}
                <div className="content">
                  <Image src={p1} style={{ padding: '10px' }} />
                  <div className="heading">Srinivas</div>
                  <div>Behold the harvest masterpiece from our Farmer of the Year! This year's bounty showcases an abundance of the freshest, most vibrant vegetables, a testament to their dedication to quality agriculture. From crisp greens to plump tomatoes, every crop embodies excellence in both quantity and quality.</div>
                </div>
              </div>
            </div>
            <div className="comp">
              <div className="component">
                {/* This div represents the background */}
                <div className="background"></div>
                {/* This div represents the content */}
                <div className="content">
                  <Image src={rama} style={{ padding: '10px' }} />
                  <div className="heading">Rama</div>
                  <div>Celebrating the resilience and strength of women in agriculture!From tending to the fields with unwavering determination to cultivating success, these women farmers are the heart of our agricultural community. Their dedication and skill shine through in every harvest, proving that the future of farming is both inclusive and empowering.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
