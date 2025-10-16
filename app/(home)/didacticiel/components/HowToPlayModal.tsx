'use client';

import { useEffect } from 'react';

// components/HowToPlayModal.tsx
import CloseButton from './CloseButton';
import Objective from './sections/Objective';
import Gameplay from './sections/Gameplay';
import ExampleGuess from './sections/ExampleGuess';
import FeedbackPegs from './sections/FeedbackPegs';
import WinningAndLosing from './sections/WinningAndLosing';
import GotItButton from './GotItButton';


export default function HowToPlayModal() {
    return (
        <div className="inset-0 z-50 flex items-center justify-center p-4" >
            <div className="bg-background-dark rounded-xl w-full max-w-7xl max-h-[90vh] shadow-2xl">
                <div className="flex flex-col">
                    <div className="flex justify-end p-4 sticky top-0 border-b border-white/10 ">
                        <CloseButton />
                    </div>

                    <div className="flex flex-wrap justify-between gap-3 px-4 pt-2">
                        <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                            Comment Jouer à Mastermind
                        </h1>
                    </div>

                    <div className="px-4 pb-8">
                        <Objective />
                        <Gameplay />
                        <ExampleGuess />
                        <FeedbackPegs />
                        <WinningAndLosing />
                    </div>

                    <div className="flex justify-center p-4 border-t border-white/10 bg-background-dark sticky bottom-0">
                        <GotItButton />
                    </div>
                </div>
            </div>
        </div >
    );
}