// components/sections/ExampleGuess.tsx
import PegRow from '../PegRow';
import FeedbackRow from '../FeedbackRow';

export default function ExampleGuess() {
    return (
        <div className="p-4 my-6 bg-white/5 rounded-lg">
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-3">
                Exemple de Tentative
            </h3>
            <div className="flex items-center justify-between gap-4 p-4 bg-black/20 rounded-md flex-col sm:flex-row">
                <div className="flex items-center gap-4 flex-col sm:flex-row">
                    <p className="text-white font-semibold">Votre Tentative:</p>
                    <PegRow colors={['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500']} size="w-8 h-8" />
                </div>
                <div className="flex items-center gap-4 flex-col sm:flex-row">
                    <p className="text-white font-semibold">Commentaire:</p>
                    <FeedbackRow />
                </div>
            </div>
            <p className="text-white/60 text-sm mt-3 px-1">
                Ici, vous avez deviné 4 couleurs. Le commentaire montre 1 couleur correcte à la bonne position (pion blanc) et 1 couleur correcte à la mauvaise position (pion vide).
            </p>
        </div>
    );
}
