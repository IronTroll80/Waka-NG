import Image from 'next/image'
import Link from 'next/link'
import { DeliveryTruck, ShoppingBag, Box } from 'iconoir-react'
import { categories } from '../data/categories'

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

const services = [
    { label: 'Shipping', href: '/services/shipping' },
    { label: 'Factory visit', href: '/services/factory-visit' },
    { label: 'Quality check', href: '/services/quality-check' },
    { label: 'Logistics', href: '/services/logistics' },
    { label: 'Point of sale services', href: '/services/point-of-sale' }
]

const company = [
    { label: 'About us', href: '/about' },
    { label: 'Terms and conditions', href: '/terms-and-conditions' },
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Payment guidelines', href: '/payment-guidelines' }
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

            <footer className="w-full bg-[var(--foreground)] px-16 pt-16 pb-8 max-lg:px-10 max-lg:pt-14 max-md:px-6 max-md:pt-12 max-[500px]:px-4 max-[500px]:pt-10">
                <div className="mx-auto flex w-full max-w-[1150px] flex-col gap-12 max-md:gap-10">

                    <div className="flex w-full items-start justify-between gap-16 max-md:flex-col max-md:gap-10">

                        <Link href="/" className="shrink-0">
                            <Image
                                src="/logo.svg"
                                alt="Waka.ng"
                                width={84}
                                height={84}
                            />
                        </Link>

                        <div className="grid w-full grid-cols-3 gap-10 max-md:grid-cols-3 max-md:gap-8 max-[500px]:grid-cols-1 max-[500px]:gap-8">

                            <div className="flex flex-col gap-4">
                                <p className="text-xs font-medium text-[var(--background)]/50">Shop</p>
                                {categories.slice(0,6).map((item, index) => (
                                    <Link
                                        key={index}
                                        href={`/shop?category=${item.title.toLowerCase()}`}
                                        className="text-sm text-[var(--background)]/85 transition duration-300 hover:text-[var(--background)]"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-xs font-medium text-[var(--background)]/50">Services</p>
                                {services.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-sm text-[var(--background)]/85 transition duration-300 hover:text-[var(--background)]"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <p className="text-xs font-medium text-[var(--background)]/50">Company</p>
                                {company.map((item) => (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="text-sm text-[var(--background)]/85 transition duration-300 hover:text-[var(--background)]"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>

                        </div>

                    </div>

                    <div className="flex w-full items-center justify-between border-t border-[var(--background)]/15 pt-6 max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-3">
                        <p className="text-xs text-[var(--background)]/50">© {new Date().getFullYear()} Waka.ng. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/terms" className="text-xs text-[var(--background)]/50 transition duration-300 hover:text-[var(--background)]">
                                Terms
                            </Link>
                            <Link href="/privacy" className="text-xs text-[var(--background)]/50 transition duration-300 hover:text-[var(--background)]">
                                Privacy
                            </Link>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}