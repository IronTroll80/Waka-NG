import Link from 'next/link'
import styles from './hero.module.css'

export default function MusicAd (){
    return(
        <>
        
        <div className= {styles.container}>
            <video
                src="/beats.mp4"
                className="block aspect-[2.4/1] w-full object-cover max-lg:aspect-[2/1] max-md:aspect-[1/1.5] max-[500px]:aspect-[1/1.5]"
                autoPlay
                muted
                loop
            />
            <div className="absolute inset-0 flex flex-col items-end justify-center bg-black/[0.521] px-20 py-[84px] text-right max-lg:px-12 max-lg:py-[60px] max-md:px-6 max-md:py-10 max-[500px]:px-4 max-[500px]:py-7">
                <h4 className="max-w-[620px] text-[48px] font-semibold leading-[56px] tracking-[2%] text-[var(--background)] max-lg:max-w-[520px] max-lg:text-[40px] max-lg:leading-[48px] max-md:max-w-[420px] max-md:text-[30px] max-md:leading-[38px] max-[500px]:max-w-[280px] max-[500px]:text-[23px] max-[500px]:leading-[30px]">
                   FEEL THE BEATS
                </h4>
                <p className="mt-4 max-w-[520px] text-lg leading-8 text-[var(--background)]/85 max-lg:max-w-[440px] max-lg:text-base max-lg:leading-7 max-md:mt-3 max-md:max-w-[360px] max-md:text-sm max-md:leading-6 max-[500px]:mt-2 max-[500px]:max-w-[280px] max-[500px]:text-xs max-[500px]:leading-5">
                    Your music experience can be powered by waka NG. Shop from our variety of earphones, bluetooth speakers and audio devices.
                </p>

                <Link href={`/shop?category=speakers`}>
                    <button
                            className=" mt-4 flex cursor-pointer items-center gap-1 border-none bg-[var(--waka-blue)] px-4 py-2 text-sm text-[var(--background)] transition duration-400 hover:scale-[1.05] max-md:px-3.5 max-md:py-[9px] max-md:text-[13px] max-[500px]:px-3 max-[500px]:py-[9px] max-[500px]:text-xs"
                        >
                            Browse The Collection
                        </button>
                </Link>
            </div>
        </div>
        
        </>
    )
}