import React from 'react'
import styles from '../../app/styles.css'
import Link from 'next/link'
const page = () => {
    return (
        <div className=''>
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
            <div className='' style={{ color: 'black' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div className='heading' style={{ justifyContent: 'center' }}>
                        Help and support
                    </div>
                    <div className='heading' style={{ justifyContent: 'center' }}>సహాయ సేవ</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div className="comp" style={{padding:''}}>
                        The application serves as a vital bridge between farmers and buyers, fostering a direct and efficient connection in the agricultural marketplace. Upon entering the platform, users are greeted with a user-friendly interface that streamlines the onboarding process. Farmers can effortlessly list their diverse range of produce for sale, while buyers can easily navigate and search for specific products of interest. The dashboard provides an insightful overview of user activity, showcasing notifications, messages, and transaction history.

                        In terms of functionality, the application defines distinct roles for farmers and buyers, each equipped with tools tailored to their needs. Robust communication features, including a messaging system and chat capabilities, facilitate seamless interaction between users. The transaction process is elucidated, emphasizing the secure and transparent payment mechanisms integrated into the platform.

                        User engagement is further enriched through the ability to leave reviews and ratings, fostering a trustworthy and reliable community. Privacy and security measures are paramount, ensuring the safeguarding of user data and privacy settings. The platform also addresses common queries through an extensive FAQ section, aiding users in navigating potential challenges.

                        To provide continuous support, a dedicated troubleshooting section outlines common issues and their resolutions, with contact information for customer support readily available. The comprehensive help page also directs users to essential documents such as the terms of service and privacy policy, underlining the commitment to transparency. Regular updates and announcements keep users informed about the latest features and developments, fostering a dynamic and responsive platform. In conclusion, the application's help page is designed to empower users, offering a wealth of information and resources to enhance their experience and ensure a smooth interaction within the agricultural ecosystem.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
