
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'
import { getProducts } from '../lib/products'

export default async function PrivacyPolicy() {

     const products = await getProducts()
    

    return (
        <>
            <Header products = {products} />

            <main className='mx-auto w-full max-w-[900px] px-6 py-[96px] max-md:px-5 max-md:py-[64px] max-sm:px-4 max-sm:py-[48px]'>

                <div className='mb-12'>
                    <h1 className='text-[48px] font-semibold text-[var(--foreground)] max-md:text-[38px] max-sm:text-[30px]'>
                        Privacy Policy
                    </h1>

                    <p className='mt-3 text-sm text-[var(--text-accent)]'>
                        Last updated: September 2026
                    </p>
                </div>

                <div className='space-y-10 text-[15px] leading-7 text-[var(--text-accent)] max-sm:text-sm max-sm:leading-6'>

                    <section>
                        <p>
                            Waka NG respects your privacy and is committed to handling
                            personal information responsibly.
                        </p>

                        <p className='mt-4'>
                            Because purchases are completed through our official WhatsApp
                            channel rather than through an online payment checkout on the
                            website, information may be collected through both our website
                            and our customer communication channels.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            1. Information We Collect
                        </h2>

                        <p>
                            Depending on how you interact with Waka NG, we may collect:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Name</li>
                            <li>Phone number</li>
                            <li>Email address</li>
                            <li>Delivery address</li>
                            <li>Product and order information</li>
                            <li>Information provided through WhatsApp conversations</li>
                            <li>Payment confirmation information</li>
                            <li>Information necessary to arrange delivery or importation</li>
                            <li>
                                Website and technical information such as device or
                                browser information
                            </li>
                        </ul>

                        <p className='mt-4'>
                            We only seek information that is reasonably necessary for the
                            relevant purpose.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            2. How We Use Your Information
                        </h2>

                        <p>We may use your information to:</p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Respond to enquiries.</li>
                            <li>Process and manage orders.</li>
                            <li>Communicate with customers through WhatsApp.</li>
                            <li>Arrange product sourcing and importing.</li>
                            <li>Arrange delivery and logistics.</li>
                            <li>Confirm payments.</li>
                            <li>Provide customer support.</li>
                            <li>Handle returns, exchanges and refunds.</li>
                            <li>Prevent fraud and unauthorized activity.</li>
                            <li>Meet legal or regulatory requirements.</li>
                            <li>
                                Send marketing communications where permitted and
                                appropriate.
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            3. Lawful Processing
                        </h2>

                        <p>
                            Personal information will be processed on an appropriate lawful
                            basis, which may include consent, contractual necessity, legal
                            obligations or legitimate interests, depending on the particular
                            processing activity.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            4. Payment Information
                        </h2>

                        <p>
                            Waka NG does not process card payments directly through the
                            website.
                        </p>

                        <p className='mt-4'>
                            Payment arrangements are made through our official WhatsApp
                            channel after order details have been confirmed.
                        </p>

                        <p className='mt-4'>
                            Where third-party payment services or financial institutions
                            are used, payment information may be handled directly by those
                            providers under their applicable privacy and security practices.
                        </p>

                        <p className='mt-4'>
                            Waka NG does not request customers&apos; card PINs, CVVs, OTPs
                            or online banking passwords.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            5. Sharing Information
                        </h2>

                        <p>
                            We may share relevant information where reasonably necessary
                            with:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Delivery and logistics providers</li>
                            <li>International shipping providers</li>
                            <li>Payment or financial service providers</li>
                            <li>Technology and communications providers</li>
                            <li>Professional advisers</li>
                            <li>
                                Government or regulatory authorities where legally required
                            </li>
                        </ul>

                        <p className='mt-4'>
                            We do not sell customers&apos; personal information simply for
                            the purpose of selling customer data.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            6. International Transfers
                        </h2>

                        <p>
                            Where international sourcing or logistics requires personal
                            information to be transferred outside Nigeria, Waka NG will
                            take appropriate steps required under applicable data-protection
                            laws.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            7. Cookies and Website Information
                        </h2>

                        <p>
                            Our website may use cookies or similar technologies to support
                            functionality, understand website usage and improve the
                            customer experience.
                        </p>

                        <p className='mt-4'>
                            Where applicable, customers may control certain cookie settings
                            through their browser.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            8. Data Security
                        </h2>

                        <p>
                            Waka NG takes reasonable measures to protect personal
                            information against unauthorized access, loss, misuse,
                            alteration or disclosure.
                        </p>

                        <p className='mt-4'>
                            However, no internet-based system can be guaranteed to be
                            completely secure.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            9. Data Retention
                        </h2>

                        <p>
                            Personal information will be retained only for as long as
                            reasonably necessary for the purpose for which it was collected,
                            to provide services, resolve disputes, maintain appropriate
                            business records or meet legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            10. Your Rights
                        </h2>

                        <p>
                            Subject to applicable law, you may have rights concerning your
                            personal information, including rights relating to:
                        </p>

                        <ul className='mt-3 list-disc space-y-2 pl-5'>
                            <li>Access</li>
                            <li>Correction</li>
                            <li>Objection</li>
                            <li>Restriction</li>
                            <li>Deletion</li>
                            <li>
                                Withdrawal of consent where processing relies on consent
                            </li>
                            <li>Data portability</li>
                            <li>
                                Complaints concerning the handling of your personal
                                information
                            </li>
                        </ul>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            11. Marketing Communications
                        </h2>

                        <p>
                            Where Waka NG sends promotional communications, customers may
                            request that such communications stop.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            12. Children
                        </h2>

                        <p>
                            Waka NG does not knowingly seek to collect personal information
                            from children where such collection is not appropriate or
                            legally permitted.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            13. Third-Party Websites
                        </h2>

                        <p>
                            Our website may contain links or references to third-party
                            websites or services.
                        </p>

                        <p className='mt-4'>
                            Waka NG is not responsible for the privacy practices of
                            third-party websites.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            14. Privacy Complaints
                        </h2>

                        <p>
                            If you have a question or concern regarding the handling of
                            your personal information, contact us using the details below.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            15. Changes to This Privacy Policy
                        </h2>

                        <p>
                            This Privacy Policy may be updated periodically. Changes will
                            be published on this page with an updated date.
                        </p>
                    </section>

                    <section>
                        <h2 className='mb-3 text-xl font-semibold text-[var(--foreground)]'>
                            16. Contact
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