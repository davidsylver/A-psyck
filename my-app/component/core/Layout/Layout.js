import React from 'react'
import Headers from '../Header/Header'
import Footer from '../Footer'
import Mobile from '../../core/navigation/mobileSideMenu/index' 
import styles from './style'
import { useContext, useCallback } from 'react'
import { MenuContext } from '~/context/menu'
import CategoryCard from '../../common/card/trading/trading';




function Layout({Children}) {

  const { isOpen, closeMenu, toggleMenu, firstMenuItemRef } = useContext(MenuContext)

  const preventTabbing = useCallback(
      e => {
          if (isOpen) {
              e.persist()
              if (e.keyCode === 9) {
                  e.preventDefault()
                  firstMenuItemRef.focus()
              }
          }
      },
      [firstMenuItemRef, isOpen]
  )
  return (
    <>
          <div id="outer-container" sx={styles.container}>
          <Headers/>
     <CategoryCard/>
          <main className={styles.main}> {Children}</main>
          <Footer/>
          </div>
    

    </>
  )
}

export default Layout