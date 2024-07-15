import React from 'react'
import styles from './SocialMedia.module.css'


export default function SocialMedia() {
  return (
    <div className={styles.SocialMediaMain}>
        <div className={styles['SocialMediaMain-inner']}>
            <h2>Social Media</h2>
        </div>
        <hr/>
        <div className={styles['SocialMedia-below']}>
            <div className={styles['SocialMedia-below-inner']}>
                <span style={{marginTop:10}}>FACEBOOK</span>
                <input type='text' name='facebooktext' style={{width:300,marginTop:10}} />
            </div>
            <div className={styles['SocialMedia-below-inner']}>
                <span style={{marginTop:10}}>YOUTUBE</span>
                <input type='text' name='youtubetext' style={{width:300,marginTop:10}}/>
            </div>
        </div>
        <div className={styles['SocialMedia-below']}>
            <div className={styles['SocialMedia-below-inner']}>
                <span style={{marginTop:10}}>INSTAGRAM</span>
                <input type='text' name='instagramtext' style={{width:300,marginTop:10}}/>
            </div>
            <div className={styles['SocialMedia-below-inner']}>
                <span style={{marginTop:10}}>TWITTER</span>
                <input type='text' name='twittertext' style={{width:300,marginTop:10}}/>
            </div>
        </div>
        <button className={styles.SocialMediabtn}>Save</button>
    </div>
  )
}
