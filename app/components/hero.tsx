import Link from "next/link";

export default function Hero(){
    return (
        <div className="relative h-fit w-full">

            <video
                src="/hero_clear.mp4"
                className="block aspect-[2.4/1] w-full object-cover max-lg:aspect-[2/1] max-md:aspect-[1/1.5] max-[500px]:aspect-[1/1.5]"
                autoPlay
                muted
                loop
            />

            <div className="absolute inset-0 flex flex-col items-start justify-end bg-black/[0.521] px-20 py-[84px] max-lg:px-12 max-lg:py-[60px] max-md:px-6 max-md:py-10 max-[500px]:px-4 max-[500px]:py-7">

                <h4 className="text-[48px] font-semibold leading-[56px] tracking-[2%] text-[var(--background)] max-lg:text-[40px] max-lg:leading-[48px] max-md:text-[30px] max-md:leading-[38px] max-[500px]:text-[23px] max-[500px]:leading-[30px]">
                    WHATEVER YOU'RE LOOKING FOR, <br />
                    START WITH <b>WAKA</b>.
                </h4>

                <div className="mt-8 flex gap-4 max-lg:mt-6 max-md:mt-5 max-md:gap-2.5 max-[500px]:mt-4 max-[500px]:w-full max-[500px]:gap-2">

                    <button
                        className="flex cursor-pointer items-center gap-1 border-none bg-[var(--waka-blue)] px-4 py-2 text-sm text-[var(--background)] transition duration-400 hover:scale-[1.05] max-md:px-3.5 max-md:py-[9px] max-md:text-[13px] max-[500px]:px-3 max-[500px]:py-[9px] max-[500px]:text-xs"
                    >
                        <Link href = '/shop'>
                        Shop Products
                        </Link>
                    </button>

                    <button
                        className="flex cursor-pointer items-center gap-1 border border-[var(--border-color)] bg-transparent px-4 py-2 text-sm text-[var(--background)] transition duration-400 hover:scale-[1.05] max-md:px-3.5 max-md:py-[9px] max-md:text-[13px] max-[500px]:px-3 max-[500px]:py-[9px] max-[500px]:text-xs"
                    >
                        Move with Waka
                    </button>

                </div>
            </div>
        </div>
    )
}