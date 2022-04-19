import React from 'react'
import styles from  '../Footer/Footer.module.css'
import Image from 'next/image'


export default function index() {


  return (
    

    <>
   
    
    <div className={styles.groupDiv32}>
      <div className={styles.groupDiv33}>
        <b className={styles.howToCalculateStopLossAnd}>
          How to calculate stop loss and/or take profit level and pip
          value.
        </b>
        
        <Image className={styles.vectorIcon1} height={29} width={32}  alt="" src="/vector-1.svg" />
      </div>
      <div className={styles.groupDiv34}>
        <div className={styles.theStopLossAndorTakeProf}>
          The stop loss and/or take profit level and pip value when
          buying a contract on Deriv MT5 (DMT5) is calculated based on
          the formula:{" "}
        </div>
        <div className={styles.theStopLossAndorTakeProf1}>
          <span className={styles.theStopLossContainer}>
            <p className={styles.theStopLoss}>
              The stop loss and/or take profit level helps you to manage
              your risk when you are buying a contract.
            </p>
            <p className={styles.theStopLoss}></p>
            <p className={styles.theStopLoss}>
              For financial accounts, the stop loss and/or take profit
              pip value is in the quote currency for forex pairs.
            </p>
            <p className={styles.theStopLoss}></p>
            <p className={styles.forSyntheticAccounts}>
              For synthetic accounts, the stop loss and/or take profit
              pip value is in USD.
            </p>
          </span>
        </div>
        <div className={styles.groupDiv35}>
          <div
            className={styles.stopLossAndorTakeProfitL}
          >{`Stop loss and/or take profit level = asset price + {stop loss OR take profit amount ÷ (volume × contract size)}`}</div>
          <div className={styles.stopLossAndorTakeProfitP}>
            Stop loss and/or take profit pip value = |(stop loss OR take
            profit level - asset price)| ÷ point value
          </div>
        </div>
      </div>
    </div>
    
    <div className={styles.groupDiv36}>
        <div className={styles.groupDiv37}>
          <b className={styles.wouldYouLikeToGetNotified}>
            Would you like to get notified when your asset goes above or
            below your target price?
          </b>
          <Image className={styles.vectorIcon2} height={29} width={32} alt="" src="/vector-1.svg" />
        </div>
        <div
          className={styles.frameDiv3}
          // onClick={onFrameContainer2Click}
        >
          <div className={styles.calculateDiv}>Set Price Alert</div>
        </div>
      </div>
      
 
      </>




  )
}
