import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
        <footer className={styles.footContainer}>
            <h1>Contact us.</h1>
            <h6>We are looking forward to hearing from you. Feel free to contact us if you have any questions!</h6>
            <button className={styles.contactButton}>Contact Us</button>
      </footer>
    </>
  )
}

export default Footer