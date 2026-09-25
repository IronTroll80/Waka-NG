import { ArrowRight } from 'iconoir-react'

export default function Logistics(){
    return (
        <div className="mx-auto flex w-full flex-col items-center py-24 max-lg:py-20 max-md:py-16 max-[500px]:py-12">

            <div className="flex w-full max-w-[1400px] justify-between gap-12 px-10 max-lg:gap-8 max-lg:px-8 max-md:flex-col max-md:gap-8 max-md:px-6 max-[500px]:gap-6 max-[500px]:px-4">

                <div>
                    <h4 className="text-[48px] font-bold leading-[56px] text-[var(--foreground)] max-lg:text-[40px] max-lg:leading-[48px] max-md:text-[32px] max-md:leading-10 max-[500px]:text-[26px] max-[500px]:leading-[34px]">
                        WHEREVER IT <br />
                        NEEDS TO GO
                    </h4>

                    <p className="mt-4 text-2xl font-semibold text-[var(--waka-blue)] max-lg:text-xl max-md:mt-3 max-md:text-lg max-[500px]:mt-2.5 max-[500px]:text-base">
                        Get moving with Waka.
                    </p>
                </div>

                <div className="max-w-[390px] max-md:max-w-[600px]">

                    <p className="text-lg leading-8 text-[var(--text-accent)] max-lg:text-base max-lg:leading-7 max-md:text-[15px] max-md:leading-[26px] max-[500px]:text-sm max-[500px]:leading-6">
                        Waka bridges the gap between international sourcing and local delivery,
                        moving your goods exactly where they need to be.
                    </p>

                    <button
                        className="mt-4 cursor-pointer bg-[var(--waka-blue)] px-4 py-2 text-base font-semibold text-[var(--background)] transition duration-400 hover:scale-[1.05] max-md:text-sm max-[500px]:px-3.5 max-[500px]:text-[13px]"
                    >
                        Explore Our Services
                    </button>

                </div>
            </div>

            <div className="mt-[60px] aspect-[3/1] w-full overflow-hidden max-lg:mt-12 max-lg:aspect-[2/1] max-md:mt-10 max-md:aspect-[1.5/1] max-[500px]:mt-8 max-[500px]:aspect-square">
                <video
                    src="/warehouse.mp4"
                    className="block h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                />
            </div>

        </div>
    )
}