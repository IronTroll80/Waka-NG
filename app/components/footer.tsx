import Image from 'next/image'
import Link from 'next/link'
import { DeliveryTruck, ShoppingBag, Box } from 'iconoir-react'

const benefits = [
    {
        icon: DeliveryTruck,
        title: 'Reliable',
        subtitle: 'Delivery'
    },
    {
        icon: ShoppingBag,
        title: 'Secure',
        subtitle: 'Shopping'
    },
    {
        icon: Box,
        title: 'Wide',
        subtitle: 'Selection'
    }
]

const categories = [
    'Electronics',
    'Home',
    'Beauty',
    'Fashion',
    'Essential Items',
    'Accessories'
]

const services = [
    'Shipping',
    'Factory Visit',
    'Quality Check',
    'Logistics',
    'Point of Sale Services'
]

const company = [
    'About Us',
    'Terms and Conditions',
    'Privacy Policy',
    'Return Policy',
    'Payment Guidelines'
]

export default function Footer(){
    return (
        <>
            <section className="flex w-full items-center justify-center bg-[var(--light-accent)] px-10 py-10 max-md:px-6 max-md:py-8 max-[500px]:px-4">
                <div className="flex w-full max-w-[850px] justify-between max-md:gap-8 max-[500px]:gap-4">
                    {benefits.map((item) => {
                        const Icon = item.icon

                        return (
                            <div
                                key={item.title}
                                className="flex flex-col items-center"
                            >
                                <Icon className="h-14 w-14 stroke-[.5] max-md:h-12 max-md:w-12 max-[500px]:h-10 max-[500px]:w-10" />

                                <p className="mt-4 text-base leading-[22px] flex flex-col items-center text-center text-[var(--foreground)] max-md:text-sm max-[500px]:mt-3 max-[500px]:text-[13px]">
                                    {item.title}
                                    <br />
                                    {item.subtitle}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </section>

            <footer className="w-full bg-[var(--foreground)] px-16 py-[110px] max-lg:px-10 max-lg:py-20 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">
                <div className="mx-auto flex w-full max-w-[1150px] items-center justify-between gap-16 max-md:flex-col max-md:items-start">

                    <Link href="/" className="shrink-0">
                        <Image
                            src="/logo.svg"
                            alt="Waka.ng"
                            width={100}
                            height={100}
                        />
                    </Link>

                    <div className="grid w-full grid-cols-3 gap-16 max-md:grid-cols-3 max-md:gap-8 max-[500px]:grid-cols-1 max-[500px]:gap-8">

                        <div className="flex flex-col gap-7">
                            {categories.map((item) => (
                                <Link
                                    key={item}
                                    href="/shop"
                                    className="text-base text-[var(--background)] transition duration-[400ms] hover:opacity-60 max-[500px]:text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-7">
                            {services.map((item) => (
                                <Link
                                    key={item}
                                    href="/services"
                                    className="text-base text-[var(--background)] transition duration-[400ms] hover:opacity-60 max-[500px]:text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-7">
                            {company.map((item) => (
                                <Link
                                    key={item}
                                    href="/"
                                    className="text-base text-[var(--background)] transition duration-[400ms] hover:opacity-60 max-[500px]:text-sm"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>

                    </div>

                </div>
            </footer>
        </>
    )
}