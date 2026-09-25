import Link from 'next/link'

export default function CTA(){
    return (
        <section className="flex min-h-[400px] w-full items-start bg-[var(--foreground)] px-[72px] py-[96px] max-md:min-h-[350px] max-md:px-6 max-md:py-16 max-[500px]:min-h-[300px] max-[500px]:px-4 max-[500px]:py-12">

            <div className='max-w-[1200px] m-auto  w-full'>
                <h4 className="text-[40px] font-bold leading-[48px] text-[var(--background)] max-md:text-[34px] max-md:leading-[42px] max-[500px]:text-[28px] max-[500px]:leading-[34px]">
                    ARE YOU READY
                    <br />
                    TO <span className="text-[var(--waka-blue)]">WAKA?</span>
                </h4>

                <div className="mt-8 flex gap-4 max-[500px]:mt-6 max-[500px]:flex-col max-[500px]:gap-3">

                    <Link
                        href="/shop"
                        className="bg-[var(--waka-blue)] px-6 py-3 text-base font-semibold text-[var(--background)] transition duration-[400ms] hover:opacity-90 max-[500px]:w-fit max-[500px]:px-5 max-[500px]:py-2.5 max-[500px]:text-sm"
                    >
                        Shop Products
                    </Link>

                    <Link
                        href="/services"
                        className="border border-[var(--border-color)] px-6 py-3 text-base font-semibold text-[var(--background)] transition duration-[400ms] hover:bg-[var(--background)] hover:text-[var(--foreground)] max-[500px]:w-fit max-[500px]:px-5 max-[500px]:py-2.5 max-[500px]:text-sm"
                    >
                        Explore Services
                    </Link>

                </div>
            </div>

        </section>
    )
}