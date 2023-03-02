import React from 'react'
import { InstagramEmbed } from 'react-social-media-embed';
import "./Streetwear.css"

function Streetwear() {
    return (
        <div className='base' style={{overflow:'auto', height: 'inherit', display: 'block'}}>
            <div className='title'>
                <h1>Streetwear</h1>
                <p>
                    This year, street wear influencers have been pushing the boundries of fashion with their unique and creative styles.
                    From bold and eye-catching logos to sleek silhouettes, these trendsetters are taking street style to the next level. 
                    Here are some influencers that are catching the eye this year:
                </p>
            </div>
            <div className='influencer'>
                <h2>1. Jadon Grundy</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CclXTsEPUtE/" width="80%" height={880}/>
                </div>
            </div>
            <div className='influencer'>
                <h2>2. Ida Broen</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/ChfNcKHollB/" width="80%" height={880}/>
                </div>
            </div>
            <div className='influencer'>
                <h2>3. Kyron Warrick</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/Cj1AFGGvFNh/" width="80%" height={880}/>
                </div>
            </div>
            <div className='influencer'>
                <h2>4. Eva Apio</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CnnRshEK7RG/" width="80%" height={880}/>
                </div>
            </div>
            <div className='influencer'>
                <h2>5. Yaya Toure</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CoVEBMAr3hr/" width="80%" height={880}/>
                </div>
            </div>
            <div className='influencer'>
                <h2>6. Teyana Taylor</h2>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <InstagramEmbed url="https://www.instagram.com/p/CfQCyM8lkgW/" width="80%" height={880}/>
                </div>
            </div>
        </div>
    );
}

export default Streetwear