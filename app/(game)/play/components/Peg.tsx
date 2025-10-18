
import type { PegProps } from "@/types";
import { COULEURS_MAP } from "@/lib/variables";
import { useEffect, useState } from "react";

export default function Peg({
    color,
    isEmpty = false,
    dashed = false,
    shouldReset = false,
    onColorChange
}: PegProps & { shouldReset: boolean; onColorChange: (color: string) => void }) {
    const COLORS = Object.values(COULEURS_MAP);
    const [currentColorIndex, setCurrentColorIndex] = useState<number>(
        color ? COLORS.indexOf(color) : 0
    );
    const [isActive, setIsActive] = useState(!isEmpty && !dashed);

    // Déclencher la réinitialisation
    useEffect(() => {
        if (shouldReset && isActive) {
            const timer = setTimeout(() => {
                setIsActive(false);
                // Changer de couleur aléatoire
                const randomIndex = Math.floor(Math.random() * COLORS.length);
                setCurrentColorIndex(randomIndex);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [shouldReset, isActive, COLORS.length]);

    const handleMouseWheel = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (!isActive) {
            setIsActive(true);
        }

        const isScrollingUp = e.deltaY < 0;
        let newIndex = currentColorIndex;

        if (isScrollingUp) {
            newIndex = (currentColorIndex + 1) % COLORS.length;
        } else {
            newIndex = (currentColorIndex - 1 + COLORS.length) % COLORS.length;
        }

        setCurrentColorIndex(newIndex);
        onColorChange(COLORS[newIndex]);
    };

    const displayColor = isActive ? COLORS[currentColorIndex] : undefined;

    if (!isActive) {
        return (
            <div
                className="w-10 h-10 rounded-full bg-gray-400 transition-colors cursor-pointer"
                onWheel={handleMouseWheel}
            ></div>
        );
    }

    return (
        <div
            className="w-10 h-10 rounded-full transition-colors cursor-pointer"
            style={{ backgroundColor: displayColor }}
            onWheel={handleMouseWheel}
        >
        </div>
    );
}
