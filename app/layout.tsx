import type {Metadata, Viewport} from 'next'
import {Manrope} from 'next/font/google'
import './globals.css'
import {CartProvider} from './context/CartContext'

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    display: 'swap',
})

const SITE_URL = 'https://www.wakang.co'
const SITE_NAME = 'Waka NG'
const DESCRIPTION =
    'Shop electronics, fashion, beauty, home essentials and more in Nigeria. Waka NG also makes sending and delivering packages simple with reliable logistics services.'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: 'Waka NG | Shop Online & Send With Ease',
        template: '%s | Waka NG',
    },

    description: DESCRIPTION,

    applicationName: SITE_NAME,

    keywords: [
        'Waka NG',
        'online shopping Nigeria',
        'shop online Nigeria',
        'electronics Nigeria',
        'fashion Nigeria',
        'beauty products Nigeria',
        'home essentials Nigeria',
        'logistics Nigeria',
        'package delivery Nigeria',
    ],

    alternates: {
        canonical: '/',
    },

    openGraph: {
        type: 'website',
        url: '/',
        siteName: SITE_NAME,
        title: 'Waka NG | Shop Online & Send With Ease',
        description: DESCRIPTION,
        locale: 'en_NG',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Waka NG',
            },
        ],
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Waka NG | Shop Online & Send With Ease',
        description: DESCRIPTION,
        images: ['/og-image.png'],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },

    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },

    // manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#ffffff',
}

const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Organization',
            '@id': `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.svg`,
        },
        {
            '@type': 'WebSite',
            '@id': `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            publisher: {
                '@id': `${SITE_URL}/#organization`,
            },
            inLanguage: 'en-NG',
        },
    ],
}

export default function RootLayout({children}: LayoutProps<'/'>) {
    return (
        <html
            lang='en-NG'
            className={`${manrope.variable} h-full antialiased`}
        >
            <body className='flex min-h-full flex-col'>
                <CartProvider>
                    {children}
                </CartProvider>

                <script
                    type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(jsonLd).replace(
                            /</g,
                            '\\u003c'
                        ),
                    }}
                />
            </body>
        </html>
    )
}