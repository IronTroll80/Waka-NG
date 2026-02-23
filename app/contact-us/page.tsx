'use client'

import { useState } from 'react'
import styles from './contactUs.module.css'
import { MdSmartphone } from 'react-icons/md'
import { BiEnvelope, BiLocationPlus, BiLogoWhatsapp } from 'react-icons/bi'
import Header from '../components/header'
import HeroMarket from '../components/heroMarket'
import Footer from '../components/footer'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <>
        <Header/>
        <HeroMarket page='Contact Us'/>
        <div className={styles.container}>
        <div className={styles.content}>

            <div className={styles.infoSection}>

            <div className={styles.card}>
                <MdSmartphone className={styles.icon} />
                <h4>Call Us</h4>
                <p>+234 813 389 6617</p>
                <span>Mon - Sat | 9:00am - 6:00pm</span>
            </div>

            <div className={styles.card}>
                <BiEnvelope className={styles.icon} />
                <h4>Email Us</h4>
                <p>support@waka.ng</p>
                <span>We reply within 24 hours</span>
            </div>

            <div className={styles.card}>
                <BiLogoWhatsapp className={styles.icon} />
                <h4>WhatsApp</h4>
                <p>+234 813 389 6617</p>
                <span>Fastest way to reach us</span>
            </div>

            <div className={styles.card}>
                <BiLocationPlus className={styles.icon} />
                <h4>Our Location</h4>
                <p>Lagos, Nigeria</p>
                <span>Visit our physical store</span>
            </div>

            </div>

            {/* RIGHT SIDE - CONTACT FORM */}
            <div className={styles.formSection}>
            <h3>Send Us a Message</h3>

            <form onSubmit={handleSubmit}>

                <div className={styles.inputGroup}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className={styles.inputGroup}>
                <label>Email Address</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className={styles.inputGroup}>
                <label>Subject</label>
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
                </div>

                <div className={styles.inputGroup}>
                <label>Message</label>
                <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                </div>

                <button type="submit" className={styles.submitBtn}>
                Send Message
                </button>

            </form>
            </div>

        </div>

        </div>
        <Footer/>
    </>
  )
}