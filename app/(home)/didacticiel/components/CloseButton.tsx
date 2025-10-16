import Link from "next/link";

// components/CloseButton.tsx
interface CloseButtonProps {
    onClick: () => void;
}

export default function CloseButton() {
    return (
        <Link href={'/'}>
            <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Fermer">
                <span className="material-symbols-outlined text-white">close</span>
            </button>
        </Link>
    );
}