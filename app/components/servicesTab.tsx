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
                <div className={styles.serviceGroup}>
                    <Image src={'/sales2.svg'} alt='Device Sales' width={40} height={40}/>
                    <h3>Phone & Gadget Sales</h3>
                    <p>
                        We sell brand new and quality UK-used smartphones, tablets, laptops, and accessories 
                        from trusted brands like Apple, Samsung, HP, and Dell. All devices are tested, 
                        verified, and available with warranty options.
                    </p>
                    <button>Contact Us</button>
                </div>
                <div className={styles.serviceGroup}>
                    <Image src={'/sales2.svg'} alt='Corporate Supply' width={40} height={40}/>
                    <h3>Bulk & Corporate Supply</h3>
                    <p>
                        We supply gadgets in bulk to schools, offices, startups, and organizations 
                        at competitive wholesale prices. Custom quotations and flexible payment 
                        plans available for large orders.
                    </p>
                    <button>Contact Us</button>
                </div>
                <div className={styles.serviceGroup}>
                <Image src={'/sales2.svg'} alt='Delivery Service' width={40} height={40}/>
                <h3>Nationwide Delivery</h3>
                <p>
                    We deliver across Nigeria with secure packaging and fast dispatch. 
                    Same-day delivery available within Lagos and express shipping nationwide.
                </p>
                <button>Contact Us</button>
                </div>
            </div>
        </div>
        
        </>
    )
}