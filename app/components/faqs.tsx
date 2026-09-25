'use client'

import { NavArrowDown } from 'iconoir-react'
import { useState } from 'react'

const faqs = [
    {
        question: 'Shipping policy?',
        answer: 'We offer delivery across available locations in Nigeria. Delivery times and fees depend on your location and the size of your order.'
    },
    {
        question: 'Placing Orders',
        answer: 'Browse our products, select the item you want, add it to your cart and proceed to checkout to place your order.'
    },
    {
        question: 'Returns and Exchanges',
        answer: 'If you receive an incorrect or damaged item, contact our support team with your order details so we can assist you.'
    },
    {
        question: 'Logistics',
        answer: 'Waka provides logistics services for moving packages and goods. You can explore our logistics services for more information.'
    },
    {
        question: 'Contact',
        answer: 'For questions or support, reach out to us at support@wakang.co.'
    }
]

export default function FAQ(){
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index)
    }

    return (
        <div className="flex w-full flex-col items-center px-10 py-24 max-md:px-6 max-md:py-16 max-[500px]:px-4 max-[500px]:py-12">

            <h4 className="text-[34px] font-semibold text-[var(--foreground)] max-md:text-[30px] max-[500px]:text-[24px]">
                Frequently Asked Questions
            </h4>

            <div className="mt-16 w-full max-w-[678px] max-md:mt-12 max-[500px]:mt-10">

                {faqs.map((faq, index) => (
                    <div
                        key={faq.question}
                        className="border-b border-[var(--border-color)]"
                    >
                        <button
                            type="button"
                            onClick={() => toggleFAQ(index)}
                            className="flex w-full cursor-pointer items-center justify-between bg-transparent py-5 text-left text-base text-[var(--text-accent)] transition duration-[400ms] hover:text-[var(--foreground)] max-[500px]:py-4 max-[500px]:text-sm"
                        >
                            <span>{faq.question}</span>

                            <NavArrowDown
                                className={`shrink-0 transition duration-[400ms] ${
                                    activeIndex === index ? 'rotate-180' : ''
                                }`}
                            />
                        </button>

                        <div
                            className={`grid transition-[grid-template-rows,opacity] duration-[400ms] ease-in-out ${
                                activeIndex === index
                                    ? 'grid-rows-[1fr] opacity-100'
                                    : 'grid-rows-[0fr] opacity-0'
                            }`}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-5 text-sm leading-6 text-[var(--text-accent)] max-[500px]:pb-4 max-[500px]:text-[13px]">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <p className="mt-14 text-base text-[var(--text-accent)] max-md:mt-12 max-[500px]:mt-10 max-[500px]:text-sm">
                Reach out to us at{' '}
                <a
                    href="mailto:support@wakang.co"
                    className="text-[var(--foreground)] transition duration-[400ms] hover:opacity-70"
                >
                    support@wakang.co
                </a>
            </p>

        </div>
    )
}