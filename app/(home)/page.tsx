import React from 'react'
import HeadingSection from '@/components/HeadingSection'
import PegsDisplay from '@/components/PegsDisplay'
import ButtonGroup from '@/components/ButtonGroup'
import Footer from '@/components/Footer'

export default function MastermindPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-white">
      <div className="flex flex-1 flex-col justify-center px-4 py-5 md:px-10 lg:px-40">
        <div className="mx-auto flex max-w-[960px] flex-1 flex-col items-center justify-center text-center">
          <HeadingSection />
          <PegsDisplay />
          <ButtonGroup />
        </div>
      </div>
      <Footer />
    </main>
  )
}
