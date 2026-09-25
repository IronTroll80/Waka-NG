import Image from 'next/image'
import Link from 'next/link'

const directions = [
    {
        image: '/shop.png',
        title: 'SHOP',
        text: 'Explore products across everyday categories.',
        link: '/shop'
    },
    {
        image: '/source.png',
        title: 'SOURCE',
        text: 'Get products from where they are.',
        link: '/services'
    },
    {
        image: '/move.png',
        title: 'MOVE',
        text: 'Move goods locally or across borders.',
        link: '/services'
    }
]

export default function Directions(){
    return (
        <section className="w-full bg-[var(--light-accent)]">

            <div className="mx-auto w-full max-w-[1280px] px-20 py-14 max-lg:px-10 max-lg:py-20 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">

                <h4 className="max-w-[500px] text-[34px] font-semibold leading-[38px] text-[var(--foreground)] max-md:text-[30px] max-md:leading-[36px] max-[500px]:text-[25px] max-[500px]:leading-[30px]">
                    TODAY, WAKA MOVES IN
                    <br />
                    THREE DIRECTIONS
                </h4>

                <p className="mt-5 max-w-[650px] text-base leading-[30px] text-[var(--foreground)] max-md:text-lg max-md:leading-7 max-[500px]:text-base max-[500px]:leading-6">
                    From shopping and product sourcing to international shipping and
                    local delivery, Waka brings the journey together in one place.
                </p>

            </div>

            <div className="grid w-full grid-cols-3 max-md:grid-cols-1 max-w-[1200px] m-auto pb-24">

                {directions.map((item) => (
                    <Link
                        href={item.link}
                        key={item.title}
                        className="group block"
                    >

                        <div className="relative aspect-[1.8/1] w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition duration-[400ms] group-hover:scale-[1.03]"
                            />
                        </div>

                        <div className="px-8 py-4 max-md:px-6 max-[500px]:px-4 max-[500px]:py-3">

                            <h4 className="text-base font-medium text-[var(--foreground)]">
                                {item.title}
                            </h4>

                            <p className="mt-1 text-sm text-[var(--text-accent)]">
                                {item.text}
                            </p>

                        </div>

                    </Link>
                ))}

            </div>

        </section>
    )
}