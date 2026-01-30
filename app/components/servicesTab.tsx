import Image from 'next/image'
import styles from './servicesTab.module.css'

export default function ServicesTab (){
    return (
        <>
        
        <div className= {styles.container}>
            {/* <div className= {`${styles.service} ${styles.sales}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/sales.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Phone and Gadget Sales</h3>
                        <p>Carefully sourced devices you can trust</p>
                    </div>
                </div>
            </div>
            <div className= {`${styles.service} ${styles.quality}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/tested.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Quality Testing</h3>
                        <p>Every device goes through basic performance tests</p>
                    </div>
                </div>
            </div>
            <div className= {`${styles.service} ${styles.promoOffer}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/tested.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Quality Testing</h3>
                        <p>Every device goes through basic performance tests</p>
                    </div>
                </div>
            </div>
            <div className= {`${styles.service} ${styles.delivery}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/quality.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Fast Delivery</h3>
                        <p>Delivered quickly across Nigeria</p>
                    </div>
                </div>
            </div>
            <div className= {`${styles.longService} ${styles.pos}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/quality.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Fast Delivery</h3>
                        <p>Delivered quickly across Nigeria</p>
                    </div>
                </div>
            </div>
            <div className= {`${styles.longService} ${styles.speaker}`}>
                <div className= {styles.overlay}>
                    <div className= {styles.serviceInfo}>
                        <Image src = {'/quality.svg'} alt = 'icon' width = {40} height = {40}/>
                        <h3>Fast Delivery</h3>
                        <p>Delivered quickly across Nigeria</p>
                    </div>
                </div>
            </div> */}
            <div className= {styles.serviceTabs}>
                <div className= {`${styles.serviceGroup}`}>
                    <Image src={'/sales2.svg'}  alt = 'icon' width = {40} height = {40}/>
                    <h3>Phone and Gadget Sales</h3>
                    <p>We sell brand new and quality UK-used smartphones, tablets, laptops, and accessories from trusted brands like Apple, Samsung, HP, Dell, and more. All devices are tested, verified, and ready for immediate use with warranty options available.</p>
                    <button>Contact us</button>
                </div>
                <div className= {`${styles.serviceGroup}`}>
                    <Image src={'/sales2.svg'}  alt = 'icon' width = {40} height = {40}/>
                    <h3>Laptop Sales</h3>
                    <p>Get reliable laptops for work, school, gaming, or business. We offer a wide range of high-performance systems with different specifications to match your budget and needs, including SSD upgrades and pre-installed software options.</p>
                    <button>Contact us</button>
                </div>
                <div className= {`${styles.serviceGroup}`}>
                    <Image src={'/sales2.svg'}  alt = 'icon' width = {40} height = {40}/>
                    <h3>Phone Accessories</h3>
                    <p>From durable phone cases and screen protectors to chargers, power banks, AirPods, and Bluetooth speakers, we stock premium accessories that enhance and protect your devices while maintaining style and performance.</p>
                    <button>Contact us</button>
                </div>
                <div className= {`${styles.serviceGroup}`}>
                    <Image src={'/sales2.svg'}  alt = 'icon' width = {40} height = {40}/>
                    <h3>Device Repairs</h3>
                    <p>We provide fast and professional repair services for smartphones and laptops, including screen replacements, battery issues, charging port repairs, software troubleshooting, and hardware diagnostics handled by experienced technicians.</p>
                    <button>Contact us</button>
                </div>
                <div className= {`${styles.serviceGroup}`}>
                    <Image src={'/sales2.svg'}  alt = 'icon' width = {40} height = {40}/>
                    <h3>Device Trade-In</h3>
                    <p>Upgrade easily by trading in your old device for a newer model. We offer fair device evaluations and competitive prices, allowing you to switch to better gadgets without overspending.</p>
                    <button>Contact us</button>
                </div>

            </div>
        </div>
        
        </>
    )
}