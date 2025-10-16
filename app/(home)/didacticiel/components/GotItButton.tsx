import Link from "next/link";

export default function GotItButton() {
    return (
        <Link href={'/play'}>
            <button
                className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-primary/80 transition-colors">
                Compris!
            </button>
        </Link>
    );
}