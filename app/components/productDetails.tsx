import Image from 'next/image'
import styles from './productDetails.module.css'
import { BsCart } from 'react-icons/bs'
import TitleArea from './titleArea'
import HomeProductGroup from './homeProductGroup'

export default function ProductDetails (){
    return (
        <>
        
        <div className= {styles.container}>
            <div className= {styles.topBody}>
                <div className= {styles.images}>
                    <div className= {styles.mainImage}>
                        <Image src = {'/alienware4.webp'} alt='product' fill/>
                    </div>
                    <div className= {styles.imageGroup}>
                        <div className= {styles.subImage}>
                            <Image src = {'/alienware3.jpg'} alt='product' fill/>
                        </div>
                        <div className= {styles.subImage}>
                            <Image src = {'/alienware2.avif'} alt='product' fill/>
                        </div>
                        <div className= {styles.subImage}>
                            <Image src = {'/alienware4.webp'} alt='product' fill/>
                        </div>
                        <div className= {styles.subImage}>
                            <Image src = {'/alienware.jpg'} alt='product' fill/>
                        </div>
                    </div>
                </div>
                <div className= {styles.body}>
                    <p className= {styles.category}> Laptops </p>
                        <p className= {styles.title}> Alienware 17 R2</p>
                        <p className= {styles.price}> N1,560,000.00</p>
                    <p className= {styles.desc}>
                        Lorem Ipsum Dolor sit amet consecteur adipiscing elitLorem Ipsum Dolor 
                        sit amet consecteur adipiscing elitLorem Ipsum Dolor sit amet consecteur adipiscing elit
                    </p><br/>
                    <p className= {styles.misc}>
                        SKU : 22 <br/>
                        Category : Gaming Laptops <br/>
                        Tags : Gaming, Alienware, Dell, High-end
                    </p>
                    <div className= {styles.buttonGroup}>
                        <button className= {styles.toCart}>Add To Cart <BsCart/></button>
                        <div className= {styles.whatsapp}><Image src= {'/whatsapp.svg'} alt='Whatsapp' fill/></div>
                    </div>
                    <hr className= {styles.divider}/>
                    <p className= {styles.specs}>Specs</p>
                    <div className= {styles.specifications}>
                        <Image  src = {'/hp.svg'} alt = 'hp' width = {30} height = {30}/>
                        <Image  src = {'/i7.svg'} alt = 'i7' width = {30} height = {30}/>
                    </div>
                </div>
            </div>
            <div className= {styles.bottomBody}>
                    <p className= {styles.fullSpecs}>Full Specifications</p>
                    <div className= {styles.fullSpecsGroup}>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/processor.svg'} alt='processor' width={20} height={20}/>
                                <p>Processor</p>
                            </div>
                            <p className= {styles.specName}>Intel Core i7-6700U </p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/storage.svg'} alt='storage' width={20} height={20}/>
                                <p>Storage</p>
                            </div>
                            <p className= {styles.specName}>1TB HDD</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/graphicsCard.svg'} alt='graphicsCard' width={20} height={20}/>
                                <p>Graphics Card</p>
                            </div>
                            <p className= {styles.specName}>NVIDIA GTX 980M</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/weight.svg'} alt='weight' width={20} height={20}/>
                                <p>Weight</p>
                            </div>
                            <p className= {styles.specName}>3.2KG</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/ram.svg'} alt='ram' width={20} height={20}/>
                                <p>RAM</p>
                            </div>
                            <p className= {styles.specName}>16GB DDR3</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/screenSize.svg'} alt='screen size' width={20} height={20}/>
                                <p>Screen Size</p>
                            </div>
                            <p className= {styles.specName}>17'3 inches</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/condition.svg'} alt='condition' width={20} height={20}/>
                                <p>Condition</p>
                            </div>
                            <p className= {styles.specName}>UK Used</p>
                        </div>
                        <div className= {styles.item}>
                            <div>
                                <Image src={'/resolution.svg'} alt='resolution' width={20} height={20}/>
                                <p>Resolution</p>
                            </div>
                            <p className= {styles.specName}>1920 x 1080 60HZ</p>
                        </div>
                        
                    </div>
                    <p className= {styles.fullSpecs}>Other Notes</p><br/>
                    <p className= {styles.notes}>
                        Lorem Ipsum Dolor sit amet consecteur adipiscing elitLorem Ipsum Dolor 
                        sit amet consecteur adipiscing elitLorem Ipsum Dolor sit amet consecteur adipiscing elit
                    </p>
            </div>
        </div>

        
        <TitleArea title='Similar Products' subtitle='Check out similar products'/>
        <HomeProductGroup/>

        </>
    )
}