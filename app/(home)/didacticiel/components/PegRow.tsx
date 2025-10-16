// components/PegRow.tsx
interface PegRowProps {
    colors: string[];
    size?: string;
}

export default function PegRow({ colors, size = 'w-8 h-8' }: PegRowProps) {
    return (
        <div className="flex gap-2">
            {colors.map((color, idx) => (
                <div key={idx} className={`${size} rounded-full ${color}`} />
            ))}
        </div>
    );
}
