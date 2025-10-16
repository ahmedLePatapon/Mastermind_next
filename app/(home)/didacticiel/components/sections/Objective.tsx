
// components/sections/Objective.tsx
import SectionTitle from '../SectionTitle';

export default function Objective() {
    return (
        <>
            <SectionTitle>Objectif</SectionTitle>
            <p className="text-white/80 text-base font-normal leading-normal pb-3 pt-1 px-4">
                Le casseur de code essaie de deviner le code secret en le moins de tours possible. Le créateur de code fournit des commentaires sur chaque tentative.
            </p>
        </>
    );
}
