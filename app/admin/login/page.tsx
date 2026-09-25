'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { XmarkCircleSolid } from 'iconoir-react'

export default function AdminLogin(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorModal, setErrorModal] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const router = useRouter()

    async function handleLogin(e: React.FormEvent){
        e.preventDefault()

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setErrorModal(true)
            setErrorMessage(error.message)
        } else {
            router.push('/admin/dashboard')
        }
    }

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center px-4 py-6">

            <Image
                src="/logo.svg"
                alt="waka-logo"
                width={40}
                height={40}
            />

            <h2 className="mt-2 text-2xl font-semibold tracking-[0%] text-[var(--foreground)]">
                Log in as Admin
            </h2>

            <form
                onSubmit={handleLogin}
                className="mt-8 flex w-full max-w-[420px] flex-col gap-6"
            >
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border-b border-[var(--border-color)] pb-2 text-sm outline-none"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full border-b border-[var(--border-color)] pb-2 text-sm outline-none"
                />

                <button
                    type="submit"
                    className="mt-3 w-full cursor-pointer bg-[var(--foreground)] p-3 text-[var(--background)] transition duration-[400ms] hover:scale-[1.02] hover:opacity-90"
                >
                    Login
                </button>
            </form>

            {errorModal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/[0.233] p-4">

                    <div className="flex w-full max-w-[350px] flex-col items-center bg-[var(--background)] p-10">

                        <XmarkCircleSolid
                            color="#C34545"
                            fontSize={48}
                        />

                        <p className="mt-4 text-base font-medium">
                            {errorMessage}
                        </p>

                        <button
                            type="button"
                            onClick={() => setErrorModal(false)}
                            className="mt-8 w-full cursor-pointer bg-[var(--foreground)] p-3 text-[var(--background)]"
                        >
                            Try Again
                        </button>

                    </div>

                </div>
            )}

        </div>
    )
}