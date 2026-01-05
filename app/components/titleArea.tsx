import styles from './titleArea.module.css'

interface Props {
    title: string;
    subtitle: string;
}

export default function TitleArea({title,subtitle}:Props){
    return(
        <>
        
        <div className= {styles.container}>
            <h3>{title}</h3>
            <p>{subtitle}</p>
        </div>
        
        </>
    )
}