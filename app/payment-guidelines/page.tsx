

import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { getProducts } from '../lib/products'

export default async function PaymentGuidelines() {

    const products = await getProducts()

    return (
        <>
            <Header products = {products} />

            <main className='mx-auto w-full max-w-[900px] px-6 py-[96px] max-md:px-5 max-md:py-[64px] max-sm:px-4 max-sm:py-[48px]'>

                <div className='mb-12'>
                    <h1 className='text-[48px] font-semibold text-[var(--foreground)] max-md:text-[38px] max-sm:text-[30px]'>
                        Payment Guidelines
                    </h1>

                    <p className='mt-3 text-sm text-[var(--text-accent)]'>
                        Last updated: September 2026
                    </p>
                </div>

                <div className='space-y-10 text-[15px] leading-7 text-[var(--text-accent)] max-sm:text-sm max-sm:leading-6'>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            1. How Payment Works
                        </h2>

                        <p>
                            Waka NG does <strong className='text-[var(--foreground)]'>not have an online payment checkout on the website.</strong>
                        </p>

                        <p className='mt-4'>
                            The website allows customers to browse available products and
                            services. When you want to purchase a product, you will be
                            directed to the official Waka NG WhatsApp channel.
                        </p>

                        <p className='mt-4'>
                            Your order will be discussed and confirmed there before payment.
                        </p>

                        <p className='mt-4'>
                            <strong className='text-[var(--foreground)]'>
                                Official Waka NG WhatsApp:
                            </strong>
                        </p>

                        <a
                            href='https://wa.me/2348133896617'
                            target='_blank'
                            rel='noreferrer'
                            className='mt-2 inline-block underline'
                        >
                            Chat with Waka NG on WhatsApp
                        </a>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            2. Before You Pay
                        </h2>

                        <p>
                            Before making payment, Waka NG will confirm relevant details
                            such as:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Product</li>
                            <li>Quantity</li>
                            <li>Product price</li>
                            <li>Delivery fee</li>
                            <li>
                                Applicable import or customs-related charges where relevant
                            </li>
                            <li>Delivery destination</li>
                            <li>Estimated delivery timeframe</li>
                            <li>Any applicable return conditions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            3. Delivery and Import Charges
                        </h2>

                        <p>
                            Where Waka NG imports a product for a customer, applicable
                            import and customs-related costs are included in the quoted
                            delivery fee unless otherwise stated.
                        </p>

                        <p className='mt-4'>
                            The final delivery fee will depend on the product, destination
                            and logistics requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            4. Payment Confirmation
                        </h2>

                        <p>
                            An order will only be treated as confirmed after Waka NG has
                            confirmed receipt of the required payment.
                        </p>

                        <p className='mt-4'>
                            Customers should keep their payment confirmation or receipt
                            until the order has been completed.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            5. Payment Security
                        </h2>

                        <p>
                            Waka NG will never ask customers to provide:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Card PIN</li>
                            <li>CVV</li>
                            <li>OTP</li>
                            <li>Online banking password</li>
                        </ul>

                        <p className='mt-4'>
                            Do not send these details to anyone claiming to represent
                            Waka NG.
                        </p>

                        <p className='mt-4'>
                            Customers should also verify that payment instructions have
                            come through the <strong className='text-[var(--foreground)]'>official Waka NG WhatsApp channel</strong> before making payment.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            6. Failed Payments
                        </h2>

                        <p>
                            If a payment fails or is not confirmed, contact Waka NG through
                            the official WhatsApp channel before attempting another payment.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            7. Duplicate Payments
                        </h2>

                        <p>
                            If you believe you have accidentally paid twice for the same
                            order, contact Waka NG immediately and provide the relevant
                            payment information so the transaction can be investigated.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            8. Refunds
                        </h2>

                        <p>
                            Eligible returns will be processed in accordance with the
                            Waka NG Returns Policy.
                        </p>

                        <p className='mt-4'>
                            Returned products may be held for inspection for up to{' '}
                            <strong className='text-[var(--foreground)]'>
                                seven (7) days
                            </strong>{' '}
                            after receipt before a refund is processed.
                        </p>

                        <p className='mt-4'>
                            The time for the refunded amount to appear in the customer's
                            account may depend on the financial institution or payment
                            method involved.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            9. Payment Fraud
                        </h2>

                        <p>
                            Waka NG is not responsible for payments made to unauthorized
                            individuals or accounts where the customer did not verify the
                            payment instructions through the official Waka NG communication
                            channel.
                        </p>

                        <p className='mt-4'>
                            If you receive suspicious payment instructions claiming to be
                            from Waka NG, contact us directly.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            10. Contact
                        </h2>

                        <p>
                            <strong className='text-[var(--foreground)]'>Waka NG</strong>
                            <br />
                            Lagos, Nigeria
                            <br />
                            Email:{' '}
                            <a
                                href='mailto:wakang@gmail.com'
                                className='underline'
                            >
                                wakang@gmail.com
                            </a>
                            <br />
                            Phone/WhatsApp: +234 813 389 6617
                        </p>
                    </section>

                </div>
            </main>

            <Footer />
        </>
    )
}