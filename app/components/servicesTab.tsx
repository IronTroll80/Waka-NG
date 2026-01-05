import Image from 'next/image'
import styles from './servicesTab.module.css'

export default function ServicesTab (){
    return (
        <>
        
        <div className= {styles.container}>
            <div className= {`${styles.service} ${styles.sales}`}>
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
            </div>
            
        </div>
        
        </>
    )
}