'use client'

import { Xmark } from 'iconoir-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function ServicesModal() {

    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const hasVisited = localStorage.getItem('waka-services-modal')

        if (!hasVisited) {
            setShowModal(true)
            localStorage.setItem('waka-services-modal', 'true')
        }
    }, [])

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [showModal])

    return (
        <>
            {showModal && (
                <div
                    className="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/[0.384] p-5 max-sm:p-3"
                    onClick={() => setShowModal(false)}
                >
                    <div
                        className="relative flex w-[80%] max-w-[850px] items-center bg-white max-lg:w-[90%] max-md:w-full max-md:flex-col"
                        onClick={(event) => event.stopPropagation()}
                    >

                        <Xmark
                            className="absolute left-4 top-4 z-10 hidden cursor-pointer text-xl md:block"
                            onClick={() => setShowModal(false)}
                        />

                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="absolute right-3 top-3 z-10 flex h-8 w-8 cursor-pointer items-center justify-center bg-white md:hidden"
                        >
                            <Xmark className="text-xl" />
                        </button>

                        <div className="flex w-[55%] flex-col px-8 py-8 max-lg:px-6 max-lg:py-7 max-md:w-full max-md:px-6 max-md:py-7 max-sm:px-5 max-sm:py-6">
                            <h3 className="text-[28px] font-bold leading-tight max-lg:text-[25px] max-md:text-[24px] max-sm:text-[21px]">
                                WAKA NG JUST GOT BIGGER AND BETTER!
                            </h3>

                            <p className="mt-4 text-sm leading-6 text-gray-500 max-sm:mt-3 max-sm:text-[13px] max-sm:leading-5">
                                We're doing a whole lot more than just shop-and-deliver. Got a package that needs to get somewhere fast?
                                Use our new logistics service to send, track, and drop off items hassle-free.
                            </p>

                            <div className="mt-8 flex gap-4 text-sm font-semibold max-md:mt-7 max-sm:flex-col max-sm:gap-2.5">
                                <Link
                                    href="/services"
                                    className="cursor-pointer bg-black px-5 py-3 text-center text-white transition duration-400 hover:scale-[1.05] max-sm:w-full"
                                >
                                    Try Logistics Now
                                </Link>

                                <Link
                                    href="/"
                                    className="cursor-pointer border border-gray-300 bg-white px-5 py-3 text-center text-black transition duration-400 hover:scale-[1.05] max-sm:w-full"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        <div className="relative aspect-square w-[45%] max-md:aspect-[16/9] max-md:w-full max-sm:aspect-[4/3]">
                            <Image
                                src="/services.png"
                                alt="waka ng delivery"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 45vw"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}