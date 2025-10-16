// app/page.tsx
'use client';

import { useState } from 'react';
import HowToPlayModal from './components/HowToPlayModal';

export default function Home() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark">
            <HowToPlayModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
    );
}


