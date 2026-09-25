import Image from 'next/image'

export default function Story(){
    return (
        <section className="relative flex min-h-[600px] w-full items-start overflow-hidden">

            <Image
                src="/story.png"
                alt="Waka NG"
                fill
                className="object-cover"
            />

            <div className="absolute inset-0 bg-black/[0.55]" />

            <div className="relative z-10 max-w-[560px] px-[72px] pt-[105px] max-md:px-8 max-md:pt-20 max-[500px]:px-5 max-[500px]:pt-14">

                <h4 className="text-[28px] font-semibold leading-[30px] text-[var(--background)] max-md:text-2xl max-md:leading-7 max-[500px]:text-xl max-[500px]:leading-6">
                    IT STARTED WITH PRODUCTS.
                    <br />
                    THEN WE STARTED MOVING THEM
                </h4>

                <p className="mt-5 text-base leading-[30px] text-[var(--background)] max-md:text-sm max-md:leading-6 max-[500px]:mt-4">
                    What began as a technology-focused business has grown
                    into a broader platform for shopping, sourcing and logistics.
                </p>

            </div>

        </section>
    )
}