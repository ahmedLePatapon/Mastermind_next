import React from 'react'

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-6 px-5 py-10 text-center text-[#9393c8]">
            <div className="flex flex-wrap items-center justify-center gap-6">
                <a href="#" className="min-w-40 text-base font-normal hover:text-white">
                    About
                </a>
                <a href="#" className="min-w-40 text-base font-normal hover:text-white">
                    Credits
                </a>
            </div>
            <p className="text-base font-normal">© 2023 Mastermind</p>
        </footer>
    )
}
