// components/sections/WinningAndLosing.tsx
import SectionTitle from '../SectionTitle';

export default function WinningAndLosing() {
    return (
        <>
            <SectionTitle>Gagner et Perdre</SectionTitle>
            <ul className="list-disc list-inside text-white/80 text-base font-normal leading-normal pb-3 pt-1 px-4 space-y-2">
                <li>
                    <span className="font-bold text-white">Gagner:</span> Devinez le code secret correctement en 10 tours ou moins.
                </li>
                <li>
                    <span className="font-bold text-white">Perdre:</span> Échouez à deviner le code en 10 tours ou moins.
                </li>
            </ul>
        </>
    );
}