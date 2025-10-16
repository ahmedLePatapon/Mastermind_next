
// components/SectionTitle.tsx
interface SectionTitleProps {
    children: string;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
            {children}
        </h2>
    );
}