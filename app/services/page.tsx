'use client'

import Footer from '../components/footer'
import Header from '../components/header'
import HeroMarket from '../components/heroMarket'
import TopPromo from '../components/topPromo'
import styles from './financialServices.module.css'

export default function FinancialServices() {

  const whatsappNumber = "2348133896617"
  const message = encodeURIComponent(
    "Hello Waka NG, I’m interested in your POS services."
  )

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`

  return (
    <>
        <TopPromo/>
        <Header/>
        <HeroMarket page='Financial Services'/>
        <div className={styles.container}>
        <section className={styles.hero}>
            <h1>Power Your Business with Reliable POS Services</h1>
            <p>
            Offer cash withdrawals, deposits, airtime & data services — or launch
            your own POS business in just one day.
            </p>

            <a href={whatsappLink} target="_blank" className={styles.primaryBtn}>
            Start on WhatsApp
            </a>
        </section>

        <section className={styles.services}>
            <h2>Our POS Services</h2>

            <div className={styles.cardGrid}>
            <div className={styles.card}>
                <h3>Cash Withdrawal to POS Agents</h3>
                <p>
                    Provide POS Agents with quick and secure cash withdrawals anytime.
                </p>
            </div>

            <div className={styles.card}>
                <h3>Cash Deposits & Withdrawals</h3>
                <p>
                    We Accept Cash Deposits and Cash Withdrawals.
                </p>
            </div>

            <div className={styles.card}>
                <h3>Airtime & Data</h3>
                <p>
                    We Sell airtime and data for all major networks.
                </p>
            </div>
            </div>
        </section>

        <section className={styles.setup}>
            <h2>POS Service Setup & Business Guide</h2>

            <div className={styles.setupGrid}>
            <div className={styles.setupCard}>
                <h3>Launch a POS Service in One Day</h3>
                <ul>
                <li>POS Machine</li>
                <li>Setup & Configuration</li>
                <li>SIM Registration</li>
                <li>Ongoing Support</li>
                </ul>
            </div>

            <div className={styles.setupCard}>
                <h3>Improve Your Current POS Business</h3>
                <ul>
                <li>Upgrade Your Device</li>
                <li>Increase Transaction Efficiency</li>
                <li>Reduce Downtime</li>
                <li>Improve Daily Profit</li>
                </ul>
            </div>
            </div>

            <a href={whatsappLink} target="_blank" className={styles.primaryBtn}>
            Chat With Us on WhatsApp
            </a>
        </section>

        <section className={styles.cta}>
            <h2>Ready to Start Earning?</h2>
            <p>
            Launch or upgrade your POS business today with <b>Waka NG</b>.
            </p>

            <a href={whatsappLink} target="_blank" className={styles.secondaryBtn}>
            Get Started Now
            </a>
        </section>

        </div>
        <Footer/>
    </>
  )
}