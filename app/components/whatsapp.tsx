'use client'

import { useState, useEffect } from "react"
import { ChatBubbleQuestion } from "iconoir-react/solid"

export default function Whatsapp() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end">
      {show && (
        <div
          className={`w-[280px] overflow-hidden rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.2)] flex flex-col transition-all duration-400 ease-in-out ${
            show
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div className="flex items-center bg-[var(--foreground)] p-3 text-white">
            <div className="flex flex-col">
              <p className="m-0 text-base font-semibold">WAKA NG</p>
            </div>

            <button
              className="ml-auto cursor-pointer border-none bg-transparent p-0 text-[22px] font-bold leading-none text-white transition-transform duration-200 hover:scale-120"
              onClick={() => setShow(false)}
            >
              ×
            </button>
          </div>

          <div className="m-3 rounded-xl bg-[#f0f0f0] px-3 py-2.5 text-sm text-[#333]">
            <p>
              <a
                href={`https://wa.me/2348133896617?text=${encodeURIComponent(
                  `Hi Waka NG, `
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Need help with anything? you can reach out to us here
              </a>
            </p>
          </div>
        </div>
      )}

      {!show && (
        <div
          className="cursor-pointer transition-transform duration-200 hover:scale-110"
          onClick={() => setShow(true)}
        >
          <ChatBubbleQuestion
            color="var(--waka-blue)"
            fontSize={32}
          />
        </div>
      )}
    </div>
  )
}