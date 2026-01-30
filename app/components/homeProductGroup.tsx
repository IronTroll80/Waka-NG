import styles from './homeProductGroup.module.css'
import HotProduct from './hotProduct'

export default function HomeProductGroup(){
    return(
        <>
        
        <div className= {styles.container}>
            <HotProduct category='Laptops' title='Alienare 17 R2 16GB RAM/4GB VRAM/ Core i7/ Windows 10' hot = {true} price={1249999.99} image='/alienware4.webp'/>
            <HotProduct category='Laptops' title='Alienare 17 R2 16GB RAM/4GB VRAM/ Core i7/ Windows 10' hot = {true} price={1249999.99} image='/testLaptop.webp'/>
            <HotProduct category='Laptops' title='Alienare 17 R2 16GB RAM/4GB VRAM/ Core i7/ Windows 10' hot = {true} price={1249999.99} image='/testLaptop2.webp'/>
            <HotProduct category='Laptops' title='Alienare 17 R2 16GB RAM/4GB VRAM/ Core i7/ Windows 10' hot = {true} price={1249999.99} image='/testLaptop3.webp'/>
            <HotProduct category='Laptops' title='Alienare 17 R2 16GB RAM/4GB VRAM/ Core i7/ Windows 10' hot = {true} price={1249999.99} image='/testLaptop3.webp'/>
            
        </div>
        
        </>
    )
}