export default function Form(){
    return (
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center px-10 py-24 text-center max-md:px-6 max-md:py-[52px]">

            <h4 className="text-[48px] font-semibold tracking-[0%] text-[var(--foreground)] max-md:text-[32px]">
                Talk to us
            </h4>

            <p className="mt-4 w-full max-w-[720px] text-base leading-[30px] text-[var(--text-accent)] max-md:text-sm max-md:leading-[26px]">
                Whether you're looking for a product, need help with an order, want us to source something for you,
                need to move goods, or simply want to talk business, we'd love to hear from you.
            </p>

            <form className="mt-8 flex w-full max-w-[720px] flex-col gap-6">
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border-b border-[var(--border-color)] px-0 py-3 text-sm outline-none"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border-b border-[var(--border-color)] px-0 py-3 text-sm outline-none"
                />

                <textarea
                    rows={5}
                    placeholder="Message"
                    className="border-b border-[var(--border-color)] px-0 py-3 text-sm outline-none"
                />

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-[var(--foreground)] p-4 text-[var(--background)] transition duration-[400ms] hover:opacity-90"
                >
                    Submit
                </button>
            </form>

            <span className="mt-8 w-[80%] max-w-[720px] text-sm">
                Whatever brought you here, tell us what you need and we'll take it from there.{' '}
                <b className="cursor-pointer font-medium text-[var(--waka-blue)]">
                    hello@wakang.co
                </b>
            </span>

        </div>
    )
}