import Image from 'next/image'
import styles from './productDetails.module.css'

export default function About (){
    return (
        <>
        
        <div className= {styles.container}>
            <div className= {styles.introduction}>
                <div>
                    <span>Introduction</span>
                    <h3>About Waka NG</h3>
                    <p> Lorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing 
                        elitLorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing elitLorem 
                        Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing 
                        elitLorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing elit
                    </p>
                    <div className= {styles.imageWrapper}>
                        <Image src = {'/logo_blue.svg'} alt = 'logo_blue' fill /> 
                    </div>
                </div>
            </div>
            <div className= {styles.whyus}>
                <h3>Why Choose Us</h3>
                <p>     
                        Lorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing 
                        elitLorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet con
                </p>
                <div className= {styles.imageSection}>
                    <div className= {styles.imageSectionWrapper}>
                        <Image src={'/hero-background.jpg'} alt='whyus' fill/>
                    </div>
                    <div className= {styles.imageSectionWrapper}>
                        <Image src={'/hero-background.jpg'} alt='whyus' fill/>
                    </div>
                    <div className= {styles.imageSectionWrapper}>
                        <Image src={'/hero-background.jpg'} alt='whyus' fill/>
                    </div>
                    <div className= {styles.imageSectionWrapper}>
                        <Image src={'/hero-background.jpg'} alt='whyus' fill/>
                    </div>
                </div>
            </div>
            <div className= {styles.whyus}>
                <h3>What We Sell</h3>
                <p>     
                        Lorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet consecteur adipiscing 
                        elitLorem Ipsum dolor sit amet consecteur adipiscing elitLorem Ipsum dolor sit amet con
                </p>
            </div>
        </div>

        </>
    )
}