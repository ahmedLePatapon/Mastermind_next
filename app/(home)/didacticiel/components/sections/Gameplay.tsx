// components/sections/Gameplay.tsx
import SectionTitle from '../SectionTitle';

export default function Gameplay() {
    return (
        <>
            <SectionTitle>Jeu</SectionTitle>
            <ol className="list-decimal list-inside text-white/80 text-base font-normal leading-normal pb-3 pt-1 px-4 space-y-2">
                <li>Le créateur de code (l'ordinateur) définit un code secret de 4 pions de couleur.</li>
                <li>Le casseur de code (vous!) fait une tentative en plaçant des pions de couleur dans une ligne.</li>
                <li>Le créateur de code fournit des commentaires en utilisant des pions de clé pour chaque tentative.</li>
            </ol>
        </>
    );
}
