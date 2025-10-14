import React from 'react'

export default function HeadingSection() {
    return (
        <div className="flex w-full flex-col items-center gap-4 p-4">
            <h1 className="text-5xl font-black tracking-[-0.033em] text-white md:text-6xl">
                Mastermind
            </h1>
            <p className="max-w-md text-lg font-normal leading-normal text-[#9393c8]">
                Guess the secret code in a limited number of tries. Use logic and deduction to crack the code!
            </p>
        </div>
    )
}
