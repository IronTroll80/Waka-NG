import Image from 'next/image'

export default function Hero() {
    return (
        <section className="flex min-h-[900px] w-full bg-[var(--light-accent)] max-md:min-h-0 max-md:flex-col">
            <div className="flex w-1/2 flex-col justify-end px-[54px] py-[80px] max-md:w-full max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">
                <Image
                    src="/logo.svg"
                    alt="Waka NG"
                    width={58}
                    height={58}
                    className="mb-5"
                />

                <h4 className="text-[48px] font-medium leading-[1.1] text-[var(--foreground)] max-md:text-[38px] max-[500px]:text-[30px]">
                    ABOUT <span className="font-bold text-[var(--waka-blue)]">WAKA NG</span>
                </h4>

                <p className="mt-2 max-w-[560px] text-base leading-8 text-[var(--text-accent)] max-md:text-lg max-md:leading-7 max-[500px]:mt-4 max-[500px]:text-base max-[500px]:leading-6">
                    Waka connects products, people and logistics,
                    making it easier to get what you need, wherever it is.
                </p>
            </div>

            <div className="relative min-h-[700px] w-1/2 max-md:min-h-0 max-md:aspect-[4/3] max-md:w-full">
                <video
                    src="/warehouse.mp4"
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                />
            </div>
        </section>
    )
}