import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'


export default function Header() {
  return  (
    <>  
  


    
    <div className={styles.coverDiv}>
    <b className={styles.stopLossAndorTakeProfitC}>
        Stop loss and/or take profit calculator for margin
      </b>
      <Image className={styles.coverBgIcon} height={10} width={20} alt="" src="/cover-bg.svg" />
    </div>

    <div className={styles.navBarDiv}>
      <div className={styles.navLinksDiv}>
        <div className={styles.groupDiv}>
          <div className={styles.marketDiv}>Market</div>
          <div className={styles.lineDiv} />
        </div>

        <div className={styles.groupDiv1}>
          <div className={styles.marketDiv}>About Us</div>
          <div className={styles.lineDiv} />
        </div>

        <div className={styles.groupDiv2}>
          <div className={styles.lineDiv2} />
          <div className={styles.marketDiv}>Trade</div>
        </div>
      </div>

      <div className={styles.logoDiv}>A-PSYCK</div>

    </div>

    <div className={styles.tradeSmartWithOurStopLoss}>
      Trade smart with our stop loss or take profit calculator margin which
      helps appromiate your losses and gains
    </div>


    


    </>
) }


    
