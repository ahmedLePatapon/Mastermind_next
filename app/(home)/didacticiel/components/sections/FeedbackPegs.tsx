// components/sections/FeedbackPegs.tsx
import SectionTitle from '../SectionTitle';
import FeedbackPegItem from '../FeedbackPegItem';

export default function FeedbackPegs() {
    return (
        <>
            <SectionTitle>Pions de Commentaire</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
                <FeedbackPegItem
                    icon="white"
                    title="Couleur Correcte & Position"
                    description="Un pion blanc indique que l'un de vos pions devinés est la couleur correcte ET à la bonne position."
                />
                <FeedbackPegItem
                    icon="empty"
                    title="Couleur Correcte, Mauvaise Position"
                    description="Un pion vide avec une bordure blanche indique une couleur correcte mais à la mauvaise position."
                />
            </div>
        </>
    );
}