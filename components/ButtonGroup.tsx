import Link from 'next/link'
import React from 'react'

export default function ButtonGroup() {
    return (
        <div className="flex w-full max-w-sm flex-col gap-3 px-4 py-3">
            <Link href={'/play'}>
                <button className="h-12 w-full rounded-lg bg-primary px-5 text-base font-bold text-white transition-transform duration-200 hover:scale-105">
                    Play Now
                </button>
            </Link>

            <Link href={'/didacticiel'}>
                <button
                    className="h-12 w-full rounded-lg bg-primary/30 px-5 text-base font-bold text-white transition-transform duration-200 hover:scale-105">
                    How to Play
                </button>
            </Link>
        </div>
    )
}
