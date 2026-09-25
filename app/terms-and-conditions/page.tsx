
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { getProducts } from '../lib/products'

export default async function Terms() {

    const products = await getProducts()
    return (
        <>
            <Header products = {products} />

            <main className='mx-auto w-full max-w-[900px] px-6 py-[96px] max-md:px-5 max-md:py-[64px] max-sm:px-4 max-sm:py-[48px]'>

                <div className='mb-12'>
                    <h1 className='text-[48px] font-semibold text-[var(--foreground)] max-md:text-[38px] max-sm:text-[30px]'>
                        Terms & Conditions
                    </h1>

                    <p className='mt-3 text-sm text-[var(--text-accent)]'>
                        Last updated: September 2026
                    </p>
                </div>

                <div className='space-y-10 text-[15px] leading-7 text-[var(--text-accent)] max-sm:text-sm max-sm:leading-6'>

                    <section>
                        <p>
                            Welcome to <strong className='text-[var(--foreground)]'>Waka NG</strong>.
                            These Terms & Conditions govern your use of the Waka NG website
                            and your purchase of products and logistics services from Waka NG.
                        </p>

                        <p className='mt-4'>
                            By using our website or proceeding with an order through our
                            official WhatsApp channel, you agree to these Terms & Conditions.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            1. About Waka NG
                        </h2>

                        <p>
                            Waka NG is a Nigeria-based business located in Lagos, Nigeria.
                            We provide access to products available for purchase in Nigeria
                            and also assist customers with sourcing and importing products
                            from outside Nigeria.
                        </p>

                        <p className='mt-4'>Our services include:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Sale of products available in Nigeria</li>
                            <li>Sourcing and importing products on behalf of customers</li>
                            <li>Delivery and logistics services</li>
                            <li>Assistance with international-to-Nigeria product movement</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            2. How Ordering Works
                        </h2>

                        <p>
                            The Waka NG website is primarily used to display products,
                            product information and services.
                        </p>

                        <p className='mt-4'>
                            <strong className='text-[var(--foreground)]'>
                                Waka NG does not process payments directly through the website.
                            </strong>
                        </p>

                        <p className='mt-4'>
                            When you are ready to purchase a product, you will be directed
                            to our official WhatsApp channel. Your order, availability,
                            pricing, delivery arrangements and payment instructions will
                            be confirmed through WhatsApp before payment is made.
                        </p>

                        <p className='mt-4'>
                            Only payment instructions provided through the official Waka NG
                            communication channel should be followed.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            3. Product Information
                        </h2>

                        <p>
                            We make reasonable efforts to ensure that product names,
                            descriptions, images, specifications and prices displayed on
                            the website are accurate.
                        </p>

                        <p className='mt-4'>However:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Product availability may change.</li>
                            <li>
                                Product images may differ slightly from the actual product
                                because of photography, lighting or manufacturer variations.
                            </li>
                            <li>
                                Product specifications may change where a manufacturer
                                updates a product.
                            </li>
                            <li>
                                Products that are used, refurbished or otherwise not
                                brand-new will be identified where applicable.
                            </li>
                            <li>
                                Final product availability and pricing will be confirmed
                                before an order is completed.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            4. Prices
                        </h2>

                        <p>
                            All prices displayed on the website are in Nigerian Naira (₦),
                            unless otherwise stated.
                        </p>

                        <p className='mt-4'>
                            The final amount payable will be confirmed through WhatsApp
                            before payment.
                        </p>

                        <p className='mt-4'>
                            For products that Waka NG sources or imports on behalf of a
                            customer, the quoted delivery fee may include applicable
                            international shipping, customs and import-related costs.
                            Any important additional charge or exception will be
                            communicated before payment.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            5. Orders and Availability
                        </h2>

                        <p>
                            An order is not considered confirmed until Waka NG has
                            confirmed the product and the applicable payment and delivery
                            arrangements with the customer.
                        </p>

                        <p className='mt-4'>Waka NG may decline or cancel an order where:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>The product is unavailable.</li>
                            <li>There is an obvious pricing or listing error.</li>
                            <li>
                                The requested product cannot legally be imported or supplied.
                            </li>
                            <li>The order contains inaccurate or unverifiable information.</li>
                            <li>
                                Circumstances outside Waka NG's reasonable control prevent
                                fulfilment.
                            </li>
                        </ul>

                        <p className='mt-4'>
                            Where payment has already been made for an order that Waka NG
                            cannot fulfil, the applicable refund process will apply.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            6. Payment
                        </h2>

                        <p>
                            Payment instructions will be provided through Waka NG's
                            official WhatsApp channel after the order details have been
                            confirmed.
                        </p>

                        <p className='mt-4'>
                            Waka NG does <strong className='text-[var(--foreground)]'>not</strong> request customers to provide:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Card PINs</li>
                            <li>CVV numbers</li>
                            <li>Online banking passwords</li>
                            <li>OTPs</li>
                        </ul>

                        <p className='mt-4'>
                            Customers should only make payments using payment instructions
                            confirmed through Waka NG's official communication channel.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            7. Delivery
                        </h2>

                        <p>
                            Delivery times vary depending on the product, destination,
                            availability, sourcing requirements and logistics involved.
                        </p>

                        <p className='mt-4'>
                            For products already available in Nigeria, delivery times will
                            depend primarily on the customer's location and the applicable
                            delivery arrangement.
                        </p>

                        <p className='mt-4'>
                            For products being imported, additional time may be required
                            for sourcing, international transportation, customs processing
                            and local delivery.
                        </p>

                        <p className='mt-4'>
                            <strong className='text-[var(--foreground)]'>
                                Delivery timeframes are estimates and are not guaranteed
                                fixed dates.
                            </strong>
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            8. Returns
                        </h2>

                        <p>
                            Customers may request a return within <strong className='text-[var(--foreground)]'>14 days</strong> of
                            receiving the product, subject to the conditions below.
                        </p>

                        <p className='mt-4'>Returned products must generally:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Be in good condition.</li>
                            <li>
                                Be returned with their relevant accessories and packaging
                                where applicable.
                            </li>
                            <li>
                                Not have been damaged through misuse, negligence or
                                improper handling.
                            </li>
                            <li>Be eligible for return under this policy.</li>
                        </ul>

                        <p className='mt-4'>
                            Certain products may be excluded from returns where the nature
                            of the product makes a return inappropriate or where the
                            exclusion is clearly communicated before purchase.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            Electronics
                        </h2>

                        <p>
                            <strong className='text-[var(--foreground)]'>
                                Opened electronics cannot be returned simply because the
                                customer has changed their mind.
                            </strong>
                        </p>

                        <p className='mt-4'>
                            This restriction does not remove any applicable rights relating
                            to defective, unsafe, incorrectly supplied or materially
                            misdescribed products.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            9. Return Shipping
                        </h2>

                        <p>
                            Unless Waka NG confirms otherwise, the customer is responsible
                            for the cost of returning a product under a change-of-mind return.
                        </p>

                        <p className='mt-4'>
                            Where Waka NG has supplied an incorrect product or the product
                            is confirmed to have a qualifying defect attributable to the
                            supply of the product, Waka NG will determine the appropriate
                            return arrangement.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            10. Refunds
                        </h2>

                        <p>
                            Returned products will be inspected after they are received
                            by Waka NG.
                        </p>

                        <p className='mt-4'>
                            <strong className='text-[var(--foreground)]'>
                                Refunds will be processed within seven (7) days after the
                                returned product has been received and inspected,
                            </strong>{' '}
                            provided that the return meets the requirements of this policy.
                        </p>

                        <p className='mt-4'>
                            The actual time for funds to appear in a customer's account
                            may depend on the payment method or financial institution used.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            11. Defective, Damaged or Incorrect Products
                        </h2>

                        <p>If you receive:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>A defective product</li>
                            <li>A damaged product</li>
                            <li>The wrong product</li>
                            <li>A product that materially differs from its description</li>
                        </ul>

                        <p className='mt-4'>
                            Contact Waka NG as soon as possible through our official
                            WhatsApp channel.
                        </p>

                        <p className='mt-4'>
                            We may request photographs, videos, order details or other
                            information to assess the issue.
                        </p>

                        <p className='mt-4'>
                            The appropriate resolution will depend on the circumstances
                            and may include replacement, repair, exchange or refund.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            12. Warranty
                        </h2>

                        <p>
                            Waka NG does not currently provide a separate blanket warranty
                            for all products.
                        </p>

                        <p className='mt-4'>
                            Where a manufacturer or supplier provides a warranty for a
                            particular product, that warranty will be communicated to the
                            customer where applicable.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            13. Imported Products
                        </h2>

                        <p>
                            Waka NG may source products internationally on behalf of
                            customers.
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Availability will be confirmed before payment.</li>
                            <li>
                                The applicable price and delivery fee will be communicated
                                before payment.
                            </li>
                            <li>
                                Applicable import and customs-related costs may form part
                                of the quoted delivery fee.
                            </li>
                            <li>
                                Delivery time will depend on sourcing, international
                                transportation, customs and local logistics.
                            </li>
                            <li>Estimated delivery dates are not guaranteed.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            14. Logistics Services
                        </h2>

                        <p>
                            Additional terms may apply to logistics services, including
                            pickup, transportation, international shipping, storage,
                            packaging and delivery.
                        </p>

                        <p className='mt-4'>
                            Customers must provide accurate information necessary to
                            perform the requested service.
                        </p>

                        <p className='mt-4'>
                            Waka NG reserves the right to refuse goods or services
                            involving prohibited, dangerous or unlawful items.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            15. Prohibited Use
                        </h2>

                        <p>Customers must not use Waka NG's website or services to:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Commit fraud.</li>
                            <li>Provide false or misleading information.</li>
                            <li>Use stolen payment information.</li>
                            <li>Attempt to gain unauthorized access to Waka NG systems.</li>
                            <li>Purchase or transport unlawful or prohibited goods.</li>
                            <li>Interfere with the operation or security of the website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            16. Intellectual Property
                        </h2>

                        <p>
                            The Waka NG name, logo, website content, photographs, graphics,
                            text and other original materials belong to Waka NG or their
                            respective rights holders.
                        </p>

                        <p className='mt-4'>
                            They may not be reproduced, copied or commercially used
                            without permission.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            17. Third-Party Services
                        </h2>

                        <p>
                            Waka NG may rely on third-party providers for services such
                            as transportation, international shipping, payment processing,
                            communications and other operational services.
                        </p>

                        <p className='mt-4'>
                            Where third-party services are involved, their own applicable
                            terms may also apply.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            18. Privacy
                        </h2>

                        <p>
                            Information provided to Waka NG will be handled in accordance
                            with our Privacy Policy.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            19. Complaints
                        </h2>

                        <p>
                            If you have an issue with a product, order or service, please
                            contact Waka NG first so that we can investigate and attempt
                            to resolve the matter.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            20. Changes to These Terms
                        </h2>

                        <p>
                            Waka NG may update these Terms & Conditions from time to time.
                        </p>

                        <p className='mt-4'>
                            The updated version will be published on this website with a
                            revised "Last Updated" date.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            21. Governing Law
                        </h2>

                        <p>
                            These Terms & Conditions are governed by the laws applicable
                            in the Federal Republic of Nigeria.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            22. Contact
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