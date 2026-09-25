import Image from 'next/image'
import styles from './styler.module.css'
import { categories } from '@/app/data/categories'
import Link from 'next/link'

export default function CategoryList (){
    return (
        <>
        
        <div className= {styles.container}>
            <h4 className= {styles.header}>Shop By  Category</h4>
            <p className= {styles.subHeader}>Find exactly what you're looking for, or explore our full range of essentials.</p>
            <div className= {styles.categoryGrid}>
                {categories.map((item) => (
                    <Link href={`/shop?category=${item.title.toLowerCase()}`} 
                        className="flex aspect-square w-[70%] max-w-[400px] shrink-0 cursor-pointer flex-col items-center justify-center bg-[var(--light-accent)] p-6 transition duration-400 hover:scale-[1.05] hover:opacity-90 max-lg:w-[45%] max-lg:max-w-[360px] max-md:w-[60%] max-md:max-w-[320px] max-md:p-5 max-[500px]:w-[78%] max-[500px]:max-w-[300px] max-[500px]:p-[18px]"
                        key={item.title}
                    >
                            <div className="relative aspect-[35/29] w-[90%] max-[500px]:w-[88%]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                />
                            </div>

                            <h4 className="mt-4 text-base font-semibold text-[var(--foreground)] max-md:mt-3 max-md:text-[15px] max-[500px]:text-sm">
                                {item.title}
                            </h4>

                            <p className="mt-2 text-xs font-normal text-[var(--text-accent)] max-md:mt-1.5 max-md:text-[11px]">
                                {item.subtitle}
                            </p>
                        </Link>
                ))}
            </div>
        </div>
        
        </>
    )
}